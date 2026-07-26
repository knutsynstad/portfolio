import type { StaticImageData } from "next/image";

import aPictogramThumbnail from "./a-pictogram-is-worth-a-thousand-words/assets/thumbnail.gif";
import automationsThumbnail from "./automations/assets/thumbnail.png";
import avatarBuilderThumbnail from "./avatar-builder/assets/thumbnail.png";
import blocksThumbnail from "./blocks/assets/thumbnail.png";
import fauxCodeGeneratorThumbnail from "./faux-code-generator/assets/thumbnail.png";
import fromSensorsToActionThumbnail from "./from-sensors-to-action/assets/thumbnail.svg";
import gardenersThumbnail from "./gardeners-always-get-their-hands-in-the-dirt/assets/thumbnail.jpg";
import lookingBeyondTheWallsThumbnail from "./looking-beyond-the-walls/assets/thumbnail.jpg";
import mappingFamilyCaregivingThumbnail from "./mapping-family-caregiving/assets/thumbnail.png";
import mappingSocialShoppingThumbnail from "./mapping-social-shopping/assets/thumbnail.png";
import measuringCornThumbnail from "./measuring-corn-production-in-every-county-every-day/assets/thumbnail.gif";
import modelingDiabetesThumbnail from "./modeling-diabetes/assets/thumbnail.png";
import mosaicThumbnail from "./mosaic/assets/thumbnail.png";
import movingMountainsThumbnail from "./moving-mountains-to-shape-the-future/assets/thumbnail.jpg";
import mrPotatoHeadThumbnail from "./mr-potato-head-is-for-the-birds/assets/thumbnail.jpg";
import pixelaryThumbnail from "./pixelary/assets/thumbnail.png";
import playThumbnail from "./play/assets/thumbnail.png";
import raiseYourGlassThumbnail from "./raise-your-glass-to-dorian-gray/assets/thumbnail.jpg";
import redditMapsThumbnail from "./reddit-maps/assets/thumbnail.png";
import remediesThumbnail from "./remedies-come-in-all-shapes-and-flavors/assets/thumbnail.jpg";
import smarterTestingThumbnail from "./smarter-testing-for-better-health/assets/thumbnail.svg";
import sylloThumbnail from "./syllo/assets/thumbnail.png";
import appleParkThumbnail from "./the-construction-of-apple-park/assets/thumbnail.png";
import ticTacToeThumbnail from "./the-tic-tac-toe-solution-space/assets/thumbnail.gif";
import truthBlackAndWhiteThumbnail from "./the-truth-is-not-always-black-and-white/assets/thumbnail.jpg";
import biozThumbnail from "./using-ai-to-accelerate-life-science/assets/thumbnail.png";
import fortune500Thumbnail from "./visualizing-the-fortune-500/assets/thumbnail.png";
import windingDownThumbnail from "./winding-down-gets-a-little-help/assets/thumbnail.jpg";
import winningThumbnail from "./winning-is-the-only-way-to-play-the-game/assets/thumbnail.jpg";
import withoutThePastThumbnail from "./without-the-past-there-is-no-future/assets/thumbnail.jpg";

/*
 * Types
 */

export type Project = {
  slug: string;
  name: string;
  image: StaticImageData;
  tags: string[];
  visible: boolean;
};

/**
 * A sorted registry of projects.
 */
