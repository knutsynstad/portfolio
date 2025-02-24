import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";
import StickyNote from "@/components/StickyNote";
import { Metadata } from "next";
import Marquee from "@/components/Marquee";
import Link from "next/link";

import ScreenDefault from "./assets/default.png";
import ScreenSelection from "./assets/selection.png";
import screenWagered from "./assets/wagered.png";

import Faucet1 from "./assets/faucet-1.png";
import Faucet2 from "./assets/faucet-2.png";
import Faucet3 from "./assets/faucet-3.png";

import ScreenList from "./assets/list.png";
import ScreenLeaderboardWide from "./assets/leaderboard-wide.png";
import ScreenLeaderboardNarrow from "./assets/leaderboard-narrow.png";

const title = "Fortune favors the bold.";
const description = (
  <>
    <p>
      When I joined Reddit&apos;s User Economy team in 2020, we aimed to expand
      the Reddit Gold economy by creating new ways for users to earn and spend
      Gold while enhancing engagement.
    </p>

    <p>
      One of my first projects was Predictions, a social game where users
      wagered Reddit Gold on real-world events. Designed for simplicity and fun,
      it launched in r/Predictor with a &quot;coins-in, coins-out&quot; model
      rewarding accuracy.
    </p>

    <p>
      We later introduced Tournament Mode, enabling moderators to host
      prediction tournaments in their communities. This mode expanded beyond
      sports and gaming, featuring a playful &quot;Unicorn Token.&quot;
    </p>

    <p>
      Predictions grew to 1M+ daily users but was sunset in 2022 due to shifting
      priorities. With Reddit&apos;s new developer platform, Devvit, I&apos;ve
      made a refined version of Predictions using the{" "}
      <Link href="/projects/blocks">Blocks</Link> framework.
    </p>
  </>
);
const details = [
  {
    title: "Company",
    values: [
      {
        name: "Reddit",
        url: "https://www.reddit.com",
      },
    ],
  },
  {
    title: "Team",
    values: [
      {
        name: "Developer Platform",
      },
      {
        name: "Devvit Studio",
      },
    ],
  },
  {
    title: "Role",
    values: [
      {
        name: "Designer",
      },
      {
        name: "Developer",
      },
    ],
  },
  {
    title: "Categories",
    values: [{ name: "Blocks" }, { name: "Game Design" }],
  },
  {
    title: "Year",
    values: [
      {
        name: "2025",
      },
    ],
  },
  {
    title: "Links",
    values: [
      {
        name: "r/SportsPredictions",
        url: "https://www.reddit.com/r/SportsPredictions/",
      },
    ],
  },
];
const color = "#DAE0E3";

export const metadata: Metadata = { title: `${title} - Knut Synstad` };

const Project = () => (
  <>
    <ProjectHeader title={title} description={description} details={details} />
    <main className="flex flex-col gap-16">
      <div className="w-full flex flex-col gap-8">
        <h2 className="mt-16">Place your wager</h2>
        <div className="grid grid-cols-3 gap-8">
          {[ScreenDefault, ScreenSelection, screenWagered].map(
            (image, index) => (
              <Image
                src={image}
                alt={title}
                key={`${index}-${image}`}
                className="rounded-2xl shadow-2xl"
              />
            )
          )}
        </div>
      </div>

      <div className="w-full flex flex-col gap-8">
        <h2 className="mt-16">Token faucet</h2>
        <div className="grid grid-cols-3 gap-8">
          {[Faucet1, Faucet2, Faucet3].map((image, index) => (
            <Image
              src={image}
              alt={title}
              key={`${index}-${image}`}
              className="rounded-2xl shadow-2xl"
            />
          ))}
        </div>
      </div>

      <h2 className="mt-16">Find more predictions</h2>
      <Image
        src={ScreenList}
        alt={title}
        key={ScreenList.src}
        className="w-full rounded-2xl shadow-2xl"
      />

      <h2 className="mt-16">Leaderboard</h2>
      <Image
        src={ScreenLeaderboardWide}
        alt={title}
        key={ScreenLeaderboardWide.src}
        className="w-full rounded-2xl shadow-2xl"
      />
    </main>
  </>
);

export default Project;
