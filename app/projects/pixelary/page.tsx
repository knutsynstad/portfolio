import Image from "next/image";
import Marquee from "@/components/Marquee";
import ProjectHeader from "@/components/ProjectHeader";
import { Metadata } from "next";

import Banner from "./assets/pixelary-banner.png";
import Guess1 from "./assets/pixelary-guess-1.png";
import Guess2 from "./assets/pixelary-guess-2.png";
import Guess3 from "./assets/pixelary-guess-3.png";
import Guess4 from "./assets/pixelary-guess-4.png";
import Guess5 from "./assets/pixelary-guess-5.png";

const pixelaryCarouselBg = "#56ccf2";

const title = "Pixelary.";
const description = (
  <>
    <p>
      Pixelary is a drawing and guessing game on Reddit: you pick a word, paint
      on a 16×16 pixel canvas, and the community guesses what it is. It&apos;s
      asynchronous, with no need to be online at the same time.
    </p>
    <p>
      I created the first version in November 2023 for a hackathon at Reddit; it
      grew to have a large following on{" "}
      <a href="https://www.reddit.com/r/Pixelary/">r/Pixelary</a>. The codebase
      is <a href="https://github.com/reddit/devvit-pixelary">open source</a>.
    </p>
    <p>
      The act of playing propels the game forward: drawings become posts and
      guesses become comments, so the game keeps surfacing in the feed after
      individual posts fade. I emphasized a first screen that changes with every
      post, and a narrow set of clear actions.
    </p>
    <p>
      You can read more about the design and platform{" "}
      <a href="https://developers.reddit.com/docs/blog/pixelary">
        in the Reddit for Developers blog
      </a>
      .
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
      { name: "r/Pixelary", url: "https://www.reddit.com/r/Pixelary/" },
      {
        name: "Source code",
        url: "https://github.com/reddit/devvit-pixelary",
      },
    ],
  },
  {
    title: "Year",
    values: [{ name: "2023–present" }],
  },
];

const marqueePosts = [
  { src: Guess1, alt: "Pixelary post — guess a drawing" },
  { src: Guess2, alt: "Pixelary post — drawing round" },
  { src: Guess3, alt: "Pixelary post — guess results" },
  { src: Guess4, alt: "Pixelary post — answer and stats" },
  { src: Guess5, alt: "Pixelary post — reveal" },
] as const;

export const metadata: Metadata = { title: `${title} - Knut Synstad` };

const Project = () => (
  <>
    <ProjectHeader title={title} description={description} details={details} />
    <main className="flex flex-col gap-16 md:gap-24">
      <Image
        src={Banner}
        alt="Pixelary banner"
        className="w-full rounded-3xl"
        sizes="(max-width: 840px) 100vw, 840px"
        priority
      />

      <section
        className="relative left-1/2 w-screen -translate-x-1/2 py-16 md:py-24"
        style={{ backgroundColor: pixelaryCarouselBg }}
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
                className="h-auto w-[375px] rounded-[24px] shadow-lg"
                sizes="375px"
              />
            </div>
          ))}
        </Marquee>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 sm:w-20 md:w-28"
          style={{
            background: `linear-gradient(to right, ${pixelaryCarouselBg}, transparent)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 sm:w-20 md:w-28"
          style={{
            background: `linear-gradient(to left, ${pixelaryCarouselBg}, transparent)`,
          }}
        />
      </section>
    </main>
  </>
);

export default Project;
