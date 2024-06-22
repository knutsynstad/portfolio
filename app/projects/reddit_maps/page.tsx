import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";
import { Metadata } from "next";

// Assets
import RedditMapsWhite from "./assets/reddit-maps-white.png";

import RedditMaps1 from "./assets/reddit-maps-1.png";
import RedditMaps2 from "./assets/reddit-maps-2.png";
import RedditMaps3 from "./assets/reddit-maps-3.png";
import RedditMaps4 from "./assets/reddit-maps-4.png";
import RedditMaps5 from "./assets/reddit-maps-5.png";
import RedditMaps6 from "./assets/reddit-maps-6.png";
import RedditMaps7 from "./assets/reddit-maps-7.png";

import Sketch1 from "./assets/sketch-1.png";
import Sketch2 from "./assets/sketch-2.png";
import Sketch3 from "./assets/sketch-3.png";
import Sketch4 from "./assets/sketch-4.png";
import Sketch5 from "./assets/sketch-5.png";
import Sketch6 from "./assets/sketch-6.png";
import Sketch7 from "./assets/sketch-7.png";
import Sketch8 from "./assets/sketch-8.png";
import Sketch9 from "./assets/sketch-9.png";
import Sketch10 from "./assets/sketch-10.png";
import Sketch11 from "./assets/sketch-11.png";
import Sketch12 from "./assets/sketch-12.png";
import Sketch13 from "./assets/sketch-13.png";
import Sketch14 from "./assets/sketch-14.png";
import Sketch15 from "./assets/sketch-15.png";

const title = "Reddit Maps.";
const description = (
  <>
    <p>
      Finding the right community on Reddit can be magical. It can be a place to
      find support, share a passion, or just have a laugh. But with thousands of
      active communities, finding the right ones for you can be difficult.
      During a weeklong hackathon (Snoosweek) in the spring of 2022, I partnered
      with colleges from the Machine Learning and Curation teams to explore a
      new way of interacting with Reddit&apos;s Space of Communities.
    </p>
    <p>
      Reddit Maps is an navigational tool for the Space of Communities.
      Communities are organized by content similarity, creating thematic
      clusters. Additional embeddings are available to create additional lenses
      and timeslices. From content and audience similarity to temporal trends,
      Reddit Maps enable a new way to explore communities on Reddit.
    </p>
    <p>
      The prototype was built using{" "}
      <a href="https://vitejs.dev/" target="_blank">
        Vite
      </a>
      ,{" "}
      <a href="https://www.sigmajs.org/" target="_blank">
        Sigma.js
      </a>
      , and{" "}
      <a href="https://graphology.github.io/" target="_blank">
        Graphology.js
      </a>
      .
    </p>
  </>
);
const details = [
  {
    title: "Company",
    values: [
      {
        name: "Reddit",
        url: "https://www.redditinc.com/",
      },
    ],
  },
  {
    title: "Role",
    values: [{ name: "Designer" }, { name: "Developer" }],
  },
  {
    title: "Categories",
    values: [
      { name: "Hackathon" },
      { name: "Solution Space" },
      { name: "Prototype" },
    ],
  },
];

/*
  {
    title: "Year",
    values: [
      {
        name: "2022",
      },
    ],
  },
*/

export const metadata: Metadata = { title: `${title} - Knut Synstad` };

const sketches = [
  Sketch1,
  Sketch2,
  Sketch3,
  Sketch4,
  Sketch5,
  Sketch6,
  Sketch7,
  Sketch8,
  Sketch9,
  Sketch10,
  Sketch11,
  Sketch12,
  Sketch13,
  Sketch14,
  Sketch15,
];

const Project = () => (
  <>
    <ProjectHeader title={title} description={description} details={details} />
    <main className="flex flex-col gap-32">
      {/*
      <div className="relative flex flex-col justify-center">
        <Image
          src={RedditMapsWhite}
          alt={title}
          className="relative left-[50%] translate-x-[-50%] w-screen max-w-none"
        />
      </div>
      */}

      <div className="flex flex-col gap-8">
        <Image src={RedditMaps2} alt={title} className="rounded-2xl" />
        <Image src={RedditMaps3} alt={title} className="rounded-2xl" />

        <Image src={RedditMaps5} alt={title} className="rounded-2xl" />
        <Image src={RedditMaps7} alt={title} className="rounded-2xl" />
      </div>

      <div className="flex flex-col gap-8">
        <h2>Some sketches from early ideation</h2>
        <div className="grid grid-cols-5 gap-4">
          {sketches.map((sketch, index) => (
            <Image
              key={`sketch-${index}`}
              src={sketch}
              alt="Rough conceptual sketches from the early ideation of Reddit Maps."
              className="rounded-2xl"
            />
          ))}
        </div>
      </div>
    </main>
  </>
);

export default Project;
