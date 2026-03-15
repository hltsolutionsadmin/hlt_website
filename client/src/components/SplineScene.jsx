import { Suspense, lazy, useState } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

/**
 * SplineScene — Production-ready lazy-loaded Spline wrapper
 * 
 * Usage:
 *   <SplineScene 
 *     scene="https://prod.spline.design/YOUR_ID/scene.splinecode"
 *     className="w-full h-full"
 *   />
 */
export function SplineScene({ scene, className, onLoad }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = (app) => {
    setIsLoaded(true);
    if (onLoad) onLoad(app);
  };

  return (
    <Suspense 
      fallback={
        <div className="flex items-center justify-center w-full h-full bg-transparent">
          <LoadingSpinner />
        </div>
      }
    >
      <div 
        className={`spline-container ${className || ''}`}
        style={{ 
          width: '100%', 
          height: '100%', 
          opacity: isLoaded ? 1 : 0, 
          transition: 'opacity 0.8s ease-out' 
        }}>
        <Spline 
          scene={scene} 
          onLoad={handleLoad} 
        />
      </div>
    </Suspense>
  );
}

function LoadingSpinner() {
  return (
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid rgba(168, 255, 0, 0.1)',
      borderTopColor: 'var(--lime)',
      borderRadius: '50%',
      animation: 'spline-spin 0.8s linear infinite'
    }} />
  );
}

// Global styles for the spinner
if (typeof document !== 'undefined') {
  const styleId = 'spline-scene-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @keyframes spline-spin {
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }
}
