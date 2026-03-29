import Image from "next/image";
import Marquee from "@/components/Marquee";
import ProjectHeader from "@/components/ProjectHeader";
import { Metadata } from "next";

import Banner from "./assets/syllo-banner.png";
import PostSplash from "./assets/syllo-post-splash.png";
import PostPlayingStart from "./assets/syllo-post-playing-start.png";
import PostPlaying from "./assets/syllo-post-playing.png";
import PostPlayingIncorrect from "./assets/syllo-post-playing-incorrect.png";
import PostCelebration from "./assets/syllo-post-celebration.png";
import PostAfterWin from "./assets/syllo-post-after-win.png";

const sylloCarouselBg = "#FFF5D5";

const title = "Make every syllable count.";
const description = (
  <>
    <p>
      <a href="https://www.reddit.com/r/syllo/">Syllo</a> is a daily word puzzle
      on Reddit. Each day you get five crossword-style clues and a jumble of
      syllables, one word per clue, then race the clock to solve them. Puzzles
      start easy on Monday and increase in difficulty through the week.
    </p>
    <p>
      Reddit{" "}
      <a href="https://www.reddit.com/r/Devvit/comments/1n0vn97/reddit_has_acquired_syllacrostic/">
        acquired Syllacrostic
      </a>{" "}
      to rebuild it with community and a native in-feed experience built for
      mind. The new game is live on Reddit today. You can play it for free.
    </p>
    <p>I contributed the game design and built the interface.</p>
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
        name: "r/Syllo",
        url: "https://www.reddit.com/r/syllo/",
      },
    ],
  },
  {
    title: "Year",
    values: [{ name: "2025" }],
  },
];

const marqueePosts = [
  { src: PostSplash, alt: "Syllo post splash" },
  { src: PostPlayingStart, alt: "Syllo post playing start" },
  { src: PostPlaying, alt: "Syllo post playing" },
  { src: PostPlayingIncorrect, alt: "Syllo post incorrect guess" },
  { src: PostCelebration, alt: "Syllo post celebration" },
  { src: PostAfterWin, alt: "Syllo post after win" },
] as const;

export const metadata: Metadata = { title: `${title} - Knut Synstad` };

const Project = () => (
  <>
    <ProjectHeader title={title} description={description} details={details} />
    <main className="flex flex-col gap-16 md:gap-24">
      <Image
        src={Banner}
        alt="Syllo banner"
        className="w-full rounded-3xl"
        sizes="(max-width: 840px) 100vw, 840px"
        priority
      />

      <section
        className="relative left-1/2 w-screen -translate-x-1/2 py-16 md:py-24"
        style={{ backgroundColor: sylloCarouselBg }}
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
            background: `linear-gradient(to right, ${sylloCarouselBg}, transparent)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 sm:w-20 md:w-28"
          style={{
            background: `linear-gradient(to left, ${sylloCarouselBg}, transparent)`,
          }}
        />
      </section>
    </main>
  </>
);

export default Project;
