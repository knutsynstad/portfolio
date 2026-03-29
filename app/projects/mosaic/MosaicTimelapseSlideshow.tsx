"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";

import Timelapse1 from "./assets/mosaic-timelapse-1.png";
import Timelapse2 from "./assets/mosaic-timelapse-2.png";
import Timelapse3 from "./assets/mosaic-timelapse-3.png";

const FRAMES = [
  { src: Timelapse1, alt: "Mosaic canvas timelapse frame 1" },
  { src: Timelapse2, alt: "Mosaic canvas timelapse frame 2" },
  { src: Timelapse3, alt: "Mosaic canvas timelapse frame 3" },
] as const;

const INTERVAL_MS = 1000;

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function MosaicTimelapseSlideshow() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    for (const { src } of FRAMES) {
      const img = new window.Image();
      img.src = src.src;
    }
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % FRAMES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const current = FRAMES[reduceMotion ? 0 : index];

  return (
    <figure
      className="w-full"
      aria-label="Mosaic canvas timelapse"
      {...(!reduceMotion ? { "aria-live": "polite" as const } : {})}
    >
      <Image
        src={current.src}
        alt={current.alt}
        width={current.src.width}
        height={current.src.height}
        unoptimized
        draggable={false}
        className="render-pixel-art h-auto w-full rounded-3xl"
        sizes="(max-width: 840px) 100vw, 840px"
        priority
      />
    </figure>
  );
}
