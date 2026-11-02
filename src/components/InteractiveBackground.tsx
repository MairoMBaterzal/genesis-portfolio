import React, { useEffect, useRef } from 'react';

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track scroll and mouse with smooth lerp
    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let targetMouseX = width / 2;
    let targetMouseY = height / 3;
    let currentMouseX = width / 2;
    let currentMouseY = height / 3;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      targetMouseX = clientX;
      targetMouseY = clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // The exact color palette from user's image (media_1793660069320_de986e26.jpg):
    // 1. Magenta / Pink (#f472b6, #ec4899)
    // 2. Soft Periwinkle / Violet (#818cf8, #a78bfa)
    // 3. Ethereal Sky Blue (#38bdf8, #60a5fa)
    // 4. Radiant Butter Yellow (#fef08a, #facc15)
    // 5. Warm Peach Coral (#fb923c, #fda4af)
    const blobs = [
      {
        baseX: 0.15,
        baseY: 0.2,
        radius: 0.55,
        colorStart: 'rgba(244, 114, 182, 0.85)', // Pink
        colorEnd: 'rgba(244, 114, 182, 0)',
        speedX: 0.0008,
        speedY: 0.0011,
        scrollFactor: 0.45,
        mouseFactor: 0.08,
      },
      {
        baseX: 0.45,
        baseY: 0.18,
        radius: 0.5,
        colorStart: 'rgba(129, 140, 248, 0.75)', // Periwinkle Blue
        colorEnd: 'rgba(129, 140, 248, 0)',
        speedX: -0.0009,
        speedY: 0.0007,
        scrollFactor: -0.35,
        mouseFactor: -0.06,
      },
      {
        baseX: 0.82,
        baseY: 0.75,
        radius: 0.6,
        colorStart: 'rgba(254, 240, 138, 0.95)', // Radiant Butter Yellow
        colorEnd: 'rgba(254, 240, 138, 0)',
        speedX: 0.0007,
        speedY: -0.0009,
        scrollFactor: -0.5,
        mouseFactor: 0.05,
      },
      {
        baseX: 0.2,
        baseY: 0.8,
        radius: 0.55,
        colorStart: 'rgba(251, 146, 60, 0.7)', // Peach Coral
        colorEnd: 'rgba(251, 146, 60, 0)',
        speedX: -0.0012,
        speedY: 0.0008,
        scrollFactor: 0.6,
        mouseFactor: -0.07,
      },
      {
        baseX: 0.75,
        baseY: 0.25,
        radius: 0.45,
        colorStart: 'rgba(56, 189, 248, 0.7)', // Sky Cyan
        colorEnd: 'rgba(56, 189, 248, 0)',
        speedX: 0.0011,
        speedY: 0.0013,
        scrollFactor: -0.4,
        mouseFactor: 0.09,
      },
      {
        baseX: 0.5,
        baseY: 0.55,
        radius: 0.48,
        colorStart: 'rgba(244, 63, 94, 0.55)', // Rose Core
        colorEnd: 'rgba(244, 63, 94, 0)',
        speedX: 0.0006,
        speedY: -0.0007,
        scrollFactor: 0.3,
        mouseFactor: 0.04,
      }
    ];

    // Floating dynamic bokeh particles
    const particles = Array.from({ length: 24 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 4 + 2,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.5 - 0.2,
      alpha: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.5 ? '#f472b6' : '#fde047',
    }));

    let time = 0;

    const render = () => {
      time += 1;

      // Smooth interpolation for scroll and mouse
      currentScrollY += (targetScrollY - currentScrollY) * 0.08;
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Base canvas clear with soft pastel foundation
      ctx.fillStyle = '#faeef2';
      ctx.fillRect(0, 0, width, height);

      // Mouse normalized offsets (-1 to 1)
      const normMouseX = (currentMouseX / width - 0.5) * 2;
      const normMouseY = (currentMouseY / height - 0.5) * 2;

      // Draw interactive flowing gradient blobs
      blobs.forEach((blob, idx) => {
        // Continuous organic wave oscillation
        const waveX = Math.sin(time * blob.speedX + idx) * 0.12 * width;
        const waveY = Math.cos(time * blob.speedY + idx * 1.5) * 0.12 * height;

        // Scroll displacement: as you scroll down, blobs shift dynamically across viewport
        const scrollOffsetY = ((currentScrollY * blob.scrollFactor) % height);

        // Mouse displacement: cursor draws or pushes the fluid
        const mouseOffsetX = normMouseX * blob.mouseFactor * width;
        const mouseOffsetY = normMouseY * blob.mouseFactor * height;

        const cx = blob.baseX * width + waveX + mouseOffsetX;
        let cy = blob.baseY * height + waveY + mouseOffsetY + scrollOffsetY;

        // Wrap around smoothly if scrolled far
        if (cy < -height * 0.5) cy += height * 2;
        if (cy > height * 1.5) cy -= height * 2;

        const maxDim = Math.max(width, height);
        // Dynamic breathing radius linked to time & scroll speed
        const scrollVelocity = Math.abs(targetScrollY - currentScrollY);
        const radius = blob.radius * maxDim * (1 + Math.sin(time * 0.015 + idx) * 0.08 + Math.min(scrollVelocity * 0.001, 0.25));

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, blob.colorStart);
        grad.addColorStop(0.5, blob.colorStart.replace(/[\d.]+\)$/, '0.35)'));
        grad.addColorStop(1, blob.colorEnd);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Interactive mouse follow halo light
      const mouseHalo = ctx.createRadialGradient(
        currentMouseX,
        currentMouseY,
        0,
        currentMouseX,
        currentMouseY,
        Math.min(width, height) * 0.4
      );
      mouseHalo.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
      mouseHalo.addColorStop(0.5, 'rgba(254, 240, 138, 0.15)');
      mouseHalo.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = mouseHalo;
      ctx.beginPath();
      ctx.arc(currentMouseX, currentMouseY, Math.min(width, height) * 0.4, 0, Math.PI * 2);
      ctx.fill();

      // Render subtle drifting bokeh particles
      particles.forEach((p) => {
        p.x += p.vx + normMouseX * 0.3;
        p.y += p.vy - (currentScrollY - targetScrollY) * 0.02;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.y > height + 10) {
          p.y = 0;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 60FPS Hardware Accelerated Fluid Mesh Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block filter blur-[40px] sm:blur-[65px] transform scale-110"
      />

      {/* Subtle organic film grain texture to eliminate color banding */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: '16px 16px'
        }}
      />
    </div>
  );
};
