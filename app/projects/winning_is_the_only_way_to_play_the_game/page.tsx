import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";

// Assets
import Elite_Raiders_01 from "./assets/Elite_Raiders_01.jpg";
import Elite_Raiders_02 from "./assets/Elite_Raiders_02.jpg";
import Elite_Raiders_03 from "./assets/Elite_Raiders_03.jpg";
import Elite_Raiders_04 from "./assets/Elite_Raiders_04.jpg";
import Elite_Raiders_05 from "./assets/Elite_Raiders_05.jpg";

const title = "Winning is the only way to play the game.";
const description = (
  <>
    <p>
      The popularity of video games has increased exponentially over the last
      decade and in order to keep players interested, game developers keep
      adding content at a higher level of difficulty to promote competition.
      Massively Multiplayer Online (MMO) games are a relatively recent form of
      gaming that has gained popularity by creating communities around teamwork.
      Often players are encouraged to band together to overcome challenges, they
      would not be able to accomplish on their own.
    </p>
    <p>
      This creates a culture of competition to either be the best, the fastest
      or in some way distinguish themselves from the rest. For some, this even
      means abandoning conventional lifestyles and dedicating their lives to the
      pursuit of gaming supremacy. This book explores this subculture of gamers
      and their willingness to do whatever it takes to achieve their idea of
      success.
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
        name: "GR.601 Type Systems",
      },
    ],
  },
  {
    title: "Categories",
    values: [{ name: "Book Design" }],
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
        <Image src={Elite_Raiders_01} alt={title} className="rounded-2xl" />

        <div className="relative mt-16 mb-16 flex flex-col justify-center">
          <Image
            src={Elite_Raiders_02}
            alt={title}
            className="relative left-[50%] translate-x-[-50%] w-screen rounded-2xl max-w-none"
          />
        </div>

        <div className="flex flex-row gap-8">
          <Image src={Elite_Raiders_03} alt={title} className="rounded-2xl" />
          <Image src={Elite_Raiders_04} alt={title} className="rounded-2xl" />
        </div>
        <Image src={Elite_Raiders_05} alt={title} className="rounded-2xl" />
      </div>
    </main>
  </>
);

export default Project;
