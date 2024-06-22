import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";
import FluidImageRow from "@/components/FluidImageRow";
import { Metadata } from "next";

import ScreenA from "./assets/play-screen.png";
import PlayConsole from "./assets/play-console.png";
import SocialPreview from "./assets/play-social-preview.svg";
import LetsPlay from "./assets/lets-play.svg";
import PlayLink from "./assets/play-link.svg";

import PreviewWideLight from "./assets/preview-wide-light.png";
import PreviewWideDark from "./assets/preview-wide-dark.png";
import PreviewNarrowLight from "./assets/preview-narrow-light.png";
import PreviewNarrowDark from "./assets/preview-narrow-dark.png";

const title = "Let's Play.";
const description = (
  <>
    <p>
      <a href="https://developers.reddit.com/play">Devvit Play</a> is a
      lightweight authoring environment for rapid experimentation with
      Reddit&apos;s custom post feature. It addresses two critical challenges
      faced by developers: simplifying onboarding and creating an effective
      interchange format for sharing ideas.
    </p>
    <p>
      Whether you&apos;re a novice exploring new possibilities or an experienced
      developer fine-tuning intricate designs,{" "}
      <a href="https://developers.reddit.com/play">Devvit Play</a> offers an
      interactive code editor alongside a real-time preview, all without
      requiring accounts, setups, or additional software installations.
    </p>
    <p>
      Developers can easily share their creations via unique URLs, fostering a
      community where meaningful snippets of code can be aggregated, exchanged,
      and built upon.
    </p>
  </>
);
const details = [
  {
    title: "Company",
    values: [{ name: "Reddit", url: "https://reddit.com" }],
  },
  {
    title: "Category",
    values: [{ name: "Tooling" }, { name: "Open Source" }],
  },
  {
    title: "Collaborator",
    values: [
      {
        name: "Stephen Niedzielski",
        url: "https://niedzielski.com/",
      },
    ],
  },
  {
    title: "Links",
    values: [
      {
        name: "Devvit Play",
        url: "https://developers.reddit.com/play",
      },
      {
        name: "Source Code",
        url: "https://github.com/reddit/play",
      },
      {
        name: "Documentation",
        url: "https://developers.reddit.com/docs/playground",
      },
    ],
  },
];

/*
  {
    title: "Role",
    values: [{ name: "Owner" }, { name: "Design Lead" }, { name: "Developer" }],
  },
  {
    title: "Year",
    values: [{ name: "2023" }],
  },
*/

export const metadata: Metadata = { title: `${title} - Knut Synstad` };

const Project = () => (
  <>
    <ProjectHeader title={title} description={description} details={details} />
    <main>
      <div className="flex flex-col gap-8">
        <video autoPlay loop muted className="w-full rounded-2xl">
          <source src="/videos/play-logo.webm" type="video/webm" />
          <source src="/videos/play-logo.mp4" type="video/mp4" />
          <p>Your browser doesn&apos;t support HTML video.</p>
        </video>
        <Image
          src={ScreenA}
          alt={title}
          className="rounded-2xl border border-gray-300"
        />

        <div
          className="flex flex-col gap-8 pt-32 pb-32 mb-16 mt-16 relative overflow-visible"
          style={{ backgroundColor: "#FFD635" }}
        >
          <h2>Preview any device and theme</h2>
          <div className="flex flex-col gap-4 w-full">
            <FluidImageRow>
              <Image
                src={PreviewNarrowLight}
                alt={title}
                className="rounded-2xl w-full shadow"
              />
              <Image
                src={PreviewWideLight}
                alt={title}
                className="rounded-2xl w-full shadow"
              />
            </FluidImageRow>
            <FluidImageRow>
              <Image
                src={PreviewNarrowDark}
                alt={title}
                className="rounded-2xl w-full shadow"
              />
              <Image
                src={PreviewWideDark}
                alt={title}
                className="rounded-2xl w-full shadow"
              />
            </FluidImageRow>
          </div>

          <div
            style={{ backgroundColor: "#FFD635" }}
            className={`absolute h-full top-0 left-0 w-[9000px] translate-x-[-9000px]`}
          />
          <div
            style={{ backgroundColor: "#FFD635" }}
            className={`absolute h-full top-0 right-0 w-[9000px] translate-x-[9000px]`}
          />
        </div>

        <h2>Troubleshooting made easy</h2>
        <Image
          src={PlayConsole}
          alt={title}
          className="rounded-2xl border border-gray-300"
        />
      </div>
    </main>
  </>
);

export default Project;

/*

        <div
          className="flex flex-col gap-8 pt-32 pb-32 mb-32 relative overflow-visible"
          style={{ backgroundColor: "#FFD635" }}
        >
          <Image
            src={ScreenA}
            alt="Greet new user timeline"
            className="w-full shadow-xl shadow-[rgba(0,0,0,0.2)] rounded-2xl z-10"
          />

          <div
            style={{ backgroundColor: "#FFD635" }}
            className={`absolute h-full top-0 left-0 w-[9000px] translate-x-[-9000px]`}
          />
          <div
            style={{ backgroundColor: "#FFD635" }}
            className={`absolute h-full top-0 right-0 w-[9000px] translate-x-[9000px]`}
          />
        </div>

*/
