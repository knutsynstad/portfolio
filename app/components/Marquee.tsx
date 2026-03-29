"use client";
import { useEffect, useRef } from "react";

interface MarqueeProps {
  children: React.ReactNode[];
  speed?: number;
  gap?: number;
  className?: string;
  /** When true, scrolls right-to-left (default is left-to-right). */
  reverse?: boolean;
}

const Marquee = ({
  children,
  speed = 30,
  gap = 0,
  className,
  reverse = false,
}: MarqueeProps) => {
  const stripRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const strip = stripRef.current as HTMLElement | null;
    const container = containerRef.current as HTMLElement | null;

    if (strip && container) {
      const width = strip.getBoundingClientRect().width;
      const duration = (width / speed) * 1000;
      const offset = width + gap;
      const animation = container.animate(
        reverse
          ? [
              { transform: "translateX(0px)" },
              { transform: `translateX(-${offset}px)` },
            ]
          : [
              { transform: `translateX(-${offset}px)` },
              { transform: "translateX(0px)" },
            ],
        {
          duration,
          easing: "linear",
          iterations: Infinity,
        }
      );

      animation.play();

      return () => animation.cancel();
    }
  }, [children, speed, gap, reverse]);

  return (
    <div className={["relative select-none", className].join(" ")}>
      <div className="relative left-[50%] w-screen translate-x-[-50%] overflow-clip py-8">
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
