/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  cssModules: true,
  async redirects() {
    return [
      {
        source: "/a_pictogram_is_worth_a_thousand_words",
        destination: "/projects/a_pictogram_is_worth_a_thousand_words",
        permanent: true,
      },
      {
        source: "/automations",
        destination: "/projects/automations",
        permanent: true,
      },
      {
        source: "/avatar_builder",
        destination: "/projects/avatar_builder",
        permanent: true,
      },
      {
        source: "/faux_code_generator",
        destination: "/projects/faux_code_generator",
        permanent: true,
      },
      {
        source: "/gardeners_always_get_their_hands_in_the_dirt",
        destination: "/projects/gardeners_always_get_their_hands_in_the_dirt",
        permanent: true,
      },
      {
        source: "/looking_beyond_the_walls",
        destination: "/projects/looking_beyond_the_walls",
        permanent: true,
      },
      {
        source: "/mapping_family_caregiving",
        destination: "/projects/mapping_family_caregiving",
        permanent: true,
      },
      {
        source: "/measuring_corn_production_in_every_county_every_day",
        destination:
          "/projects/measuring_corn_production_in_every_county_every_day",
        permanent: true,
      },
      {
        source: "/modeling_diabetes",
        destination: "/projects/modeling_diabetes",
        permanent: true,
      },
      {
        source: "/moving_mountains_to_shape_the_future",
        destination: "/projects/moving_mountains_to_shape_the_future",
        permanent: true,
      },
      {
        source: "/mr_potato_head_is_for_the_birds",
        destination: "/projects/mr_potato_head_is_for_the_birds",
        permanent: true,
      },
      {
        source: "/raise_your_glass_to_dorian_gray",
        destination: "/projects/raise_your_glass_to_dorian_gray",
        permanent: true,
      },
      {
        source: "/reddit_maps",
        destination: "/projects/reddit_maps",
        permanent: true,
      },
      {
        source: "/remedies_come_in_all_shapes_and_flavors",
        destination: "/projects/remedies_come_in_all_shapes_and_flavors",
        permanent: true,
      },
      {
        source: "/smarter_testing_for_better_health",
        destination: "/projects/smarter_testing_for_better_health",
        permanent: true,
      },
      {
        source: "/the_construction_of_apple_park",
        destination: "/projects/the_construction_of_apple_park",
        permanent: true,
      },
      {
        source: "/the_tic_tac_toe_solution_space",
        destination: "/projects/the_tic_tac_toe_solution_space",
        permanent: true,
      },
      {
        source: "/the_truth_is_not_always_black_and_white",
        destination: "/projects/the_truth_is_not_always_black_and_white",
        permanent: true,
      },
      {
        source: "/using_ai_to_accelerate_life_science",
        destination: "/projects/using_ai_to_accelerate_life_science",
        permanent: true,
      },
      {
        source: "/visualizing_the_fortune_500",
        destination: "/projects/visualizing_the_fortune_500",
        permanent: true,
      },
      {
        source: "/winding_down_gets_a_little_help",
        destination: "/projects/winding_down_gets_a_little_help",
        permanent: true,
      },
      {
        source: "/winning_is_the_only_way_to_play_the_game",
        destination: "/projects/winning_is_the_only_way_to_play_the_game",
        permanent: true,
      },
      {
        source: "/without_the_past_there_is_no_future",
        destination: "/projects/without_the_past_there_is_no_future",
        permanent: true,
      },
    ];
  },
};
