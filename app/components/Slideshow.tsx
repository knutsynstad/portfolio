"use client";
import { useState } from "react";
import Icon from "@/components/Icon";
import Image, { StaticImageData } from "next/image";

export type Slide = {
  label?: string;
  image: string | StaticImageData;
};

export interface SlideshowProps {
  slides: Slide[];
  shadow?: boolean;
}

export const Slideshow = ({ slides, shadow }: SlideshowProps) => {
  const [currentSlide, setSlide] = useState(0);
  const caption = slides[currentSlide].label || "";
  const slideCount = slides.length;

  function next() {
    setSlide((current) => (current + 1) % slideCount);
  }

  function previous() {
    setSlide((current) => (current - 1 + slideCount) % slideCount);
  }

  const slideContent = slides.map((slide, index) => {
    return (
      <div
        className="relative w-full flex-shrink-0 transition-all ease-out duration-300"
        key={index}
      >
        <Image src={slide.image} alt={slide.label || ""} />
      </div>
    );
  });

  return (
    <div className="w-full relative mb-8">
      <div
        className={[
          "rounded-2xl",
          "overflow-x-hidden",
          "w-full",
          "mb-4",
          shadow ? "shadow-lg" : "",
        ].join(" ")}
      >
        <div
          className="flex flex-nowrap gap-0 transition-transform ease-out duration-200"
          style={{ transform: `translateX(${currentSlide * -100}%)` }}
        >
          {slideContent}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <p className="col-start-1 col-end-7">{caption}</p>
        <div className="mt-[-8px] select-none h-min items-center flex gap-2 justify-end col-start-7 col-end-13">
          <button
            className="p-2 border-none rounded-full cursor-pointer bg-transparent hover:bg-gray-200"
            onClick={previous}
          >
            <Icon type="arrow-back" />
          </button>
          <span className="tabular-nums">{`${
            currentSlide + 1
          } / ${slideCount}`}</span>
          <button
            className="p-2 border-none rounded-full cursor-pointer bg-transparent hover:bg-gray-200"
            onClick={next}
          >
            <Icon type="arrow-forward" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
