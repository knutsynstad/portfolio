const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/scripts/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
            {
                test: /\.pug$/,
                use: { loader: 'pug-loader' }
            },
            {
                test: /\.sass$/,
                use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        minimize: true,
                        importLoaders: 2
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/pug/index.pug",
            filename: "index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/thanks.pug",
            filename: "thanks.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/moving_mountains_to_shape_the_future.pug",
            filename: "moving_mountains_to_shape_the_future/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/mr_potato_head_is_for_the_birds.pug",
            filename: "mr_potato_head_is_for_the_birds/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/the_truth_is_not_always_black_and_white.pug",
            filename: "the_truth_is_not_always_black_and_white/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/remedies_come_in_all_shapes_and_flavors.pug",
            filename: "remedies_come_in_all_shapes_and_flavors/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/winding_down_gets_a_little_help.pug",
            filename: "winding_down_gets_a_little_help/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/gardeners_always_get_their_hands_in_the_dirt.pug",
            filename: "gardeners_always_get_their_hands_in_the_dirt/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/winning_is_the_only_way_to_play_the_game.pug",
            filename: "winning_is_the_only_way_to_play_the_game/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/raise_your_glass_to_dorian_gray.pug",
            filename: "raise_your_glass_to_dorian_gray/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/looking_beyond_the_walls.pug",
            filename: "looking_beyond_the_walls/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/without_the_past_there_is_no_future.pug",
            filename: "without_the_past_there_is_no_future/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/mapping_family_caregiving.pug",
            filename: "mapping_family_caregiving/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/a_pictogram_is_worth_a_thousand_words.pug",
            filename: "a_pictogram_is_worth_a_thousand_words/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/using_ai_to_accelerate_life_science.pug",
            filename: "using_ai_to_accelerate_life_science/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/from_sensors_to_action.pug",
            filename: "from_sensors_to_action/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/visualizing_the_fortune_500.pug",
            filename: "visualizing_the_fortune_500/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/measuring_corn_production_in_every_county_every_day.pug",
            filename: "measuring_corn_production_in_every_county_every_day/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/smarter_testing_for_better_health.pug",
            filename: "smarter_testing_for_better_health/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/the_construction_of_apple_park.pug",
            filename: "the_construction_of_apple_park/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/mapping_social_shopping.pug",
            filename: "mapping_social_shopping/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/modeling_diabetes.pug",
            filename: "modeling_diabetes/index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/pug/projects/the_tic_tac_toe_solution_space.pug",
            filename: "the_tic_tac_toe_solution_space/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        open: true
    }
};