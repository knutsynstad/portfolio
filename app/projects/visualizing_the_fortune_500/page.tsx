import ProjectHeader from "@/components/ProjectHeader";
import Slideshow from "@/components/Slideshow";
import { Metadata } from "next";
import Image from "next/image";

import LogosLapEnd from "./assets/logos_lap_end.png";

// Introduction
import Introduction from "./assets/Fortune_500_Introduction_2340w.png";
import IntroductionLoaded from "./assets/Fortune_500_Introduction_Loaded_2340w.png";
import IntroductionAccordion from "./assets/Fortune_500_Introduction_Accordion_2340w.png";
import IntroductionOpenAccordionAbove from "./assets/Fortune_500_Introduction_Open_Accordion_Above_2340w.png";
import IntroductionOpenAccordionBelow from "./assets/Fortune_500_Introduction_Open_Accordion_Below_2340w.png";
import IntroductionScrolledToBottom from "./assets/Fortune_500_Introduction_Scrolled_to_Bottom_2340w.png";

// Visualization
import Visualization from "./assets/Fortune_500_Visualization_2340w.png";
import Instruction from "./assets/Fortune_500_Instruction_2340w.png";
import VisualizationLoading from "./assets/Fortune_500_Visualization_Loading_2340w.png";
import VisualizationHoverstates from "./assets/Fortune_500_Visualization_Hoverstates_2340w.png";

// Controls
import FortuneConfiguration from "./assets/Fortune_500_Visualization_Configuration_2340w.png";
import VisualizationMoreMenu from "./assets/Fortune_500_Visualization_More_Menu_2340w.png";
import VisualizationShareMenu from "./assets/Fortune_500_Visualization_Share_Menu_2340w.png";
import About from "./assets/Fortune_500_About_2340w.png";
import AboutHover from "./assets/Fortune_500_About_Hover_2340w.png";

// Application Map
import ApplicationMapLeft from "./assets/Fortune_500_Application_Map_Left_2340w.png";
import ApplicationMapRight from "./assets/Fortune_500_Application_Map_Right_2340w.png";

const title = "Visualizing the Fortune 500 by similarity.";
const description = (
  <>
    <p>
      I am especially interested in the intersection of A.I. and design. In this
      experiment, I use A.I. techniques to organize and visualize the logos of
      the Fortune 500 companies, by visual similarity. A task that would be both
      time-consuming and difficult for a human takes the computer mere moments.
      The outcome is a <i>live</i> visualization, where calculations are done in
      the browser, enabling the viewer to change the parameters of the
      underlying algorithms—altering the outcome.
    </p>
    <p>
      Thank you to everyone who helped me with this project. Special thanks to{" "}
      <a href="https://fortune.com/">Fortune Magazine</a>,{" "}
      <a href="http://rkeisler.github.io/">Ryan Keisler</a>,{" "}
      <a href="https://www.dubberly.com/">Hugh Dubberly</a>, Cody Wackerman,{" "}
      <a href="https://www.monicadawnmiller.com/">Monica Miller</a>, and{" "}
      <a href="https://www.dubberly.com/">DDO</a>.
    </p>
  </>
);
const details = [
  {
    title: "Categories",
    values: [
      { name: "Computational Design" },
      { name: "Information Design" },
      { name: "Neural Network" },
      { name: "Machine Learning" },
      { name: "t-SNE" },
    ],
  },
  {
    title: "Year",
    values: [
      {
        name: "2018",
      },
    ],
  },
  {
    title: "Links",
    values: [
      {
        name: "Live visualization",
        url: "http://fortune500.knutsynstad.com",
      },
      {
        name: "Source code",
        url: "https://github.com/knutsynstad/fortune500",
      },
    ],
  },
];

export const metadata: Metadata = { title: `${title} - Knut Synstad` };

const Project = () => (
  <>
    <ProjectHeader title={title} description={description} details={details} />
    <main className="flex flex-col gap-32">
      <figure className="flex flex-col">
        <video
          autoPlay
          loop
          muted
          className="relative left-[50%] translate-x-[-50%] w-screen rounded-2xl max-w-[1280px]"
        >
          <source src="/videos/logos_tsne_600_steps.webm" type="video/webm" />
          <source src="/videos/logos_tsne_600_steps.mp4" type="video/mp4" />
          <p>Your browser doesn&apos;t support HTML video.</p>
        </video>
        <figcaption className="grid grid-cols-12">
          <h3 className="col-span-7">&uarr; Fig. 1: A solution develops</h3>
          <p className="col-span-7">
            A timelapse of 600 t-SNE iterations. The solution generally improves
            with each iteration. Subject to diminishing returns.
          </p>
        </figcaption>
      </figure>

      <figure className="flex flex-col gap-8">
        <video
          autoPlay
          loop
          muted
          className="relative left-[50%] translate-x-[-50%] w-screen rounded-2xl max-w-[1280px]"
        >
          <source src="/videos/logos_tsne_to_lap.webm" type="video/webm" />
          <source src="/videos/logos_tsne_to_lap.mp4" type="video/mp4" />
          <p>Your browser doesn&apos;t support HTML video.</p>
        </video>
        <figcaption className="grid grid-cols-12">
          <h3 className="col-span-7">&uarr; Fig. 2: Align to grid</h3>
          <p className="col-span-7">
            The logos are aligned to a grid. The Linear assignment problem (LAP)
            algorithm is a greedy algorithm, and the solution is not guaranteed
            to be optimal.
          </p>
        </figcaption>
      </figure>

      <figure>
        <Image
          src={LogosLapEnd}
          alt="asdasd"
          className="relative left-[50%] translate-x-[-50%] w-screen rounded-2xl max-w-[1280px]"
        />
        <figcaption className="grid grid-cols-12">
          <h3 className="col-span-7">&uarr; Fig. 3: Final composite</h3>
          <p className="col-span-7">
            Here is one of many possible outcomes. The solution is not
            deterministic, and will vary slightly each time the visualization is
            loaded.
          </p>
        </figcaption>
      </figure>

      <div className="flex flex-col gap-8">
        <h2>An interactive experience</h2>
        <div className="flex flex-col gap-32">
          <Slideshow
            slides={[
              {
                image: Introduction,
                label:
                  "Fig 4: The introduction outlines the process, step by step. Buying some time for the calculations to finish in the background.",
              },
              {
                image: IntroductionAccordion,
                label:
                  "Fig 4: The introduction outlines the process, step by step. Buying some time for the calculations to finish in the background.",
              },
            ]}
            shadow
          />
          <Slideshow
            slides={[
              {
                image: Instruction,
                label:
                  "Fig 5: The visualization is interactive. Users can zoom, pan, and manipulate the solution space.",
              },
              {
                image: Visualization,
                label:
                  "Fig 5: The visualization is interactive. Users can zoom, pan, and manipulate the solution space.",
              },
            ]}
            shadow
          />
          <Slideshow
            slides={[
              {
                image: FortuneConfiguration,
                label:
                  "Fig 6: A live visualizations makes it possible to change the parameters of the underlying algorithms, altering the outcome—highlighting different patterns.",
              },
              {
                image: VisualizationLoading,
                label:
                  "Fig 6: A live visualizations makes it possible to change the parameters of the underlying algorithms, altering the outcome—highlighting different patterns.",
              },
            ]}
            shadow
          />
        </div>
      </div>
    </main>
  </>
);

export default Project;
