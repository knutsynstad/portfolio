import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";
import StickyNote from "@/components/StickyNote";
import { Metadata } from "next";
import Marquee from "@/components/Marquee";
import Link from "next/link";

// Screens
import Guess from "./assets/guess.png";
import GuessFeedbackWrong from "./assets/guess-feedback-wrong.png";
import GuessGiveUp from "./assets/guess-give-up.png";
import PinnedPost from "./assets/pinned-post.png";
import ProgressionCurrentLevel from "./assets/progression-current-level.png";
import ProgressionHigherLevel from "./assets/progression-higher-level.png";
import ProgressionLowerLevel from "./assets/progression-lower-level.png";
import Solved from "./assets/solved.png";
import SolvedPointsEarned from "./assets/solved-points-earned.png";
import SolvedEnlarged from "./assets/solved-enlarged.png";
import Leaderboard from "./assets/leaderboard.png";
import LeaderboardRange from "./assets/leaderboard-range.png";
import LeaderboardNotInView from "./assets/leaderboard-not-in-view.png";
import WordSelection from "./assets/word-selection.png";
import DrawingStart from "./assets/drawing-start.png";
import DrawingColorSelect from "./assets/drawing-color-select.png";
import DrawingNearEnd from "./assets/drawing-near-end.png";
import Review from "./assets/review.png";
import HowToPlay from "./assets/how-to-play.png";
import MyDrawings from "./assets/my-drawings.png";

// Drawings
import DrawingBalloon from "./assets/drawings/balloon.svg";
import DrawingBanana from "./assets/drawings/banana.svg";
import DrawingBaseball from "./assets/drawings/baseball.svg";
import DrawingBlank from "./assets/drawings/blank.svg";
import DrawingBow from "./assets/drawings/bow.svg";
import DrawingBroom from "./assets/drawings/broom.svg";
import DrawingBullseye from "./assets/drawings/bullseye.svg";
import DrawingButterly from "./assets/drawings/butterfly.svg";
import DrawingButterly2 from "./assets/drawings/butterfly-2.svg";
import DrawingChair from "./assets/drawings/chair.svg";
import DrawingCowboy from "./assets/drawings/cowboy.svg";
import DrawingCrab from "./assets/drawings/crab.svg";
import DrawingCrown from "./assets/drawings/crown.svg";
import DrawingDragon from "./assets/drawings/dragon.svg";
import DrawingDragon2 from "./assets/drawings/dragon-2.svg";
import DrawingDraw from "./assets/drawings/draw.svg";
import DrawingEyebrow from "./assets/drawings/eyebrow.svg";
import DrawingFlamingo from "./assets/drawings/flamingo.svg";
import DrawingFrog from "./assets/drawings/frog.svg";
import DrawingGrass from "./assets/drawings/grass.svg";
import DrawingHeadphones from "./assets/drawings/headphones.svg";
import DrawingIsland from "./assets/drawings/island.svg";
import DrawingJazz from "./assets/drawings/jazz.svg";
import DrawingJellyfish from "./assets/drawings/jellyfish.svg";
import DrawingLobster from "./assets/drawings/lobster.svg";
import DrawingLobster2 from "./assets/drawings/lobster-2.svg";
import DrawingMermaid from "./assets/drawings/mermaid.svg";
import DrawingOrange from "./assets/drawings/orange.svg";
import DrawingPet from "./assets/drawings/pet.svg";
import DrawingPhone from "./assets/drawings/phone.svg";
import DrawingPig from "./assets/drawings/pig.svg";
import DrawingPig2 from "./assets/drawings/pig-2.svg";
import DrawingPineapple from "./assets/drawings/pineapple.svg";
import DrawingPlatypus from "./assets/drawings/platypus.svg";
import DrawingPlatypus2 from "./assets/drawings/platypus-2.svg";
import DrawingPoison from "./assets/drawings/poison.svg";
import DrawingScooter from "./assets/drawings/scooter.svg";
import DrawingStar from "./assets/drawings/star.svg";
import DrawingSuperhero from "./assets/drawings/superhero.svg";
import DrawingSuperhero2 from "./assets/drawings/superhero-2.svg";
import DrawingTreehouse from "./assets/drawings/treehouse.svg";
import DrawingTulip from "./assets/drawings/tulip.svg";
import DrawingVolcano from "./assets/drawings/volcano.svg";
import DrawingWatermelon from "./assets/drawings/watermelon.svg";
import DrawingWheel from "./assets/drawings/wheel.svg";
import DrawingWitch from "./assets/drawings/witch.svg";
import DrawingWizard from "./assets/drawings/wizard.svg";

