import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";

import Birdhouse1 from "./assets/Birdhouse_01.jpg";
import Birdhouse2 from "./assets/Birdhouse_02.jpg";
import Birdhouse3 from "./assets/Birdhouse_03.jpg";
import BirdhouseCloseup from "./assets/Birdhouse_Closeup_1170w.png";
import Birdhouse4 from "./assets/Birdhouse_04.jpg";
import Birdhouse5 from "./assets/Birdhouse_05.jpg";

const title = "Mr. Potato Head is for the birds.";

const description = (
  <>
    <p>
      In 1943, Ingvar Kamprad started a company specializing in mail order
      delivery that boasted a catalog which included matches, fish, decorations,
      seeds, ballpoint pens and pencils. Within five year, he began to
      incorporate furniture into his product portfolio. Business soon flourished
      and in 1953, the first IKEA furniture store opened its doors in Älmhult,
      Småland, Sweden. The rest is history. The company that popularized modern
      Scandinavian design with low-cost, ready-to-assemble furniture continues
      to grow steadily and now operates 338 stores in 40 countries.
    </p>
    <p>
      One of IKEA&apos;s greatest successes comes out its children&apos;s line,
      which encourages play, learning, imagination and discovery. That&apos;s
      because IKEA has worked with the world&apos;s leading child experts (and
      children themselves) to design smart products that are both fun and
      contribute to overall development.
    </p>
    <p>
      With this philosophy in mind, I set out to create a toy that would be a
      natural extensions of their current children&apos;s offerings. The result
      was a line of birdhouses (that are literally birds!) with interchangeable
      parts, allowing children to mix-and-match facial expressions and
      accessories to create their very own companion.
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
        name: "GR.322 Package Design 2",
      },
    ],
  },
  {
    title: "Professor",
    values: [
      {
        name: "Tom McNulty",
      },
    ],
  },
  {
    title: "Categories",
    values: [{ name: "Packaging design" }, { name: "Woodworking" }],
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
        <Image
          src={BirdhouseCloseup}
          alt={title}
          className="w-full rounded-2xl"
        />
        <Image src={Birdhouse4} alt={title} className="w-full rounded-2xl" />
        <Image src={Birdhouse5} alt={title} className="w-full rounded-2xl" />
        <div className="relative mt-32 mb-32 flex flex-col justify-center overflow-visible z-[-1]">
          <Image
            src={Birdhouse2}
            alt={title}
            className="relative left-[50%] translate-x-[-50%] w-[90vw] rounded-2xl max-w-none"
          />
        </div>
        <Image src={Birdhouse1} alt={title} className="w-full rounded-2xl" />
        <Image src={Birdhouse3} alt={title} className="w-full rounded-2xl" />
      </div>
    </main>
  </>
);

export default Project;
