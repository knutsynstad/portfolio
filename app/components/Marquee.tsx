"use client";
import { useCallback, useEffect, useRef } from "react";

interface MarqueeProps {
  children: React.ReactNode[];
  speed?: number;
  gap?: number;
  className?: string;
  /** When true, scrolls right-to-left (default is left-to-right). */
  reverse?: boolean;
}

function wrapOffset(offset: number, period: number): number {
  if (period <= 0) return 0;
  let o = offset % period;
  if (o < 0) o += period;
  return o;
}

const Marquee = ({
  children,
  speed = 30,
  gap = 0,
  className,
  reverse = false,
}: MarqueeProps) => {
  const stripRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const offsetRef = useRef(0);
  const lastFrameTimeRef = useRef<number | null>(null);
  const stripWidthRef = useRef(0);
  const rafRef = useRef(0);
  const draggingRef = useRef(false);
  const lastPointerXRef = useRef(0);
  /** Pixels per second; positive increases offset (same direction as reverse auto-scroll). */
  const velocityRef = useRef(0);
  const lastMoveTimeRef = useRef(0);
  const reduceMotionRef = useRef(false);
  const momentumActiveRef = useRef(false);

  const updateStripWidth = useCallback(() => {
    const strip = stripRef.current;
    if (!strip) return;
    stripWidthRef.current = strip.getBoundingClientRect().width;
  }, []);

  useEffect(() => {
    updateStripWidth();
    const strip = stripRef.current;
    if (!strip) return;
    const ro = new ResizeObserver(() => updateStripWidth());
    ro.observe(strip);
    return () => ro.disconnect();
  }, [children, updateStripWidth]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      reduceMotionRef.current = mq.matches;
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tick = (now: number) => {
      const last = lastFrameTimeRef.current;
      lastFrameTimeRef.current = now;
      const dt = last != null ? Math.min((now - last) / 1000, 0.1) : 0;

      const period = stripWidthRef.current + gap;
      if (period > 0) {
        const effectiveSpeed = reduceMotionRef.current ? 0 : speed;

        if (draggingRef.current) {
          /* offset updated in pointer handlers */
        } else if (momentumActiveRef.current) {
          offsetRef.current += velocityRef.current * dt;
          velocityRef.current *= Math.pow(0.001, dt / 0.12);
          if (Math.abs(velocityRef.current) < 8) {
            velocityRef.current = 0;
            momentumActiveRef.current = false;
          }
        } else {
          if (reverse) {
            offsetRef.current += effectiveSpeed * dt;
          } else {
            offsetRef.current -= effectiveSpeed * dt;
          }
        }

        offsetRef.current = wrapOffset(offsetRef.current, period);
        container.style.transform = `translate3d(-${offsetRef.current}px,0,0)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastFrameTimeRef.current = null;
    };
  }, [children, speed, gap, reverse]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    const el = containerRef.current;
    if (!el) return;
    draggingRef.current = true;
    momentumActiveRef.current = false;
    velocityRef.current = 0;
    lastPointerXRef.current = e.clientX;
    lastMoveTimeRef.current = performance.now();
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const period = stripWidthRef.current + gap;
    if (period <= 0) return;

    const dx = e.clientX - lastPointerXRef.current;
    lastPointerXRef.current = e.clientX;
    const now = performance.now();
    const prevT = lastMoveTimeRef.current;
    lastMoveTimeRef.current = now;
    const dt = Math.max(now - prevT, 1) / 1000;

    offsetRef.current = wrapOffset(offsetRef.current - dx, period);

    const vel = -dx / dt;
    velocityRef.current = vel * 0.6 + velocityRef.current * 0.4;

    const container = containerRef.current;
    if (container) {
      container.style.transform = `translate3d(-${offsetRef.current}px,0,0)`;
    }
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    const el = containerRef.current;
    try {
      el?.releasePointerCapture(e.pointerId);
    } catch {
      /* ignore if not captured */
    }
    if (Math.abs(velocityRef.current) > 40) {
      momentumActiveRef.current = true;
    } else {
      velocityRef.current = 0;
    }
  };

  return (
    <div
      className={["relative select-none", className].filter(Boolean).join(" ")}
    >
      <div className="relative left-[50%] w-screen translate-x-[-50%] overflow-clip py-8">
        <div
          ref={containerRef}
          role="presentation"
          className="flex w-max cursor-grab touch-pan-y flex-nowrap active:cursor-grabbing"
          style={{ willChange: "transform" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onLostPointerCapture={() => {
            if (!draggingRef.current) return;
            draggingRef.current = false;
            if (Math.abs(velocityRef.current) > 40) {
              momentumActiveRef.current = true;
            } else {
              velocityRef.current = 0;
            }
          }}
        >
          <div ref={stripRef} className="flex w-max flex-nowrap">
            {children}
          </div>
          <div className="flex w-max flex-nowrap">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
