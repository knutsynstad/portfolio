import Image from "@/components/Image";
import ProjectHeader from "@/components/ProjectHeader";

// Assets
import SweetTooth from "../../../public/images/sweet_tooth_2340w.png";
import PipeSchematic from "../../../public/images/pipe_schematic.svg";
import Pipe from "../../../public/images/pipe_2340w.png";

const title = "Looking beyond the walls.";

const description = (
  <>
    <p>
      The following posters are experiments in typography using unexpected
      objects to form letter shapes. The first poster of this series is part of
      an architectural conference focusing on transparency, both the transparent
      nature of information that is presented to us as well as the literal sense
      of the word. This idea came from the offices of Facebook where most of
      their employees sit in spacious bullpens lacking dividers or walls,
      designed to evoke the company&apos;s ethos of openness. By exposing
      fixtures that are typically hidden, even their infrastructure speaks to
      their desire to be conspicuous in all matters.
    </p>
    <p>
      The second two posters were an investigation in typographical
      expressiveness pushed between legibility and abstraction. I was asked to
      pick two short meaningful phrases and illustrate them with type created
      from everyday objects. Careful consideration of the medium as well as the
      shapes of the letters were integral to the legibility and conveying the
      message to the audience.
    </p>
  </>
);

const metadata = [
  {
    title: "University",
    values: [
      {
        name: "Academy of Art University",
      },
    ],
  },
  {
    title: "Class",
    values: [
      {
        name: "GR.613 Type Experiments",
      },
    ],
  },
  {
    title: "Professors",
    values: [
      {
        name: "Kathrin Blatter",
      },
    ],
  },
  {
    title: "Categories",
    values: [{ name: "Exploration" }, { name: "Photography" }],
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
      <div className="flex flex-col gap-8">
        <Image src={SweetTooth} alt={title} rounded />
        <Image src={PipeSchematic} alt={title} rounded />
        <Image src={Pipe} alt={title} rounded />
      </div>
    </main>
  </>
);

export default Project;
