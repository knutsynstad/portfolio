import ProjectTile from "@/components/ProjectTile";
import Mark from "@/components/Mark";

type Project = {
  name: string;
  image: string;
  url: string;
  tags: string[];
};

const projects: Project[] = [
  // {
  //   name: "Pixelary",
  //   image: "images/pixelary-icon.png",
  //   url: "/projects/play/",
  //   tags: ["Reddit", "Dev Platform"],
  // },
  // {
  //   name: "Blocks Playground",
  //   image: "images/play-thumbnail.png",
  //   url: "/projects/play/",
  //   tags: ["Reddit", "Dev Platform"],
  // },
  // {
  //   name: "Blocks UI Framework",
  //   image: "images/devvit-logo.png",
  //   url: "/projects/blocks/",
  //   tags: ["Reddit", "Dev Platform"],
  // },
  // {
  //   name: "Automating Reddit",
  //   image: "images/automations_thumbnail.png",
  //   url: "/projects/automations/",
  //   tags: ["Reddit", "Dev Platform"],
  // },
  {
    name: "Avatar Builder",
    image: "images/AvatarBuilder.png",
    url: "/projects/avatar_builder/",
    tags: ["Reddit", "Bets"],
  },
  {
    name: "Reddit Maps",
    image: "images/reddit-maps-thumbnail.png",
    url: "/projects/reddit_maps/",
    tags: ["Reddit", "Solution Space"],
  },
  {
    name: "Faux code generator",
    image: "images/fauxcode-thumbnail.png",
    url: "/projects/faux_code_generator/",
    tags: ["Tool", "Coding"],
  },
  {
    name: "The Tic-Tac-Toe solution space",
    image: "images/Tic_Tac_Toe_Thumbnail.gif",
    url: "/projects/the_tic_tac_toe_solution_space/",
    tags: ["DDO", "Solution Space"],
  },
  {
    name: "Visualizing the Fortune 500 by similarity",
    image: "images/Fortune_500_Thumbnail.png",
    url: "/projects/visualizing_the_fortune_500/",
    tags: ["UIUX", "Information", "Coding"],
  },
  {
    name: "Using A.I. to accelerate life science",
    image: "images/Bioz_0.png",
    url: "/projects/using_ai_to_accelerate_life_science/",
    tags: ["DDO", "Product Design"],
  },
  {
    name: "The construction of Apple Park",
    image: "images/Apple_Thumbnail.png",
    url: "/projects/the_construction_of_apple_park/",
    tags: ["Information", "Coding"],
  },
  {
    name: "Mapping family caregiving",
    image: "images/Caremaps_0.png",
    url: "/projects/mapping_family_caregiving/",
    tags: ["Information"],
  },
  {
    name: "From sensors to action",
    image: "images/Sensors_Thumbnail.svg",
    url: "/projects/from_sensors_to_action/",
    tags: ["Information"],
  },
  {
    name: "Modeling diabetes as a feedback loop",
    image: "images/Diabetes_Thumbnail.png",
    url: "/projects/modeling_diabetes/",
    tags: ["Model"],
  },
  {
    name: "A pictogram is worth a thousand words",
    image: "images/Iconography_00.gif",
    url: "/projects/a_pictogram_is_worth_a_thousand_words/",
    tags: ["Icon"],
  },
  {
    name: "Mapping social shopping",
    image: "images/Sello_Thumbnail.png",
    url: "/projects/mapping_social_shopping/",
    tags: ["uiux"],
  },
  {
    name: "Smarter testing for better health",
    image: "images/AST_Thumbnail.svg",
    url: "/projects/smarter_testing_for_better_health/",
    tags: ["Print", "Coding"],
  },
  {
    name: "Measuring corn production, in every county, every day",
    image: "images/Corn_Thumbnail.gif",
    url: "/projects/measuring_corn_production_in_every_county_every_day/",
    tags: ["Print", "Information"],
  },
  {
    name: "Moving mountains to shape the future",
    image: "images/100_People_00.jpg",
    url: "/projects/moving_mountains_to_shape_the_future/",
    tags: ["Print", "Student"],
  },
  {
    name: "Mr. Potato Head is for the birds",
    image: "images/Birdhouse_00.jpg",
    url: "/projects/mr_potato_head_is_for_the_birds/",
    tags: ["Packaging", "Student"],
  },
  {
    name: "The truth is not always black & white",
    image: "images/Margin_of_Error_00.jpg",
    url: "/projects/the_truth_is_not_always_black_and_white/",
    tags: ["Print", "Packaging", "Student"],
  },
  {
    name: "Remedies come in all shapes and flavors",
    image: "images/Earthnuts_00.jpg",
    url: "/projects/remedies_come_in_all_shapes_and_flavors/",
    tags: ["Packaging", "Student"],
  },
  {
    name: "Winding down gets a little help",
    image: "images/Seagrams_00.jpg",
    url: "/projects/winding_down_gets_a_little_help/",
    tags: ["Print", "Student"],
  },
  {
    name: "Gardeners always get their hands in the dirt",
    image: "images/French_Paper_00.jpg",
    url: "/projects/gardeners_always_get_their_hands_in_the_dirt/",
    tags: ["Packaging", "Student"],
  },
  {
    name: "Without the past, there is no future",
    image: "images/Befor_00.jpg",
    url: "/projects/without_the_past_there_is_no_future/",
    tags: ["Print", "UIUX", "Student"],
  },
  {
    name: "Raise your glass to Dorian Gray",
    image: "images/Magnolia_00.jpg",
    url: "/projects/raise_your_glass_to_dorian_gray/",
    tags: ["Packaging", "Student"],
  },
  {
    name: "Looking beyond the walls",
    image: "images/sweet_tooth_thumbnail.jpg",
    url: "/projects/looking_beyond_the_walls/",
    tags: ["Print", "Student"],
  },
  {
    name: "Winning is the only way to play the game",
    image: "images/Elite_Raiders_00.jpg",
    url: "/projects/winning_is_the_only_way_to_play_the_game/",
    tags: ["Print", "Student"],
  },
];

export default function Home() {
  return (
    <>
      <header className="mb-32 flex flex-col gap-8">
        <h1>Hello 👋</h1>
        <p className="text-2xl max-w-2xl tracking-tight">
          I&apos;m{" "}
          <a href="https://www.linkedin.com/in/knutsynstad" target="_blank">
            Knut
          </a>
          , a San-Francisco-based designer and developer. Currently the design
          lead for{" "}
          <a href="https://developers.reddit.com/" target="_blank">
            <Mark>Reddit&apos;s Developer Platform</Mark>
          </a>
          .
        </p>
      </header>

      <main className="grid grid-cols-2 md:grid-cols-3 gap-0 m-[-16px]">
        {projects.map((project) => (
          <ProjectTile
            key={project.url}
            title={project.name}
            image={project.image}
            url={project.url}
            tags={project.tags}
          />
        ))}
      </main>
    </>
  );
}
