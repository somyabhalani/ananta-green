import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import CLOUDS from 'vanta/src/vanta.clouds'

export default function VantaHero({ children }) {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      try {
        setVantaEffect(CLOUDS({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          backgroundColor: 0xffffff,
          skyColor: 0x68b8d7,
          cloudColor: 0xadc1de,
          cloudShadowColor: 0x183550,
          sunColor: 0xff9919,
          sunGlareColor: 0xff6633,
          sunlightColor: 0xff9933,
          speed: 1.0
        }))
      } catch (error) {
        console.error("Vanta initialization failed:", error)
      }
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <section className="hero" ref={myRef} style={{ 
      position: 'relative', 
      overflow: 'hidden', 
      minHeight: '100vh',
      transform: 'translateZ(0)',
      willChange: 'transform'
    }}>
      {/* Dark overlay so text remains readable against bright clouds */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(244, 248, 245, 0.2)', zIndex: 0, pointerEvents: 'none' }}></div>
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {children}
      </div>
    </section>
  )
}
