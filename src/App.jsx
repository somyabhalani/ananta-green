import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import SmoothScroll from './components/SmoothScroll'
import DynamicEnvironment from './components/DynamicEnvironment'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import CarbonJournal from './pages/CarbonJournal'
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
          </Routes>
        </AnimatePresence>
      </SmoothScroll>
    </>
  )
}

export default App
