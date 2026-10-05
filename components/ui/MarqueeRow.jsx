"use client";

import React, { useEffect, useRef } from "react";

export default function MarqueeRow({
  children,
  direction = "left",
  speed = 50,
  pauseOnHover = true,
}) {
  const rowRef = useRef(null);

  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(null);

  const positionRef = useRef(0);
  const pausedRef = useRef(false);

  const isLeft = direction === "left";

  useEffect(() => {
    const row = rowRef.current;

    if (!row) return;

    const animate = (currentTime) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      // Agar hover par paused hai
      if (!pausedRef.current) {
        const movement = (speed * deltaTime) / 1000;

        if (isLeft) {
          positionRef.current -= movement;
        } else {
          positionRef.current += movement;
        }

        const halfWidth = row.scrollWidth / 2;

        // LEFT direction
        if (isLeft && Math.abs(positionRef.current) >= halfWidth) {
          positionRef.current = 0;
        }

        // RIGHT direction
        if (!isLeft && positionRef.current >= 0) {
          positionRef.current = -halfWidth;
        }

        row.style.transform = `translateX(${positionRef.current}px)`;
      }

      animationFrameRef.current =
        requestAnimationFrame(animate);
    };

    animationFrameRef.current =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isLeft, speed]);

  const handleMouseEnter = () => {
    if (!pauseOnHover) return;

    pausedRef.current = true;
  };

  const handleMouseLeave = () => {
    if (!pauseOnHover) return;

    pausedRef.current = false;

    // Time ko reset kar dete hain taake
    // mouse leave par sudden jump na aaye
    lastTimeRef.current = null;
  };

  return (
    <div
      className="relative w-full overflow-hidden py-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      {/* Gradient Fade Left */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          bottom-0
          z-10
          w-20
          bg-gradient-to-r
          from-[#1a1c23]
          to-transparent
          md:w-32
        "
      />

      {/* Gradient Fade Right */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          bottom-0
          z-10
          w-20
          bg-gradient-to-l
          from-[#1a1c23]
          to-transparent
          md:w-32
        "
      />

      {/* Moving Row */}
      <div
        ref={rowRef}
        className="flex w-max gap-6"
      >
        {children}
        {children}
      </div>

    </div>
  );
}