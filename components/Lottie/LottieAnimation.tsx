"use client";
import React, { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface LottieAnimationProps {
  animationPath: string;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationPath,
  loop = true,
  autoplay = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<AnimationItem | null>(null);
  useEffect(() => {
    const fetchAnimation = async () => {
      const response = await fetch(animationPath);
      const animationData = await response.json();

      // Destroy the previous animation if it exists
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }

      // Load new animation
      animationInstance.current = lottie.loadAnimation({
        container: containerRef.current!,
        animationData,
        renderer: "svg",
        loop,
        autoplay,
      });
    };

    fetchAnimation().catch(console.error);

    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }
    };
  }, [animationPath, loop, autoplay]);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
      className="mix-blend-multiply"
    />
  );
};

export default LottieAnimation;
