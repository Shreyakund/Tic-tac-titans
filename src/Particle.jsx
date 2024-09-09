import React, { useRef, useEffect, useState } from 'react';

function Particle() {
  const canvasRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const initializeParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particleCount = isSmallScreen ? 70 : 130;
    const particlesArray = [];

    for (let i = 0; i < particleCount; i++) {
      particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        radius: Math.random() * 5 + 1,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // No background color logic here; rely on parent component's background color

      particlesArray.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });

      if (!isSmallScreen) {
        for (let i = 0; i < particlesArray.length; i++) {
          for (let j = i + 1; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
              ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
              ctx.strokeStyle = `hsla(${Math.random() * 360}, 100%, 50%, 0.5)`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    initializeParticles();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSmallScreen]);

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
}

export default Particle;
