import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import ParallaxHeroText from '../components/ParallaxHeroText';
import PillButton from '../components/PillButton';
import BrandLogo from '../components/BrandLogo';
import AnantaLabsLogo from '../components/AnantaLabsLogo';
import TiltCard from '../components/TiltCard';

export default function Home() {
  useEffect(() => {
    document.title = "Ananta Green";
  }, []);

  return (
    <div className="canvas-content" style={{ paddingTop: '2vw' }}>
      <header>
        <BrandLogo />
      </header>

      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="hero-content" style={{ zIndex: 10, position: 'relative' }}>
          <ParallaxHeroText className="hero-headline">
            The sun. The wind. The water.<br/>
            They always were enough.
          </ParallaxHeroText>
          
          <AnimatedText delay={0.1} className="hero-subtext">
            Green was never a trend or a movement. It was the original state of everything before we decided otherwise. It still is. Just waiting.
          </AnimatedText>
        </div>
      </section>

      <section className="the-number" style={{ paddingTop: '2rem' }}>
        <AnimatedText delay={0.1} className="number-huge">300+</AnimatedText>
        <AnimatedText delay={0.2} className="number-desc">
          Days of sunlight India receives annually on average. The most democratic energy source ever known to exist. Free for everyone. Used by almost no one correctly.
        </AnimatedText>
      </section>

      <div className="soft-divider"></div>

      <section className="narrative">
        <AnimatedText delay={0.1} as="p">
          The sun does not run out. The wind does not stop. The water does not disappear. Neither does the intention behind what is being built here.
        </AnimatedText>
      </section>

      <section className="showcase-grid container">
        <TiltCard className="showcase-card">
          <h3 style={{ transform: "translateZ(30px)" }}>Solara — Live — Free</h3>
          <p style={{ transform: "translateZ(20px)" }}>
            Every home has a solar story. How much it needs. How much it can generate. How long before it pays for itself. Most people never get to read that story because nobody made it simple enough. Solara does.
          </p>
          <div style={{ transform: "translateZ(40px)" }}>
            <a href="https://solara-dash.vercel.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <PillButton as="span">Open Solara</PillButton>
            </a>
          </div>
        </TiltCard>

        <TiltCard className="showcase-card">
          <h3 style={{ transform: "translateZ(30px)" }}>What is coming.</h3>
          <p style={{ transform: "translateZ(20px)" }}>
            Solara is the beginning. There is more being built. All of it free. All of it open. All of it aimed at the same place — making clean energy decisions obvious for anyone, anywhere, regardless of who they are or what they know.
          </p>
        </TiltCard>
      </section>

      <section className="quote-section">
        <AnimatedText delay={0.1} className="quote-text">
          "The most expensive energy is the kind you did not have to buy."
        </AnimatedText>
      </section>

      <section className="showcase-grid container">
        <TiltCard className="showcase-card">
          <h3 style={{ transform: "translateZ(30px)" }}>Journal</h3>
          <p style={{ transform: "translateZ(20px)" }}>
            The world's largest carbon certifier approved credits for forests that were never threatened. Companies called themselves carbon neutral anyway. We wrote about what that actually means.
          </p>
          <div style={{ transform: "translateZ(40px)" }}>
            <Link to="/green/journal/carbon" style={{ textDecoration: 'none' }}>
              <PillButton as="span">Read the piece</PillButton>
            </Link>
          </div>
        </TiltCard>

        <TiltCard className="showcase-card">
          <h3 style={{ transform: "translateZ(30px)" }}>For those building in this space.</h3>
          <p style={{ transform: "translateZ(20px)" }}>
            If you are a CleanTech startup, a solar company, or an energy brand that needs something built properly — Ananta engineers it. Not off the shelf. Not approximated. From the ground up.
          </p>
          <div style={{ transform: "translateZ(40px)" }}>
            <PillButton href="mailto:hello@anantalabs.app">Start a conversation</PillButton>
          </div>
        </TiltCard>
      </section>

      <footer style={{ 
        position: 'relative', 
        overflow: 'hidden',
        minHeight: '100vh', // Make the footer a massive fullscreen block
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: '10vh',
        marginTop: '10vh'
      }}>
        {/* Cinematic Background Video */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 0,
          pointerEvents: 'none'
        }}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              // Use a true CSS mask to fade the top of the video out completely
              // This guarantees a perfect blend no matter what the background color is
              maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 5%, black 35%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 5%, black 35%, black 100%)',
            }}
          >
            <source src="/footer_video.mp4" type="video/mp4" />
          </video>
        </div>

        <div style={{ position: 'relative', zIndex: 1, color: '#ffffff', textAlign: 'center' }}>
          <AnimatedText delay={0.0} className="footer-line" style={{ fontFamily: 'var(--font-headline)', color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
            <span style={{ fontStyle: 'italic', textTransform: 'lowercase', letterSpacing: '0.02em', fontWeight: 400 }}>ananta green</span> — a direction by <a href="https://www.anantalabs.app" target="_blank" rel="noopener noreferrer" style={{ color: '#c8a25c', fontWeight: 500, textDecoration: 'none' }}>Ananta Labs.</a>
          </AnimatedText>
          <AnimatedText delay={0.1} className="footer-line" style={{ color: 'rgba(255,255,255,0.9)', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>Small decisions. Permanent difference.</AnimatedText>
          <AnimatedText delay={0.2} className="footer-brand" style={{ color: '#ffffff', textShadow: '0 4px 20px rgba(0,0,0,0.9)' }}>अनन्त.</AnimatedText>
          <AnimatedText delay={0.3} style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: '2rem' }}>
            &copy; {new Date().getFullYear()} Ananta Labs. All rights reserved.
          </AnimatedText>
        </div>
      </footer>
    </div>
  );
}
