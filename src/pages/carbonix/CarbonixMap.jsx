import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Map, { Source, Layer, Marker } from 'react-map-gl';
import * as turf from '@turf/turf';
import 'mapbox-gl/dist/mapbox-gl.css';

// Replace with a real token in production or .env
const MAPBOX_TOKEN = "pk.eyJ1IjoiYW5hbnRhbGFicyIsImEiOiJjbHcwMHlkcDAwMDJqMmpwaThxdnUybnBwIn0.placeholder"; 

export default function CarbonixMap() {
  const navigate = useNavigate();
  const [points, setPoints] = useState([]);
  const [viewState, setViewState] = useState({
    longitude: -122.4,
    latitude: 37.8,
    zoom: 14
  });

  const handleMapClick = (e) => {
    setPoints([...points, [e.lngLat.lng, e.lngLat.lat]]);
  };

  const undoLastPoint = () => {
    setPoints(points.slice(0, -1));
  };

  const clearPoints = () => {
    setPoints([]);
  };

  // Create GeoJSON for the lines/polygon
  const data = useMemo(() => {
    if (points.length === 0) return null;
    
    // If only points or line, draw a LineString
    if (points.length < 3) {
      return {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: points
        }
      };
    }
    
    // If 3 or more points, close the polygon
    return {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[...points, points[0]]] // Close the loop
      }
    };
  }, [points]);

  // Calculate Area
  const areaSqMeters = useMemo(() => {
    if (points.length < 3) return 0;
    const polygon = turf.polygon([[...points, points[0]]]);
    return Math.round(turf.area(polygon));
  }, [points]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ 
        width: '100vw', 
        height: '100vh', 
        position: 'relative',
        backgroundColor: '#050505',
        color: 'white',
        overflow: 'hidden'
      }}
    >
      {/* The Map */}
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        onClick={handleMapClick}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{ width: '100%', height: '100%' }}
        interactiveLayerIds={['data']}
      >
        {data && (
          <Source type="geojson" data={data}>
            <Layer 
              id="data" 
              type={points.length < 3 ? 'line' : 'fill'} 
              paint={
                points.length < 3 
                ? { 'line-color': '#00ff88', 'line-width': 3 }
                : { 'fill-color': '#00ff88', 'fill-opacity': 0.3 }
              } 
            />
            {points.length >= 3 && (
               <Layer 
                id="data-outline" 
                type="line" 
                paint={{ 'line-color': '#00ff88', 'line-width': 3 }} 
               />
            )}
          </Source>
        )}
        
        {/* Draw Markers at clicked points */}
        {points.map((pt, i) => (
          <Marker key={i} longitude={pt[0]} latitude={pt[1]} anchor="center">
            <div style={{
              width: '12px', height: '12px', 
              backgroundColor: '#00ff88', 
              borderRadius: '50%',
              boxShadow: '0 0 10px #00ff88'
            }} />
          </Marker>
        ))}
      </Map>

      {/* Floating UI Panel (Fully Rounded) */}
      <div style={{
        position: 'absolute',
        bottom: '4vw',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(20, 20, 20, 0.85)',
        backdropFilter: 'blur(20px)',
        padding: '24px 32px',
        borderRadius: '999px',
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
      }}>
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: '#888' }}>
            Mapped Area
          </span>
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>
            {areaSqMeters.toLocaleString()} <span style={{ fontSize: '16px', color: '#888', fontWeight: 'normal' }}>sq meters</span>
          </span>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={undoLastPoint}
            disabled={points.length === 0}
            style={{
              padding: '12px 24px',
              borderRadius: '999px',
              border: 'none',
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: 'white',
              cursor: points.length === 0 ? 'not-allowed' : 'pointer',
              opacity: points.length === 0 ? 0.5 : 1
            }}
          >
            Undo
          </button>
          <button 
            onClick={() => navigate('/carbonix/profile')}
            disabled={points.length < 3}
            style={{
              padding: '12px 32px',
              borderRadius: '999px',
              border: 'none',
              backgroundColor: points.length < 3 ? '#333' : '#fff',
              color: points.length < 3 ? '#888' : '#000',
              fontWeight: 'bold',
              cursor: points.length < 3 ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: points.length >= 3 ? '0 10px 20px rgba(255,255,255,0.2)' : 'none'
            }}
          >
            Confirm Boundary
          </button>
        </div>
      </div>

      {/* Helper Toast */}
      {points.length < 3 && (
        <div style={{
          position: 'absolute',
          top: '4vw',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '999px',
          fontSize: '14px',
          letterSpacing: '1px'
        }}>
          Click the map to draw your property boundary
        </div>
      )}
    </motion.div>
  );
}
