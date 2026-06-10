import React from 'react';

export default function AnantaLabsLogo() {
  return (
    <span style={{ 
      display: 'inline-flex', 
      alignItems: 'baseline', 
      gap: '0.4em', 
      whiteSpace: 'nowrap',
      lineHeight: 1
    }}>
      <span style={{ 
        fontFamily: "var(--font-headline), 'Playfair Display', serif",
        fontWeight: 500,
        letterSpacing: '0.02em',
        fontSize: '1.05em',
        color: 'var(--color-text-heading)'
      }}>
        Ananta
      </span>
      <span style={{ 
        fontFamily: "'Silkscreen', monospace", 
        color: '#c8a25c', /* Exact muted gold from screenshot */
        transform: 'skewX(-16deg)', /* Pronounced slant */
        display: 'inline-block',
        fontSize: '0.8em',
        letterSpacing: '0.05em',
        textTransform: 'uppercase', /* Screenshot uses all caps LABS */
        fontWeight: 'normal'
      }}>
        Labs
      </span>
    </span>
  );
}
