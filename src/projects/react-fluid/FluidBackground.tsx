import React, { useEffect, useRef } from 'react';
import { initFluid } from './fluid.js';

export default function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Prevent double initialization in StrictMode
    if (canvasRef.current.dataset.initialized === 'true') return;
    canvasRef.current.dataset.initialized = 'true';
    
    initFluid(canvasRef.current, {
      BACK_COLOR: { r: 255, g: 255, b: 255 },
      GUI: false,
      INITIAL_SPLATS: false,
      TRANSPARENT: true,
      DRAW_CHECKERBOARD: false,
      WINDOW_LISTENERS: true,
      DENSITY_DISSIPATION: 0.97,
      VELOCITY_DISSIPATION: 0.95,
      CURL: 0,
      SPLAT_FORCE: 7000,
      SPLAT_RADIUS: 0.06,
      BLOOM_INTENSITY: 0.01,
      SUNRAYS_WEIGHT: 0.3,
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="fluid-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 50,
        pointerEvents: 'none',
      }}
    />
  );
}
