export type Project = {
  slug: string;
  name: string;
  image: string;
  tags: string[];
  featured: boolean;
  metaDescription: string;
};

export function projectUrl(slug: string): string {
  return `/projects/${slug}/`;
}

export const projects: Project[] = [
  {
    slug: "a-pictogram-is-worth-a-thousand-words",
    name: "A pictogram is worth a thousand words",
    image: "images/Iconography_00.gif",
    tags: ["DDO", "Iconography"],
    featured: true,
    metaDescription:
      "Most of us are familiar with the notion that a complex idea may be communicated through an image, or that an image of an object captures its meaning or essen...",
  },
  {
    slug: "automations",
    name: "Reddit Automations",
    image: "images/automations_thumbnail.png",
    tags: ["Reddit", "Automation", "Tool", "Developer Platform"],
    featured: true,
    metaDescription:
      "AutoModerator is a site-wide moderation tool that you can set up and customize in any subreddit to assist you in moderating that community. It can handle man...",
  },
  {
    slug: "avatar-builder",
    name: "Avatar Builder",
    image: "images/AvatarBuilder.png",
    tags: ["Reddit", "Identity", "Tool", "User Economy"],
    featured: true,
    metaDescription:
      "Avatars on Reddit are more than mere images—they are the embodiment of personal identity and creativity, offering an expressive extension of oneself.",
  },
  {
    slug: "blocks",
    name: "Devvit Blocks",
    image: "images/devvit-logo.png",
    tags: ["Reddit", "UI Framework", "Developer Platform"],
    featured: false,
    metaDescription:
      "Reddit is well known for its April Fools events like r/Place and r/Second. These events have shown the power of community collaboration and creativity. As in...",
  },
  {
    slug: "faux-code-generator",
    name: "Faux code generator",
    image: "images/fauxcode-thumbnail.png",
    tags: ["Procedural Design", "Tool"],
    featured: true,
    metaDescription:
      "Designers and illustrators sometimes create abstracted imitations of code for their technical illustrations and designs. This tool enables easy creation of e...",
  },
  {
    slug: "from-sensors-to-action",
    name: "From sensors to action",
    image: "images/Sensors_Thumbnail.svg",
    tags: ["DDO", "Model", "Remote Sensing", "Machine Learning"],
    featured: true,
    metaDescription:
      "Descartes Labs, a spinout from the Los Alamos National Laboratory combines A.I., satellites, and high-performance computing for some truly impressive results...",
  },
  {
    slug: "gardeners-always-get-their-hands-in-the-dirt",
    name: "Gardeners always get their hands in the dirt",
    image: "images/French_Paper_00.jpg",
    tags: ["AAU", "Student", "Packaging Design"],
    featured: true,
    metaDescription:
      "The French Paper Company has been environmentally conscious since the very beginning. The hydro-generators, that power every aspect of their daily processes,...",
  },
  {
    slug: "looking-beyond-the-walls",
    name: "Looking beyond the walls",
    image: "images/sweet_tooth_thumbnail.jpg",
    tags: ["AAU", "Student", "Typography"],
    featured: true,
    metaDescription:
      "The following posters are experiments in typography using unexpected objects to form letter shapes. The first poster of this series is part of an architectur...",
  },
  {
    slug: "mapping-family-caregiving",
    name: "Mapping family caregiving",
    image: "images/Caremaps_0.png",
    tags: ["DDO", "Data Visualization", "Procedural Design"],
    featured: true,
    metaDescription:
      "We rely on healthcare professionals (HCPs) to help us maintain our health—typically in hospitals and clinics. Yet many have chronic health conditions, which ...",
  },
  {
    slug: "mapping-social-shopping",
    name: "Mapping social shopping",
    image: "images/Sello_Thumbnail.png",
    tags: ["DDO", "Information Design"],
    featured: true,
    metaDescription:
      "Dubberly Design Office has a long history of pioneering approaches for taming complexity. One of the artifacts to emerge from the practice is the Application...",
  },
  {
    slug: "measuring-corn-production-in-every-county-every-day",
    name: "Measuring corn production, in every county, every day",
    image: "images/Corn_Thumbnail.gif",
    tags: ["DDO", "Data Visualization", "Remote Sensing", "Satellites"],
    featured: true,
    metaDescription:
      "Every year, the United States Department of Agriculture (USDA) spends millions of dollars predicting national crop production throughout the growing season. ...",
  },
  {
    slug: "modeling-diabetes",
    name: "Modeling diabetes as a feedback loop",
    image: "images/Diabetes_Thumbnail.png",
    tags: ["DDO", "Model", "Feedback Loop"],
    featured: true,
    metaDescription:
      "Our body continuously strives to achieve homeostasis. It does so through a number of interlocked biological feedback loops, such as the endocrine system—a co...",
  },
  {
    slug: "mosaic",
    name: "Mosaic",
    image: "images/mosaic-thumbnail.png",
    tags: ["Reddit", "Community", "Game", "Developer Platform"],
    featured: true,
    metaDescription:
      "Mosaic is a shared canvas where redditors remix an image, one tiny tile at a time. Pan and zoom to explore what everyone else has done, or sit back and watch...",
  },
  {
    slug: "moving-mountains-to-shape-the-future",
    name: "Moving mountains to shape the future",
    image: "images/100_People_00.jpg",
    tags: ["AAU", "Student", "Typography"],
    featured: true,
    metaDescription:
      "When tasked to redesign a book of my choosing, I found it was going to be necessary to select a book with strong subject matter, yet suffered from a lack of ...",
  },
  {
    slug: "mr-potato-head-is-for-the-birds",
    name: "Mr. Potato Head is for the birds",
    image: "images/Birdhouse_00.jpg",
    tags: ["AAU", "Student", "Packaging Design"],
    featured: true,
    metaDescription:
      "In 1943, Ingvar Kamprad started a company specializing in mail order delivery that boasted a catalog which included matches, fish, decorations, seeds, ballpo...",
  },
  {
    slug: "pixelary",
    name: "Pixelary",
    image: "images/pixelary-thumbnail.png",
    tags: ["Reddit", "Community", "Game", "Developer Platform"],
    featured: true,
    metaDescription:
      "Pixelary is a drawing and guessing game on Reddit: you pick a word, paint on a 16×16 pixel canvas, and the community guesses what it is. It's asynchronous, w...",
  },
  {
    slug: "play",
    name: "Devvit Play",
    image: "images/play-thumbnail.png",
    tags: ["Reddit", "UI", "Tool", "Developer Platform"],
    featured: true,
    metaDescription:
      "Devvit Play is a lightweight authoring environment for rapid experimentation with Reddit's custom post feature. It addresses two critical challenges faced by...",
  },
  {
    slug: "raise-your-glass-to-dorian-gray",
    name: "Raise your glass to Dorian Gray",
    image: "images/Magnolia_00.jpg",
    tags: ["AAU", "Student", "Packaging Design"],
    featured: true,
    metaDescription:
      "Magnolia, the 15-year-old craft brewery and gastropub in the Haight-Ashbury district, is well established in the Bay Area, known for their excellent handcraf...",
  },
  {
    slug: "reddit-maps",
    name: "Reddit Maps",
    image: "images/reddit-maps-thumbnail.png",
    tags: ["Reddit", "Computational Design", "Tool", "Solution Space"],
    featured: true,
    metaDescription:
      "Finding the right community on Reddit can be magical. It can be a place to find support, share a passion, or just have a laugh. But with thousands of active ...",
  },
  {
    slug: "remedies-come-in-all-shapes-and-flavors",
    name: "Remedies come in all shapes and flavors",
    image: "images/Earthnuts_00.jpg",
    tags: ["AAU", "Student", "Packaging Design", "Branding"],
    featured: true,
    metaDescription:
      "Delicatessens in San Francisco are a dime a dozen. Unfortunately, most don't have the budget to obtain design services that would help separate them from the...",
  },
  {
    slug: "smarter-testing-for-better-health",
    name: "Smarter testing for better health",
    image: "images/AST_Thumbnail.svg",
    tags: ["DDO", "Branding"],
    featured: true,
    metaDescription:
      "Adaptive Sensory Technology (AST), a spinout from Harvard Medical School, is developing advanced, quantitative tools for detecting changes in functional visi...",
  },
  {
    slug: "syllo",
    name: "Syllo",
    image: "images/syllo-thumbnail.png",
    tags: ["Reddit", "Community", "Game", "Developer Platform"],
    featured: true,
    metaDescription:
      "Syllo is a daily word puzzle on Reddit. Each day you get five crossword-style clues and a jumble of syllables, one word per clue, then race the clock to solv...",
  },
  {
    slug: "the-construction-of-apple-park",
    name: "The construction of Apple Park",
    image: "images/Apple_Thumbnail.png",
    tags: [
      "DDO",
      "Data Visualization",
      "Remote Sensing",
      "Satellites",
      "Time-lapse",
    ],
    featured: true,
    metaDescription:
      "Using platforms like Descartes Labs , everyone from hobbyists to scientists can monitor the planet in near real-time for changes that matter to them. Here I ...",
  },
  {
    slug: "the-tic-tac-toe-solution-space",
    name: "The Tic-Tac-Toe solution space",
    image: "images/Tic_Tac_Toe_Thumbnail.gif",
    tags: ["DDO", "Computational Design", "Solution Space"],
    featured: true,
    metaDescription:
      'In this visualization, we examine what Herbert Simon might call the &#8220;solution space" for tic-tac-toe, a compound visualization of all its solutions—eve...',
  },
  {
    slug: "the-truth-is-not-always-black-and-white",
    name: "The truth is not always black & white",
    image: "images/Margin_of_Error_00.jpg",
    tags: ["AAU", "Student", "Packaging Design", "Branding"],
    featured: true,
    metaDescription:
      "Of Errol Morris, Roger Ebert once said, “After twenty years of reviewing films, I haven't found another filmmaker who intrigues me more… Morris is like a mag...",
  },
  {
    slug: "using-ai-to-accelerate-life-science",
    name: "Using A.I. to accelerate life science",
    image: "images/Bioz_0.png",
    tags: ["DDO", "Product Design"],
    featured: true,
    metaDescription:
      "Through cutting-edge natural language processing, life science startup Bioz digests millions of public and commercial scientific articles to better understan...",
  },
  {
    slug: "visualizing-the-fortune-500",
    name: "Visualizing the Fortune 500 by similarity",
    image: "images/Fortune_500_Thumbnail.png",
    tags: [
      "DDO",
      "Computational Design",
      "Solution Space",
      "Tool",
      "Data Visualization",
      "Machine Learning",
    ],
    featured: true,
    metaDescription:
      "I am especially interested in the intersection of A.I. and design. In this experiment, I use A.I. techniques to organize and visualize the logos of the Fortu...",
  },
  {
    slug: "winding-down-gets-a-little-help",
    name: "Winding down gets a little help",
    image: "images/Seagrams_00.jpg",
    tags: ["AAU", "Student", "Branding"],
    featured: true,
    metaDescription:
      "In today's marketplace, a brand is no longer simply a logo, but instead an highly considered and orchestrated set of elements meant to reach an audience—not ...",
  },
  {
    slug: "winning-is-the-only-way-to-play-the-game",
    name: "Winning is the only way to play the game",
    image: "images/Elite_Raiders_00.jpg",
    tags: ["AAU", "Student", "Book Design"],
    featured: true,
    metaDescription:
      "The popularity of video games has increased exponentially over the last decade and in order to keep players interested, game developers keep adding content a...",
  },
  {
    slug: "without-the-past-there-is-no-future",
    name: "Without the past, there is no future",
    image: "images/Befor_00.jpg",
    tags: ["AAU", "Student", "Ancestry"],
    featured: true,
    metaDescription:
      "“Without the past, there is no future.” The origin of this phrase remains a mystery, but the message is clear―understanding where we are going comes from kno...",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