const title = "Pixelary.";
const description = (
  <>
    <p>
      In November 2023, I launched{" "}
      <a href="https://www.reddit.com/r/pixelary/" target="_blank">
        Pixelary
      </a>
      , a drawing and guessing game built using{" "}
      <a href="https://developers.reddit.com/" target="_blank">
        Reddit&apos;s developer platform, Devvit
      </a>
      . What started as a hackathon project quickly grew into a popular game,
      attracting over 60,000 daily active users and 50,000 subscribers. As both
      the designer and developer, I was excited to explore how the Devvit
      platform could foster new, interactive experiences for its users.
    </p>
    <p>
      The game was built with <Link href="/projects/blocks">Blocks</Link>, a UI
      framework I designed to enable interactive posts on Reddit.
      Pixelary&apos;s simple gameplay—where users draw based on prompts and
      others guess the drawings—relies on this framework to create seamless,
      engaging experiences. Blocks was key in ensuring Pixelary could scale and
      remain fresh as it continues to grow.
    </p>
    <p>
      You can explore the{" "}
      <a
        href="https://github.com/reddit/devvit/tree/main/packages/apps/pixelary"
        target="_blank"
      >
        open-source code for Pixelary here
      </a>
      . Additionally, some of my learnings from the project are shared on the{" "}
      <a
        href="https://www.reddit.com/r/RedditEng/comments/1h5yc05/lessons_from_making_rpixelary/"
        target="_blank"
      >
        Reddit engineering blog
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
        name: "2023",
      },
    ],
  },
  {
    title: "Links",
    values: [
      {
        name: "r/Pixelary",
        url: "https://www.reddit.com/r/Pixelary/",
      },
      {
        name: "Source Code",
        url: "https://github.com/reddit/devvit/tree/main/packages/apps/pixelary",
      },
      {
        name: "Reddit Eng Blog",
        url: "https://www.reddit.com/r/RedditEng/comments/1h5yc05/lessons_from_making_rpixelary/",
      },
    ],
  },
];

export const metadata: Metadata = { title: `${title} - Knut Synstad` };

const Project = () => (
  <>
    <ProjectHeader title={title} description={description} details={details} />
    <main className="flex flex-col gap-16 mb-32">
      <Marquee>
        {[
          DrawingBalloon,
          DrawingBanana,
          DrawingBaseball,
          DrawingBow,
          DrawingBroom,
          DrawingButterly,
          DrawingButterly2,
          DrawingChair,
          DrawingCowboy,
          DrawingCrab,
          DrawingCrown,
          DrawingDragon,
          DrawingDragon2,
          DrawingDraw,
          DrawingEyebrow,
          DrawingFlamingo,
          DrawingFrog,
          DrawingGrass,
          DrawingHeadphones,
          DrawingIsland,
          DrawingJazz,
          DrawingJellyfish,
          DrawingLobster,
          DrawingLobster2,
          DrawingMermaid,
          DrawingOrange,
          DrawingPet,
          DrawingPhone,
          DrawingPig,
          DrawingPig2,
          DrawingPineapple,
          DrawingPlatypus,
          DrawingPlatypus2,
          DrawingPoison,
          DrawingScooter,
          DrawingStar,
          DrawingSuperhero,
          DrawingSuperhero2,
          DrawingTreehouse,
          DrawingTulip,
          DrawingVolcano,
          DrawingWatermelon,
          DrawingWheel,
          DrawingWitch,
          DrawingWizard,
        ].map((image, index) => (
          <Image
            src={image}
            alt={title}
            key={`marquee-${index}-${image}`}
            className="w-[192px]"
          />
        ))}
      </Marquee>

      <div className="w-full flex flex-col gap-8">
        <h2>Make your guess</h2>
        <div className="grid grid-cols-2 gap-8">
          {[Guess, Solved].map((image, index) => (
            <Image
              src={image}
              alt={title}
              key={`${index}-${image}`}
              className="rounded-2xl shadow-2xl"
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-8">
        <h2 className="mt-32">Drawing experience</h2>
        <div className="grid grid-cols-3 gap-8">
          {[WordSelection, DrawingColorSelect, DrawingNearEnd].map(
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
        <h2 className="mt-32 max-w-[640px]">
          The pinned post provides a permanent spot for secondary game
          information
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {[
            PinnedPost,
            MyDrawings,
            Leaderboard,
            LeaderboardRange,
            HowToPlay,
            ProgressionCurrentLevel,
          ].map((image, index) => (
            <Image
              src={image}
              alt={title}
              key={`${index}-${image}`}
              className="rounded-2xl shadow-2xl"
            />
          ))}
        </div>
      </div>
    </main>
  </>
);

export default Project;
