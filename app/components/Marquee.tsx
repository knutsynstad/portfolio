"use client";
import { useEffect, useRef } from "react";

interface MarqueeProps {
  children: React.ReactNode[];
  speed?: number;
  className?: string;
}

const Marquee = ({ children, speed = 60, className }: MarqueeProps) => {
  const stripRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const strip = stripRef.current as HTMLElement | null;
    const container = containerRef.current as HTMLElement | null;

    if (strip && container) {
      const width = strip.getBoundingClientRect().width;
      const duration = (width / speed) * 1000;
      const gap = 32;
      const animation = container.animate(
        [
          { transform: "translateX(0px)" },
          { transform: `translateX(-${width + gap}px)` },
        ],
        {
          duration,
          easing: "linear",
          iterations: Infinity,
        }
      );

      animation.play();
    }
  }, [children, speed]);

  return (
    <div className={["relative select-none", className].join(" ")}>
      <div className="relative w-screen left-[50%] translate-x-[-50%] overflow-clip">
        <div ref={containerRef} className="flex flex-nowrap gap-8 w-max">
          <div ref={stripRef} className="flex flex-nowrap gap-8 w-max">
            {children}
          </div>
          <div className="flex flex-nowrap gap-8 w-max">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
