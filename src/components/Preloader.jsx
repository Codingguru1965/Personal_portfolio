import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    tl.fromTo(textRef.current, 
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
    .to(textRef.current, {
      opacity: 0,
      scale: 1.2,
      delay: 0.5,
      duration: 0.5,
      ease: "power2.in"
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 0.9,
      ease: "power4.inOut"
    });
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#00181c',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div ref={textRef} className="text-center">
        <h1 style={{ color: '#f5deb3', fontSize: '3.5rem', fontWeight: 800, letterSpacing: '4px' }}>AY.</h1>
        <p style={{ color: '#ffffff', letterSpacing: '3px', fontSize: '0.9rem', textTransform: 'uppercase' }}>
          Crafting Digital Experiences
        </p>
      </div>
    </div>
  );
};

export default Preloader;