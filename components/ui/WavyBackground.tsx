import React, { useEffect, useRef } from "react";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = (n: number) => {
    return Math.sin(n) * 0.5 + 0.5;
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let h = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);
    ctx.filter = `blur(${blur}px)`;
    let nt = 0;
    let animationId: number;

    const handleResize = () => {
      w = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      h = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.fillStyle = backgroundFill || "#020203";
      ctx.globalAlpha = waveOpacity || 0.5;
      ctx.fillRect(0, 0, w, h);
      
      // Default color fallbacks
      const waveColors = colors ?? [
        "#3B82F6",
        "#10B981",
        "#818cf8",
        "#c084fc",
        "#e879f9",
      ];

      drawWave(ctx, w, h, nt, waveColors, waveWidth || 50);
      
      nt += getSpeed();
      animationId = requestAnimationFrame(render);
    };

    const drawWave = (
      ctx: CanvasRenderingContext2D, 
      w: number, 
      h: number, 
      nt: number, 
      colors: string[], 
      width: number
    ) => {
      const n = 5;
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = colors[i % colors.length];
        
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800 + 0.3 * i + nt) * 100 + 100;
          ctx.lineTo(x, y + h * 0.5); 
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [blur, colors, waveWidth, backgroundFill, waveOpacity, speed]);

  return (
    <div
      className={`relative flex flex-col items-center justify-center ${containerClassName}`}
    >
      <canvas
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        ref={canvasRef}
        id="canvas"
      ></canvas>
      <div className={`relative z-10 ${className}`} {...props}>
        {children}
      </div>
    </div>
  );
};