import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";
import { Metadata } from "next";

const title = "Extending Reddit with Blocks.";

const description = (
  <>
    <p>
      Reddit is well known for its April Fools events like r/Place and r/Second.
      These events have shown the power of community collaboration and
      creativity. As individuals we can do a little, but as a community we can
      do a lot.
    </p>
    <p>
      Events like r/Place are a great way to bring people together, but they are
      also a lot of work to create. We want to make it easier for developers to
      create these types of events. We want to make it easy to create a game
      where everyone can participate and contribute to the outcome.
    </p>
    <p>
      What would it look like to build a platform that enabled the community to
      build these types of events on their own? What if we could make it easy to
      create a game where everyone can participate and contribute to the
      outcome?
    </p>
    <p>
      Devvit is a write it once, run it everywhere platform. It&apos;s UI
      framework also needs to be platform agnostic. What does it look like? How
      does it work? How do we make it easy for developers to create these types
      of events?
    </p>
    <p>
      Finding common ground between mobile and web development. Balancing
      creative freedom with constraints like consistency and accessibility.
      Sensible defaults. Simple. Powerful.
    </p>
    <p>
      Exposing part of the Reddit Product Language. An abstrction layer that
      enables us to be more opinionated about the design of the platform. A way
      to ensure that the platform is consistent and accessible.
    </p>
  </>
);
const details = [
  {
    title: "Company",
    values: [{ name: "Reddit", url: "https://reddit.com" }],
  },
  {
    title: "Team",
    values: [{ name: "Developer Platform" }],
  },
  {
    title: "Category",
    values: [{ name: "UI Framework" }, { name: "Custom Posts" }],
  },
  {
    title: "Links",
    values: [
      {
        name: "Reddit for Developers",
        url: "https://developers.reddit.com/",
      },
      {
        name: "Documentation",
        url: "https://developers.reddit.com/docs/blocks/overview",
      },
    ],
  },
];

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
      </div>
    </main>
  </>
);

export default Project;
