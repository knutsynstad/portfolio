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

export type Project = {
  slug: string;
  name: string;
  image: StaticImageData;
  tags: string[];
  visible: boolean;
  metaDescription: string;
};

export function projectUrl(slug: string): string {
  return `/projects/${slug}/`;
}

export const projects: Project[] = [
  {
    slug: "mosaic",
    name: "Mosaic",
    image: mosaicThumbnail,
    tags: ["Reddit", "Community", "Game", "Developer Platform"],
    visible: true,
    metaDescription:
      "Mosaic is a shared canvas where redditors remix an image, one tiny tile at a time. Pan and zoom to explore what everyone else has done, or sit back and watch...",
  },
  {
    slug: "syllo",
    name: "Syllo",
    image: sylloThumbnail,
    tags: ["Reddit", "Community", "Game", "Developer Platform"],
    visible: true,
    metaDescription:
      "Syllo is a daily word puzzle on Reddit. Each day you get five crossword-style clues and a jumble of syllables, one word per clue, then race the clock to solv...",
  },
  {
    slug: "pixelary",
    name: "Pixelary",
    image: pixelaryThumbnail,
    tags: ["Reddit", "Community", "Game", "Developer Platform"],
    visible: true,
    metaDescription:
      "Pixelary is a drawing and guessing game on Reddit: you pick a word, paint on a 16×16 pixel canvas, and the community guesses what it is. It's asynchronous, w...",
  },
  {
    slug: "play",
    name: "Devvit Play",
    image: playThumbnail,
    tags: ["Reddit", "UI", "Tool", "Developer Platform"],
    visible: true,
    metaDescription:
      "Devvit Play is a lightweight authoring environment for rapid experimentation with Reddit's custom post feature. It addresses two critical challenges faced by...",
  },
  {
    slug: "automations",
    name: "Reddit Automations",
    image: automationsThumbnail,
    tags: ["Reddit", "Automation", "Tool", "Developer Platform"],
    visible: true,
    metaDescription:
      "AutoModerator is a site-wide moderation tool that you can set up and customize in any subreddit to assist you in moderating that community. It can handle man...",
  },
  {
    slug: "avatar-builder",
    name: "Avatar Builder",
    image: avatarBuilderThumbnail,
    tags: ["Reddit", "Identity", "Tool", "User Economy"],
    visible: true,
    metaDescription:
      "Avatars on Reddit are more than mere images—they are the embodiment of personal identity and creativity, offering an expressive extension of oneself.",
  },
  {
    slug: "reddit-maps",
    name: "Reddit Maps",
    image: redditMapsThumbnail,
    tags: ["Reddit", "Computational Design", "Tool", "Solution Space"],
    visible: true,
    metaDescription:
      "Finding the right community on Reddit can be magical. It can be a place to find support, share a passion, or just have a laugh. But with thousands of active ...",
  },
  {
    slug: "faux-code-generator",
    name: "Faux code generator",
    image: fauxCodeGeneratorThumbnail,
    tags: ["Procedural Design", "Tool"],
    visible: true,
    metaDescription:
      "Designers and illustrators sometimes create abstracted imitations of code for their technical illustrations and designs. This tool enables easy creation of e...",
  },
  {
    slug: "the-tic-tac-toe-solution-space",
    name: "The Tic-Tac-Toe solution space",
    image: ticTacToeThumbnail,
    tags: ["DDO", "Computational Design", "Solution Space"],
    visible: true,
    metaDescription:
      'In this visualization, we examine what Herbert Simon might call the &#8220;solution space" for tic-tac-toe, a compound visualization of all its solutions—eve...',
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
    metaDescription:
      "I am especially interested in the intersection of A.I. and design. In this experiment, I use A.I. techniques to organize and visualize the logos of the Fortu...",
  },
  {
    slug: "using-ai-to-accelerate-life-science",
    name: "Using A.I. to accelerate life science",
    image: biozThumbnail,
    tags: ["DDO", "Product Design"],
    visible: true,
    metaDescription:
      "Through cutting-edge natural language processing, life science startup Bioz digests millions of public and commercial scientific articles to better understan...",
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
    metaDescription:
      "Using platforms like Descartes Labs , everyone from hobbyists to scientists can monitor the planet in near real-time for changes that matter to them. Here I ...",
  },
  {
    slug: "mapping-family-caregiving",
    name: "Mapping family caregiving",
    image: mappingFamilyCaregivingThumbnail,
    tags: ["DDO", "Data Visualization", "Procedural Design"],
    visible: true,
    metaDescription:
      "We rely on healthcare professionals (HCPs) to help us maintain our health—typically in hospitals and clinics. Yet many have chronic health conditions, which ...",
  },
  {
    slug: "from-sensors-to-action",
    name: "From sensors to action",
    image: fromSensorsToActionThumbnail,
    tags: ["DDO", "Model", "Remote Sensing", "Machine Learning"],
    visible: true,
    metaDescription:
      "Descartes Labs, a spinout from the Los Alamos National Laboratory combines A.I., satellites, and high-performance computing for some truly impressive results...",
  },
  {
    slug: "modeling-diabetes",
    name: "Modeling diabetes as a feedback loop",
    image: modelingDiabetesThumbnail,
    tags: ["DDO", "Model", "Feedback Loop"],
    visible: true,
    metaDescription:
      "Our body continuously strives to achieve homeostasis. It does so through a number of interlocked biological feedback loops, such as the endocrine system—a co...",
  },
  {
    slug: "a-pictogram-is-worth-a-thousand-words",
    name: "A pictogram is worth a thousand words",
    image: aPictogramThumbnail,
    tags: ["DDO", "Iconography"],
    visible: true,
    metaDescription:
      "Most of us are familiar with the notion that a complex idea may be communicated through an image, or that an image of an object captures its meaning or essen...",
  },
  {
    slug: "mapping-social-shopping",
    name: "Mapping social shopping",
    image: mappingSocialShoppingThumbnail,
    tags: ["DDO", "Information Design"],
    visible: true,
    metaDescription:
      "Dubberly Design Office has a long history of pioneering approaches for taming complexity. One of the artifacts to emerge from the practice is the Application...",
  },
  {
    slug: "smarter-testing-for-better-health",
    name: "Smarter testing for better health",
    image: smarterTestingThumbnail,
    tags: ["DDO", "Branding"],
    visible: true,
    metaDescription:
      "Adaptive Sensory Technology (AST), a spinout from Harvard Medical School, is developing advanced, quantitative tools for detecting changes in functional visi...",
  },
  {
    slug: "measuring-corn-production-in-every-county-every-day",
    name: "Measuring corn production, in every county, every day",
    image: measuringCornThumbnail,
    tags: ["DDO", "Data Visualization", "Remote Sensing", "Satellites"],
    visible: true,
    metaDescription:
      "Every year, the United States Department of Agriculture (USDA) spends millions of dollars predicting national crop production throughout the growing season. ...",
  },
  {
    slug: "moving-mountains-to-shape-the-future",
    name: "Moving mountains to shape the future",
    image: movingMountainsThumbnail,
    tags: ["AAU", "Student", "Typography"],
    visible: true,
    metaDescription:
      "When tasked to redesign a book of my choosing, I found it was going to be necessary to select a book with strong subject matter, yet suffered from a lack of ...",
  },
  {
    slug: "mr-potato-head-is-for-the-birds",
    name: "Mr. Potato Head is for the birds",
    image: mrPotatoHeadThumbnail,
    tags: ["AAU", "Student", "Packaging Design"],
    visible: true,
    metaDescription:
      "In 1943, Ingvar Kamprad started a company specializing in mail order delivery that boasted a catalog which included matches, fish, decorations, seeds, ballpo...",
  },
  {
    slug: "the-truth-is-not-always-black-and-white",
    name: "The truth is not always black & white",
    image: truthBlackAndWhiteThumbnail,
    tags: ["AAU", "Student", "Packaging Design", "Branding"],
    visible: true,
    metaDescription:
      "Of Errol Morris, Roger Ebert once said, “After twenty years of reviewing films, I haven't found another filmmaker who intrigues me more… Morris is like a mag...",
  },
  {
    slug: "remedies-come-in-all-shapes-and-flavors",
    name: "Remedies come in all shapes and flavors",
    image: remediesThumbnail,
    tags: ["AAU", "Student", "Packaging Design", "Branding"],
    visible: true,
    metaDescription:
      "Delicatessens in San Francisco are a dime a dozen. Unfortunately, most don't have the budget to obtain design services that would help separate them from the...",
  },
  {
    slug: "winding-down-gets-a-little-help",
    name: "Winding down gets a little help",
    image: windingDownThumbnail,
    tags: ["AAU", "Student", "Branding"],
    visible: true,
    metaDescription:
      "In today's marketplace, a brand is no longer simply a logo, but instead an highly considered and orchestrated set of elements meant to reach an audience—not ...",
  },
  {
    slug: "gardeners-always-get-their-hands-in-the-dirt",
    name: "Gardeners always get their hands in the dirt",
    image: gardenersThumbnail,
    tags: ["AAU", "Student", "Packaging Design"],
    visible: true,
    metaDescription:
      "The French Paper Company has been environmentally conscious since the very beginning. The hydro-generators, that power every aspect of their daily processes,...",
  },
  {
    slug: "without-the-past-there-is-no-future",
    name: "Without the past, there is no future",
    image: withoutThePastThumbnail,
    tags: ["AAU", "Student", "Ancestry"],
    visible: true,
    metaDescription:
      "“Without the past, there is no future.” The origin of this phrase remains a mystery, but the message is clear―understanding where we are going comes from kno...",
  },
  {
    slug: "raise-your-glass-to-dorian-gray",
    name: "Raise your glass to Dorian Gray",
    image: raiseYourGlassThumbnail,
    tags: ["AAU", "Student", "Packaging Design"],
    visible: true,
    metaDescription:
      "Magnolia, the 15-year-old craft brewery and gastropub in the Haight-Ashbury district, is well established in the Bay Area, known for their excellent handcraf...",
  },
  {
    slug: "looking-beyond-the-walls",
    name: "Looking beyond the walls",
    image: lookingBeyondTheWallsThumbnail,
    tags: ["AAU", "Student", "Typography"],
    visible: true,
    metaDescription:
      "The following posters are experiments in typography using unexpected objects to form letter shapes. The first poster of this series is part of an architectur...",
  },
  {
    slug: "winning-is-the-only-way-to-play-the-game",
    name: "Winning is the only way to play the game",
    image: winningThumbnail,
    tags: ["AAU", "Student", "Book Design"],
    visible: true,
    metaDescription:
      "The popularity of video games has increased exponentially over the last decade and in order to keep players interested, game developers keep adding content a...",
  },
  {
    slug: "blocks",
    name: "Devvit Blocks",
    image: blocksThumbnail,
    tags: ["Reddit", "UI Framework", "Developer Platform"],
    visible: false,
    metaDescription:
      "Reddit is well known for its April Fools events like r/Place and r/Second. These events have shown the power of community collaboration and creativity. As in...",
  },
];

export const visibleProjects = projects.filter((project) => project.visible);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
