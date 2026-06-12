import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import SmoothScroll from './components/SmoothScroll'
import DynamicEnvironment from './components/DynamicEnvironment'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import CarbonJournal from './pages/CarbonJournal'
import CarbonixMap from './pages/carbonix/CarbonixMap'
import CarbonixProfile from './pages/carbonix/CarbonixProfile'
import CarbonixVerifying from './pages/carbonix/CarbonixVerifying'
import CarbonixCertificate from './pages/carbonix/CarbonixCertificate'
import './App.css'

function App() {
  const location = useLocation();
  
  return (
    <>
      {/* The beautifully rounded black overlay frame that sits on top of everything */}
      <div id="app-frame" style={{
        position: 'fixed',
        top: '2vw', bottom: '2vw', left: '2vw', right: '2vw',
        borderRadius: '32px',
        boxShadow: '0 0 0 100vmax #0d0d0d',
        pointerEvents: 'none',
        zIndex: 9999
      }}></div>

      <DynamicEnvironment />
      <ScrollToTop />

      <SmoothScroll>
        
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/green/journal/carbon" element={<PageTransition><CarbonJournal /></PageTransition>} />
            
            {/* Carbonix Multi-Page Flow */}
            <Route path="/carbonix/map" element={<PageTransition><CarbonixMap /></PageTransition>} />
            <Route path="/carbonix/profile" element={<PageTransition><CarbonixProfile /></PageTransition>} />
            <Route path="/carbonix/verifying" element={<PageTransition><CarbonixVerifying /></PageTransition>} />
            <Route path="/carbonix/certificate" element={<PageTransition><CarbonixCertificate /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </SmoothScroll>
    </>
  )
}

export default App
