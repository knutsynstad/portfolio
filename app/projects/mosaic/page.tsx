import Image from "next/image";
import Marquee from "@/components/Marquee";
import ProjectHeader from "@/components/ProjectHeader";
import { Metadata } from "next";

import MosaicTimelapseSlideshow from "./MosaicTimelapseSlideshow";

import Banner from "./assets/mosaic-banner.png";
import Splash1 from "./assets/mosaic-splash-1.png";
import Splash2 from "./assets/mosaic-splash-2.png";
import Splash3 from "./assets/mosaic-splash-3.png";
import Splash4 from "./assets/mosaic-splash-4.png";
import Splash5 from "./assets/mosaic-splash-5.png";
import Expanded1 from "./assets/mosaic-expanded-1.png";
import Expanded2 from "./assets/mosaic-expanded-2.png";
import Expanded3 from "./assets/mosaic-expanded-3.png";
import Expanded4 from "./assets/mosaic-expanded-4.png";
import Expanded5 from "./assets/mosaic-expanded-5.png";

const mosaicCarouselBg = "#808080";

const title = "Mosaic.";
const description = (
  <>
    <p>
      <a href="https://www.reddit.com/r/MosaicGame/">Mosaic</a> is a shared
      canvas where redditors remix an image, one tiny tile at a time. Pan and
      zoom to explore what everyone else has done, or sit back and watch as the
      image continues to transform into something much weirder.
    </p>
    <p>
      It&apos;s a prototype for Community Games on Reddit, a space for
      MMO-style, async, collaborative play. A shared canvas is a natural fit for
      that mix.
    </p>
    <p>
      I designed and built the game, with the canvas rendered in WebGL 2 shaders
      so pan, zoom, and tile updates stay smooth.
    </p>
    <p>
      The game is self-propelling, with players able to upload and vote on
      future images in a visual content hopper.
    </p>
  </>
);
const details = [
  {
    title: "Company",
    values: [{ name: "Reddit", url: "https://www.reddit.com" }],
  },
  {
    title: "Category",
    values: [{ name: "Game" }],
  },
  {
    title: "Role",
    values: [{ name: "Design" }, { name: "Development" }],
  },
  {
    title: "Links",
    values: [
      {
        name: "r/MosaicGame",
        url: "https://www.reddit.com/r/MosaicGame/",
      },
    ],
  },
  {
    title: "Year",
    values: [{ name: "2026" }],
  },
];

const marqueePosts = [
  { src: Splash1, alt: "Mosaic post splash" },
  { src: Splash2, alt: "Mosaic post in feed" },
  { src: Splash3, alt: "Mosaic post playing" },
  { src: Splash4, alt: "Mosaic post map view" },
  { src: Splash5, alt: "Mosaic post full mosaic" },
] as const;

const marqueeExpandedPosts = [
  { src: Expanded1, alt: "Mosaic onboarding" },
  { src: Expanded2, alt: "Mosaic tile detail" },
  { src: Expanded3, alt: "Mosaic remix and pick" },
  { src: Expanded4, alt: "Mosaic tile editor" },
  { src: Expanded5, alt: "Mosaic shared canvas" },
] as const;

export const metadata: Metadata = { title: `${title} - Knut Synstad` };

const Project = () => (
  <>
    <ProjectHeader title={title} description={description} details={details} />
    <main className="flex flex-col gap-16 md:gap-24">
      <Image
        src={Banner}
        alt="Mosaic banner"
        className="w-full rounded-3xl"
        sizes="(max-width: 840px) 100vw, 840px"
        priority
      />

      <section
        className="relative left-1/2 w-screen -translate-x-1/2 py-16 md:py-24"
        style={{ backgroundColor: mosaicCarouselBg }}
      >
        <Marquee reverse speed={28} className="relative z-0 py-4 sm:py-5">
          {marqueePosts.map(({ src, alt }, index) => (
            <div key={`${alt}-${index}`} className="mr-6 shrink-0 sm:mr-8">
              <Image
                src={src}
                alt={alt}
                width={src.width}
                height={src.height}
                quality={100}
                draggable={false}
                className="h-auto w-[375px] rounded-3xl shadow-md"
                sizes="375px"
              />
            </div>
          ))}
        </Marquee>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 sm:w-20 md:w-28"
          style={{
            background: `linear-gradient(to right, ${mosaicCarouselBg}, transparent)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 sm:w-20 md:w-28"
          style={{
            background: `linear-gradient(to left, ${mosaicCarouselBg}, transparent)`,
          }}
        />
      </section>

      <MosaicTimelapseSlideshow />

      <section
        className="relative left-1/2 w-screen -translate-x-1/2 py-16 md:py-24"
        style={{ backgroundColor: mosaicCarouselBg }}
      >
        <Marquee speed={28} className="relative z-0 py-4 sm:py-5">
          {marqueeExpandedPosts.map(({ src, alt }, index) => (
            <div key={`${alt}-${index}`} className="mr-6 shrink-0 sm:mr-8">
              <Image
                src={src}
                alt={alt}
                width={src.width}
                height={src.height}
                quality={100}
                draggable={false}
                className="h-auto w-[375px] rounded-[48px] shadow-md"
                sizes="375px"
              />
            </div>
          ))}
        </Marquee>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 sm:w-20 md:w-28"
          style={{
            background: `linear-gradient(to right, ${mosaicCarouselBg}, transparent)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 sm:w-20 md:w-28"
          style={{
            background: `linear-gradient(to left, ${mosaicCarouselBg}, transparent)`,
          }}
        />
      </section>
    </main>
  </>
);

export default Project;
