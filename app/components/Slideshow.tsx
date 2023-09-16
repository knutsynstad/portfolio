"use client";
import { useState } from "react";
import Icon from "@/components/Icon";

interface SlideshowProps {
  children: React.ReactNode[];
  shadow?: boolean;
}

const Slideshow = ({ children, shadow }: SlideshowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = children.length;

  function nextSlide() {
    setCurrentSlide((current) => (current + 1) % slideCount);
  }

  function prevSlide() {
    setCurrentSlide((current) => (current - 1 + slideCount) % slideCount);
  }

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
          {children}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <p className="col-start-1 col-end-7">
          In this example, were creating a new object slideProps that contains
          only the slides attribute from the components props.
        </p>
        <div className="mt-[-8px] select-none h-min items-center flex gap-2 justify-end col-start-7 col-end-13">
          <button
            className="p-2 border-none rounded-full cursor-pointer bg-transparent hover:bg-gray-200"
            onClick={prevSlide}
          >
            <Icon type="arrow-back" />
          </button>
          <span className="tabular-nums">{`${
            currentSlide + 1
          } / ${slideCount}`}</span>
          <button
            className="p-2 border-none rounded-full cursor-pointer bg-transparent hover:bg-gray-200"
            onClick={nextSlide}
          >
            <Icon type="arrow-forward" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
