import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';
import BrandLogo from '../components/BrandLogo';
import PillButton from '../components/PillButton';

export default function CarbonJournal() {
  useEffect(() => {
    document.title = "The Imaginary Forest — Ananta Green";
  }, []);

  return (
    <div className="canvas-content" style={{ paddingTop: '2vw', paddingBottom: '4vw', minHeight: '100vh' }}>
      <header>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <BrandLogo />
        </Link>
      </header>

      <article className="container" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '10vw', paddingBottom: '4vw' }}>
        <AnimatedText as="h1" className="hero-headline" animateOnLoad={true} style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '3rem' }}>
          The Imaginary Forest
        </AnimatedText>

        <section style={{ marginBottom: '4rem' }}>
          <AnimatedText as="h3" style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(1.3rem, 4vw, 1.5rem)', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
            Part 1 — "The world's largest carbon certifier approved credits for forests that were never threatened."
          </AnimatedText>
          
          <AnimatedText as="p" style={{ fontSize: 'clamp(1.05rem, 3vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--color-text-body)' }}>
            There is a company called Verra that approves carbon credits. Companies buy these credits by funding "protection" of forests — essentially paying to keep forests from being cut down.
          </AnimatedText>
          
          <AnimatedText as="p" style={{ fontSize: 'clamp(1.05rem, 3vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--color-text-body)' }}>
            But investigations found that most of these forests were never actually going to be cut down in the first place. Nobody was threatening them. They were safe regardless.
          </AnimatedText>
          
          <AnimatedText as="p" style={{ fontSize: 'clamp(1.05rem, 3vw, 1.2rem)', lineHeight: 1.8, color: 'var(--color-text-body)' }}>
            So the credit was protecting something that did not need protecting. The carbon was never actually saved. It was imaginary.
          </AnimatedText>
        </section>

        <div className="soft-divider" style={{ margin: '4rem 0' }}></div>

        <section>
          <AnimatedText as="h3" style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(1.3rem, 4vw, 1.5rem)', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
            Part 2 — "Companies called themselves carbon neutral anyway."
          </AnimatedText>
          
          <AnimatedText as="p" style={{ fontSize: 'clamp(1.05rem, 3vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--color-text-body)' }}>
            Despite buying these worthless credits — credits backed by forests that were never at risk — corporations still announced to the world that they were carbon neutral. Net zero. Sustainable.
          </AnimatedText>
          
          <AnimatedText as="p" style={{ fontSize: 'clamp(1.05rem, 3vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--color-text-body)' }}>
            Their emissions did not reduce by a single tonne.
          </AnimatedText>
          
          <AnimatedText as="p" style={{ fontSize: 'clamp(1.05rem, 3vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--color-text-body)' }}>
            They just bought a certificate that said they did.
          </AnimatedText>
          
          <AnimatedText as="p" style={{ fontSize: 'clamp(1.05rem, 3vw, 1.2rem)', lineHeight: 1.8, color: 'var(--color-text-body)' }}>
            And told their customers, shareholders, and governments that the problem was handled.
          </AnimatedText>
        </section>
        
        <footer style={{ marginTop: '10rem', textAlign: 'center', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <PillButton as="span" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              &#8592; Return to Index
            </PillButton>
          </Link>
        </div>
      </footer>
      </article>
    </div>
  );
}
