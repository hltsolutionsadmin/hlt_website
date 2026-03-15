import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for mobile/tablet to disable custom cursor
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Dynamic state detection for interactive elements
    const handleEvents = () => {
      const interactives = document.querySelectorAll('button, a, input, textarea, [role="button"], .spline-container, .glass-card, .nav-link, .btn-primary, .btn-ghost');
      
      const setHoverTrue = () => setIsHovering(true);
      const setHoverFalse = () => setIsHovering(false);

      interactives.forEach(el => {
        el.addEventListener('mouseenter', setHoverTrue);
        el.addEventListener('mouseleave', setHoverFalse);
      });

      return () => {
        interactives.forEach(el => {
          el.removeEventListener('mouseenter', setHoverTrue);
          el.removeEventListener('mouseleave', setHoverFalse);
        });
      };
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    
    const cleanupInteractives = handleEvents();
    const observer = new MutationObserver(handleEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', checkViewport);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cleanupInteractives();
      observer.disconnect();
    };
  }, [isVisible]);

  // Don't render on mobile or SSR
  if (isMobile) return null;

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      pointerEvents: 'none', 
      zIndex: 999999, 
      opacity: isVisible ? 1 : 0,
      visibility: isVisible ? 'visible' : 'hidden',
      transition: 'opacity 0.3s ease, visibility 0.3s ease'
    }}>
      {/* Outer Ring / Follower */}
      <div 
        style={{ 
          position: 'absolute',
          left: position.x, 
          top: position.y,
          width: isHovering ? 60 : 36,
          height: isHovering ? 60 : 36,
          border: `1.5px solid ${isHovering ? 'var(--lime)' : 'rgba(168, 255, 0, 0.4)'}`,
          borderRadius: isHovering ? '12px' : '50%',
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.9 : 1})`,
          transition: 'width 0.2s cubic-bezier(0.23, 1, 0.32, 1), height 0.2s cubic-bezier(0.23, 1, 0.32, 1), border-radius 0.3s ease, border-color 0.2s ease, transform 0.1s ease',
          background: isHovering ? 'rgba(168, 255, 0, 0.05)' : 'transparent',
          boxShadow: isHovering ? '0 0 15px rgba(168, 255, 0, 0.2)' : 'none',
        }}
      />
      
      {/* Inner Core / Precise Point */}
      <div 
        style={{ 
          position: 'absolute',
          left: position.x, 
          top: position.y,
          width: 5,
          height: 5,
          background: 'var(--lime)',
          transform: `translate(-50%, -50%) rotate(45deg) scale(${isClicking ? 1.4 : 1})`,
          boxShadow: '0 0 10px var(--lime), 0 0 20px rgba(168, 255, 0, 0.5)',
          transition: 'transform 0.1s ease-out',
        }}
      />
    </div>
  );
};

export default CustomCursor;
