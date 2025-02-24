"use client";
import { useEffect, useRef } from "react";

interface MarqueeProps {
  children: React.ReactNode[];
  speed?: number;
  gap?: number;
  className?: string;
}

const Marquee = ({
  children,
  speed = 30,
  gap = 0,
  className,
}: MarqueeProps) => {
  const stripRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const strip = stripRef.current as HTMLElement | null;
    const container = containerRef.current as HTMLElement | null;

    if (strip && container) {
      const width = strip.getBoundingClientRect().width;
      const duration = (width / speed) * 1000;
      const animation = container.animate(
        [
          { transform: `translateX(-${width + gap}px)` },
          { transform: "translateX(0px)" },
        ],
        {
          duration,
          easing: "linear",
          iterations: Infinity,
        }
      );

      animation.play();
    }
  }, [children, speed, gap]);

  return (
    <div className={["relative select-none", className].join(" ")}>
      <div className="relative w-screen left-[50%] translate-x-[-50%] overflow-clip">
        <div ref={containerRef} className="flex flex-nowrap w-max">
          <div ref={stripRef} className="flex flex-nowrap w-max">
            {children}
          </div>
          <div className="flex flex-nowrap w-max">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
