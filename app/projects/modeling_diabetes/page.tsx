import ProjectHeader from "@/components/ProjectHeader";
import Image from "next/image";
import { Metadata } from "next";

// Assets
import Diabetes_Open_Loop_Process from "./assets/Diabetes_Open_Loop_Process.svg";
import Diabetes_Closed_Loop_Process from "./assets/Diabetes_Closed_Loop_Process.svg";
import Diabetes_Mechanical_Thermostat from "./assets/Diabetes_Mechanical_Thermostat.svg";
import Diabetes_Healthy_Person from "./assets/Diabetes_Healthy_Person.svg";
import Diabetes_Manual_Injections from "./assets/Diabetes_Manual_Injections.svg";
import Diabetes_Artificial_Pancreas from "./assets/Diabetes_Artificial_Pancreas.svg";
import Diabetes_Physiological_Feedback_Loop from "./assets/Diabetes_Physiological_Feedback_Loop.svg";
import Diabetes_Augmented_Data from "./assets/Diabetes_Augmented_Data.svg";
import Diabetes_Interacting_Feedback_Loops from "./assets/Diabetes_Interacting_Feedback_Loops.svg";

const title = "Modeling diabetes.";
const description = (
  <>
    <p>
      Our body continuously strives to achieve homeostasis. It does so through a
      number of interlocked biological feedback loops, such as the endocrine
      system—a collection of glands that produce hormones that regulate
      metabolism, growth and development, tissue function, sexual function,
      reproduction, sleep, and mood, among other things.
    </p>
    <p>
      The pancreas, an organ of the endocrine system is integral to our control
      of blood glucose. Diabetes limits its ability to do so. Our various means
      of blood glucose control can be modeled as a first order control system or
      feedback loop. p The following is a compendium of models on diabetes.
    </p>
  </>
);
const details = [
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
        name: "Cybernetics",
      },
      { name: "Control Systems" },
      { name: "Feedback" },
      { name: "Modeling" },
    ],
  },
];

const slides = [
  [Diabetes_Open_Loop_Process, "Open loop process"],
  [Diabetes_Closed_Loop_Process, "Closed loop process (control system)"],
  [
    Diabetes_Mechanical_Thermostat,
    `An example:
    mechanical thermostat`,
  ],
  [Diabetes_Healthy_Person, "Healthy person"],
  [Diabetes_Manual_Injections, "Person with diabetes making manual injections"],
  [
    Diabetes_Artificial_Pancreas,
    "Person with diabetes and an artificial pancreas",
  ],
  [
    Diabetes_Physiological_Feedback_Loop,
    "Physiological feedback loop (with artificial control system)",
  ],
  [
    Diabetes_Augmented_Data,
    "Physiological feedback loop augmented by behavioral and environmental data",
  ],
  [
    Diabetes_Interacting_Feedback_Loops,
    "Feedback loops are not isolated and naturally interact; emerging systems promise to address this complexity.",
  ],
];

export const metadata: Metadata = { title: `${title} - Knut Synstad` };

const Project = () => (
  <>
    <ProjectHeader title={title} description={description} details={details} />
    <main>
      <div className="flex flex-col gap-32">
        {slides.map(([src, alt]) => (
          <div key={alt}>
            <h2 className="mb-8">{alt}</h2>
            <Image src={src} alt={alt} className="rounded-2xl" />
          </div>
        ))}
      </div>
    </main>
  </>
);

export default Project;
