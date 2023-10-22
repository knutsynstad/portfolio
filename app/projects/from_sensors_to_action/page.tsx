import Image from "@/components/Image";
import ProjectHeader from "@/components/ProjectHeader";

// Assets
import Sensors1 from "./assets/Sensors_1.svg";
import Sensors2 from "./assets/Sensors_2.svg";
import Sensors3 from "./assets/Sensors_3.svg";
import Sensors4 from "./assets/Sensors_4.svg";
import Sensors5 from "./assets/Sensors_5.svg";
import Sensors6 from "./assets/Sensors_6.svg";

const title = "From sensors to action.";

const description = (
  <>
    <p>
      Descartes Labs, a spinout from the Los Alamos National Laboratory combines
      A.I., satellites, and high-performance computing for some truly impressive
      results. While at the national lab, they pioneered Linux based distributed
      supercomputing and helped ensure there would be no national security
      surprises. Now, they help commercial and government entities alike.
      Descartes Labs specializes in monitoring, analyzing, and predicting
      changes to commodity supply chains, worldwide, in real time—providing
      their customers with the information advantage they need.
    </p>

    <p>
      This model, presented as a build, describes the path from sensors to
      action, outlining the basics of predictive machine learning systems.
    </p>
  </>
);

const metadata = [
  {
    title: "Agency",
    values: [
      {
        name: "Dubberly Design Office",
        url: "https://www.dubberly.com",
      },
    ],
  },
  {
    title: "Direction",
    values: [
      {
        name: "Hugh Dubberly",
        url: "https://www.dubberly.com",
      },
    ],
  },
  {
    title: "Categories",
    values: [
      {
        name: "Information Design",
      },
      { name: "Model" },
      { name: "Machine Learning" },
    ],
  },
];

const slides = [
  [Sensors1, "Sensors make point-in-time observations."],
  [
    Sensors2,
    "Observations may accumulate over time—preserving historical data.",
  ],
  [Sensors3, "Enough historical data enables modeling."],
  [Sensors4, "Modeling predicits future states."],
  [
    Sensors5,
    "More observations lead to more accurate models, and a better understanding of what is to come.",
  ],
  [Sensors6, "Knowing what is coming enables us to act today."],
];

const Project = () => (
  <>
    <ProjectHeader
      title={title}
      description={description}
      metadata={metadata}
    />
    <main>
      <div className="flex flex-col gap-32">
        {slides.map(([src, alt]) => (
          <div key={alt}>
            <h2 className="mb-8">{alt}</h2>
            <Image src={src} alt={alt} rounded />
          </div>
        ))}
      </div>
    </main>
  </>
);

export default Project;
