"use client";

import { useEffect, useRef } from "react";

export function HeroAuraCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx || !canvas.parentElement) {
      return;
    }

    let width = 0;
    let height = 0;
    let time = 0;
    let animationFrame = 0;

    const resize = () => {
      if (!canvas.parentElement) {
        return;
      }

      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const animate = () => {
      time += 0.0035;
      ctx.fillStyle = "#FAFAFA";
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "multiply";

      const numFolds = 18;
      for (let i = 0; i < numFolds; i += 1) {
        const normalizedX = i / numFolds;
        const xPos = normalizedX * width + Math.sin(time * 2.2 + i) * (width * 0.13);
        const foldWidth = (width / numFolds) * 4.8;
        const waveIntensity = (Math.sin(time * 2.4 + i * 0.55) + 1) * 0.5;

        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        const blueMid = 0.018 + waveIntensity * 0.03;
        const blueBase = 0.03 + waveIntensity * 0.05;
        const redBase = 0.018 + waveIntensity * 0.035;

        gradient.addColorStop(0, "rgba(250, 250, 250, 0)");
        gradient.addColorStop(0.35, `rgba(34, 86, 163, ${blueMid})`);
        gradient.addColorStop(0.72, `rgba(34, 86, 163, ${blueBase})`);
        gradient.addColorStop(1, `rgba(217, 31, 63, ${redBase})`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(xPos - foldWidth, 0);
        ctx.bezierCurveTo(
          xPos,
          height * 0.3,
          xPos - foldWidth,
          height * 0.7,
          xPos + foldWidth,
          height,
        );
        ctx.lineTo(xPos + foldWidth * 2, height);
        ctx.bezierCurveTo(
          xPos + foldWidth,
          height * 0.7,
          xPos + foldWidth * 2,
          height * 0.3,
          xPos + foldWidth,
          0,
        );
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      animationFrame = window.requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

    return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-38"
    />
  );
}