export const projects: Project[] = [
  {
    slug: "mosaic",
    name: "Mosaic",
    image: mosaicThumbnail,
    tags: ["Reddit", "Community", "Game", "Developer Platform"],
    visible: true,
  },
  {
    slug: "syllo",
    name: "Syllo",
    image: sylloThumbnail,
    tags: ["Reddit", "Community", "Game", "Developer Platform"],
    visible: true,
  },
  {
    slug: "pixelary",
    name: "Pixelary",
    image: pixelaryThumbnail,
    tags: ["Reddit", "Community", "Game", "Developer Platform"],
    visible: true,
  },
  {
    slug: "play",
    name: "Devvit Play",
    image: playThumbnail,
    tags: ["Reddit", "UI", "Tool", "Developer Platform"],
    visible: true,
  },
  {
    slug: "automations",
    name: "Reddit Automations",
    image: automationsThumbnail,
    tags: ["Reddit", "Automation", "Tool", "Developer Platform"],
    visible: true,
  },
  {
    slug: "avatar-builder",
    name: "Avatar Builder",
    image: avatarBuilderThumbnail,
    tags: ["Reddit", "Identity", "Tool", "User Economy"],
    visible: true,
  },
  {
    slug: "reddit-maps",
    name: "Reddit Maps",
    image: redditMapsThumbnail,
    tags: ["Reddit", "Computational Design", "Tool", "Solution Space"],
    visible: true,
  },
  {
    slug: "faux-code-generator",
    name: "Faux code generator",
    image: fauxCodeGeneratorThumbnail,
    tags: ["Procedural Design", "Tool"],
    visible: true,
  },
  {
    slug: "the-tic-tac-toe-solution-space",
    name: "The Tic-Tac-Toe solution space",
    image: ticTacToeThumbnail,
    tags: ["DDO", "Computational Design", "Solution Space"],
    visible: true,
  },
  {
    slug: "visualizing-the-fortune-500",
    name: "Visualizing the Fortune 500 by similarity",
    image: fortune500Thumbnail,
    tags: [
      "DDO",
      "Computational Design",
      "Solution Space",
      "Tool",
      "Data Visualization",
      "Machine Learning",
    ],
    visible: true,
  },
  {
    slug: "using-ai-to-accelerate-life-science",
    name: "Using A.I. to accelerate life science",
    image: biozThumbnail,
    tags: ["DDO", "Product Design"],
    visible: true,
  },
  {
    slug: "the-construction-of-apple-park",
    name: "The construction of Apple Park",
    image: appleParkThumbnail,
    tags: [
      "DDO",
      "Data Visualization",
      "Remote Sensing",
      "Satellites",
      "Time-lapse",
    ],
    visible: true,
  },
  {
    slug: "mapping-family-caregiving",
    name: "Mapping family caregiving",
    image: mappingFamilyCaregivingThumbnail,
    tags: ["DDO", "Data Visualization", "Procedural Design"],
    visible: true,
  },
  {
    slug: "from-sensors-to-action",
    name: "From sensors to action",
    image: fromSensorsToActionThumbnail,
    tags: ["DDO", "Model", "Remote Sensing", "Machine Learning"],
    visible: true,
  },
  {
    slug: "modeling-diabetes",
    name: "Modeling diabetes as a feedback loop",
    image: modelingDiabetesThumbnail,
    tags: ["DDO", "Model", "Feedback Loop"],
    visible: false,
  },
  {
    slug: "a-pictogram-is-worth-a-thousand-words",
    name: "A pictogram is worth a thousand words",
    image: aPictogramThumbnail,
    tags: ["DDO", "Iconography"],
    visible: true,
  },
  {
    slug: "mapping-social-shopping",
    name: "Mapping social shopping",
    image: mappingSocialShoppingThumbnail,
    tags: ["DDO", "Information Design"],
    visible: false,
  },
  {
    slug: "smarter-testing-for-better-health",
    name: "Smarter testing for better health",
    image: smarterTestingThumbnail,
    tags: ["DDO", "Branding"],
    visible: true,
  },
  {
    slug: "measuring-corn-production-in-every-county-every-day",
    name: "Measuring corn production, in every county, every day",
    image: measuringCornThumbnail,
    tags: ["DDO", "Data Visualization", "Remote Sensing", "Satellites"],
    visible: true,
  },
  {
    slug: "moving-mountains-to-shape-the-future",
    name: "Moving mountains to shape the future",
    image: movingMountainsThumbnail,
    tags: ["AAU", "Student", "Typography"],
    visible: true,
  },
  {
    slug: "mr-potato-head-is-for-the-birds",
    name: "Mr. Potato Head is for the birds",
    image: mrPotatoHeadThumbnail,
    tags: ["AAU", "Student", "Packaging Design"],
    visible: true,
  },
  {
    slug: "the-truth-is-not-always-black-and-white",
    name: "The truth is not always black & white",
    image: truthBlackAndWhiteThumbnail,
    tags: ["AAU", "Student", "Packaging Design", "Branding"],
    visible: true,
  },
  {
    slug: "remedies-come-in-all-shapes-and-flavors",
    name: "Remedies come in all shapes and flavors",
    image: remediesThumbnail,
    tags: ["AAU", "Student", "Packaging Design", "Branding"],
    visible: true,
  },
  {
    slug: "winding-down-gets-a-little-help",
    name: "Winding down gets a little help",
    image: windingDownThumbnail,
    tags: ["AAU", "Student", "Branding"],
    visible: true,
  },
  {
    slug: "gardeners-always-get-their-hands-in-the-dirt",
    name: "Gardeners always get their hands in the dirt",
    image: gardenersThumbnail,
    tags: ["AAU", "Student", "Packaging Design"],
    visible: true,
  },
  {
    slug: "without-the-past-there-is-no-future",
    name: "Without the past, there is no future",
    image: withoutThePastThumbnail,
    tags: ["AAU", "Student", "Ancestry"],
    visible: true,
  },
  {
    slug: "raise-your-glass-to-dorian-gray",
    name: "Raise your glass to Dorian Gray",
    image: raiseYourGlassThumbnail,
    tags: ["AAU", "Student", "Packaging Design"],
    visible: true,
  },
  {
    slug: "looking-beyond-the-walls",
    name: "Looking beyond the walls",
    image: lookingBeyondTheWallsThumbnail,
    tags: ["AAU", "Student", "Typography"],
    visible: true,
  },
  {
    slug: "winning-is-the-only-way-to-play-the-game",
    name: "Winning is the only way to play the game",
    image: winningThumbnail,
    tags: ["AAU", "Student", "Book Design"],
    visible: true,
  },
  {
    slug: "blocks",
    name: "Devvit Blocks",
    image: blocksThumbnail,
    tags: ["Reddit", "UI Framework", "Developer Platform"],
    visible: false,
  },
];

/**
 * The visible projects.
 */
export const visibleProjects = projects.filter((project) => project.visible);

/**
 * Returns the URL for a project.
 * @param slug - The slug of the project.
 * @returns The URL for the project.
 */
export function projectUrl(slug: string): string {
  return `/projects/${slug}/`;
}
