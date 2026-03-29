import type { CSSProperties } from "react";

type PlayPixelaryButtonProps = {
  carouselBg: string;
  shadowColor: string;
};

export default function PlayPixelaryButton({
  carouselBg,
  shadowColor,
}: PlayPixelaryButtonProps) {
  const carouselVars = {
    "--pixelary-carousel-bg": carouselBg,
  } as CSSProperties;

  const layerTransition = "duration-200 ease-out motion-reduce:transition-none";

  return (
    <div
      className="flex justify-center px-8 pt-10 pb-2 sm:px-16 sm:pt-12 md:px-32 md:pt-16"
      style={carouselVars}
    >
      <a
        href="https://www.reddit.com/r/Pixelary/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Play Pixelary (opens in a new tab)"
        title="Play Pixelary on Reddit (opens in a new tab)"
        className="group inline-block pb-2 pr-2 no-underline focus-visible:rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-(--pixelary-carousel-bg)"
      >
        <span className="relative inline-block">
          <span
            aria-hidden
            className={`pointer-events-none absolute inset-0 z-0 translate-x-2 translate-y-2 transition-opacity ${layerTransition} group-active:opacity-0`}
            style={{ backgroundColor: shadowColor }}
          />
          <span
            className={`relative z-10 flex transform-gpu items-center justify-center bg-black px-10 py-6 transition-transform ${layerTransition} group-hover:translate-x-1 group-hover:translate-y-1 group-active:translate-x-2 group-active:translate-y-2`}
          >
            <span draggable={false} className="inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 168 14"
                fill="none"
                shapeRendering="crispEdges"
                aria-hidden
                className="render-pixel-art h-[28px] w-auto select-none"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M42 8H46V2H50V10H48V12H46V14H38V12H44V10H40V8H38V2H42V8Z M160 8H164V2H168V10H166V12H164V14H156V12H162V10H158V8H156V2H160V8Z M10 2H12V6H10V8H4V12H0V0H10V2ZM4 6H8V2H4V6Z M20 10H22V12H14V10H16V2H14V0H20V10Z M34 4H36V12H26V10H24V8H26V6H32V4H26V2H34V4ZM28 10H32V8H28V10Z M76 2H78V6H76V8H70V12H66V0H76V2ZM70 6H74V2H70V6Z M86 10H88V12H80V10H82V6H80V4H86V10Z M94 4H98V2H102V4H100V6H98V8H100V10H102V12H98V10H94V12H90V10H92V8H94V6H92V4H90V2H94V4Z M114 4H116V8H108V10H114V12H106V10H104V4H106V2H114V4ZM108 6H112V4H108V6Z M124 10H126V12H118V10H120V2H118V0H124V10Z M138 4H140V12H130V10H128V8H130V6H136V4H130V2H138V4ZM132 10H136V8H132V10Z M152 4H154V6H150V4H146V12H142V2H152V4Z M86 2H82V0H86V2Z"
                />
              </svg>
            </span>
          </span>
        </span>
      </a>
    </div>
  );
}
