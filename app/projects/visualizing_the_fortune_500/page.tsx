import Image from "@/components/Image";
import Slideshow from "@/components/Slideshow";
import Slide from "@/components/Slide";
import ButtonGroup from "@/components/ButtonGroup";
import Button from "@/components/Button";
import ProjectHeader from "@/components/ProjectHeader";

import Viz from "../../../public/images/logos_lap_end.png";

// Introduction
import Introduction from "../../../public/images/Fortune_500_Introduction_2340w.png";
import IntroductionLoaded from "../../../public/images/Fortune_500_Introduction_Loaded_2340w.png";
import IntroductionAccordion from "../../../public/images/Fortune_500_Introduction_Accordion_2340w.png";
import IntroductionOpenAccordionAbove from "../../../public/images/Fortune_500_Introduction_Open_Accordion_Above_2340w.png";
import IntroductionOpenAccordionBelow from "../../../public/images/Fortune_500_Introduction_Open_Accordion_Below_2340w.png";
import IntroductionScrolledToBottom from "../../../public/images/Fortune_500_Introduction_Scrolled_to_Bottom_2340w.png";

// Visualization
import Visualization from "../../../public/images/Fortune_500_Visualization_2340w.png";
import Instruction from "../../../public/images/Fortune_500_Instruction_2340w.png";
import VisualizationLoading from "../../../public/images/Fortune_500_Visualization_Loading_2340w.png";
import VisualizationHoverstates from "../../../public/images/Fortune_500_Visualization_Hoverstates_2340w.png";

// Controls
import FortuneConfiguration from "../../../public/images/Fortune_500_Visualization_Configuration_2340w.png";
import VisualizationMoreMenu from "../../../public/images/Fortune_500_Visualization_More_Menu_2340w.png";
import VisualizationShareMenu from "../../../public/images/Fortune_500_Visualization_Share_Menu_2340w.png";
import About from "../../../public/images/Fortune_500_About_2340w.png";
import AboutHover from "../../../public/images/Fortune_500_About_Hover_2340w.png";

// Application Map
import ApplicationMapLeft from "../../../public/images/Fortune_500_Application_Map_Left_2340w.png";
import ApplicationMapRight from "../../../public/images/Fortune_500_Application_Map_Right_2340w.png";

const title = "Visualizing the Fortune 500.";
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
  </>
);
const metadata = [
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

const Project = () => (
  <>
    <ProjectHeader
      title={title}
      description={description}
      metadata={metadata}
    />
    <main>
      <figure>
        <video autoPlay loop muted>
          <source src="/images/logos_tsne_600_steps.webm" type="video/webm" />
          <source src="/images/logos_tsne_600_steps.mp4" type="video/mp4" />
          <p>Your browser doesn&apos;t support HTML video.</p>
        </video>
        <figcaption>
          The timelapse shows 600 t-SNE iterations, each improving the solution.
        </figcaption>
      </figure>

      <figure>
        <video autoPlay loop muted>
          <source src="/images/logos_tsne_to_lap.webm" type="video/webm" />
          <source src="/images/logos_tsne_to_lap.mp4" type="video/mp4" />
          <p>Your browser doesn&apos;t support HTML video.</p>
        </video>
        <figcaption>
          600 t-SNE iterations, each improving the solution.
        </figcaption>
      </figure>

      <h2>The introduction outlines the process, step by step.</h2>
      <Slideshow shadow>
        <Slide>
          <Image src={Introduction} alt={title} />
        </Slide>
        <Slide>
          <Image src={IntroductionAccordion} alt={title} />
        </Slide>
      </Slideshow>

      <h2>Visualization</h2>
      <Slideshow shadow>
        <Slide>
          <Image src={Visualization} alt={title} />
        </Slide>
        <Slide>
          <Image src={Instruction} alt={title} />
        </Slide>
        <Slide>
          <Image src={VisualizationLoading} alt={title} />
        </Slide>
        <Slide>
          <Image src={VisualizationHoverstates} alt={title} />
        </Slide>
      </Slideshow>

      <h2>Controls and more</h2>
      <Slideshow shadow>
        <Slide>
          <Image src={FortuneConfiguration} alt={title} />
        </Slide>
        <Slide>
          <Image src={VisualizationMoreMenu} alt={title} />
        </Slide>
        <Slide>
          <Image src={VisualizationShareMenu} alt={title} />
        </Slide>
        <Slide>
          <Image src={About} alt={title} />
        </Slide>
        <Slide>
          <Image src={AboutHover} alt={title} />
        </Slide>
      </Slideshow>

      <h2>Application map</h2>
      <Slideshow shadow>
        <Slide>
          <Image src={ApplicationMapLeft} alt={title} />
        </Slide>
        <Slide>
          <Image src={ApplicationMapRight} alt={title} />
        </Slide>
      </Slideshow>
    </main>
  </>
);

export default Project;

/*


Youtube experiment

        <div className="inset border-2 border-white select-none pointer-events-none">
        <iframe
            className="w-full aspect-square h-auto"
            width="1024"
            height="1024"
            src="https://www.youtube.com/embed/VnIrCyAV2FA?autoplay=1&loop=1&modestbranding=1&controls=0&mute=1&playlist=VnIrCyAV2FA&disablekb=1&showinfo=0&rel=0&iv_load_policy=3&enablejsapi=1&widgetid=1&start=1&end=10&vq=hd1080"
            frameBorder="0"
            allowFullScreen
        />
        </div>



        <h2>Align to grid</h2>
        <div className="inset border-2 border-white select-none pointer-events-none">
        <iframe
            className="w-full aspect-square h-auto"
            width="1024"
            height="1024"
            src="https://www.youtube.com/embed/xdNMHUdLF7s?autoplay=1&loop=1&modestbranding=1&controls=0&mute=1&playlist=xdNMHUdLF7s&disablekb=1&showinfo=0&rel=0&iv_load_policy=3&enablejsapi=1&widgetid=1&start=1&end=10&vq=hd1080"
            frameBorder="0"
            allowFullScreen
        />
        </div>


*/
