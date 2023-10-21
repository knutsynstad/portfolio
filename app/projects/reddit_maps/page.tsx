import Image from "@/components/Image";
import ProjectHeader from "@/components/ProjectHeader";

// Assets
import RedditMapsWhite from "./assets/reddit-maps-white.png";

import RedditMaps1 from "./assets/reddit-maps-1.png";
import RedditMaps2 from "./assets/reddit-maps-2.png";
import RedditMaps3 from "./assets/reddit-maps-3.png";
import RedditMaps4 from "./assets/reddit-maps-4.png";
import RedditMaps5 from "./assets/reddit-maps-5.png";
import RedditMaps6 from "./assets/reddit-maps-6.png";
import RedditMaps7 from "./assets/reddit-maps-7.png";

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

const metadata = [
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
    values: [{ name: "Design Lead" }, { name: "Developer" }],
  },
  {
    title: "Categories",
    values: [
      { name: "Snoosweek" },
      { name: "Solution Space" },
      { name: "Prototype" },
    ],
  },
  {
    title: "Year",
    values: [
      {
        name: "2022",
      },
    ],
  },
];

const Project = () => (
  <>
    <ProjectHeader
      title={title}
      description={description}
      metadata={metadata}
    />
    <main>
      <div className="flex flex-col gap-8">
        <Image src={RedditMaps2} alt={title} rounded />
        <Image src={RedditMaps3} alt={title} rounded />
        <Image src={RedditMaps5} alt={title} rounded />
        <Image src={RedditMaps7} alt={title} rounded />
      </div>
    </main>
  </>
);

export default Project;
