import React from 'react'
import StateOfTheArtRain from './StateOfTheArtRain'

export default function RainSection({ children }) {
  return (
    <section 
      className="rain-section"
      style={{ 
        position: 'relative', 
        width: '100%',
        height: '100%', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#071512', // match new premium teal
        color: '#ffffff'
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <StateOfTheArtRain />
      </div>

      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '800px', padding: '0 4vw' }}>
        {children}
      </div>
    </section>
  )
}
