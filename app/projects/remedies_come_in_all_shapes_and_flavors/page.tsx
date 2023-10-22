import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";

// Assets
import Earthnuts1 from "./assets/Earthnuts_1_2340w.png";
import Earthnuts2a from "./assets/Earthnuts_2a_1140w.png";
import Earthnuts2b from "./assets/Earthnuts_2b_1140w.png";
import Earthnuts3a from "./assets/Earthnuts_3a_1140w.png";
import Earthnuts3b from "./assets/Earthnuts_3b_1140w.png";
import Earthnuts4 from "./assets/Earthnuts_4_2340w.png";
import Earthnuts5 from "./assets/Earthnuts_5_2340w.png";
import Earthnuts6 from "./assets/Earthnuts_6_2340w.png";

const title = "Remedies come in all shapes and flavors.";

const description = (
  <>
    <p>
      Delicatessens in San Francisco are a dime a dozen. Unfortunately, most
      don&apos;t have the budget to obtain design services that would help
      separate them from the crowd and speak to the quality of their
      establishment. My objective was to select an existing local company that
      could benefit from stronger design, in an effort to strengthen their brand
      equity and create a niche market.
    </p>
    <p>
      After a fair amount of research, I learned of a neighborhood deli in the
      Lower Haight with an amazing story. Staples of their community for over 22
      years, Jack and Margaret Chang have had numerous articles published about
      their discovery of a miraculous concoction rooted in peanut milk.
      Nutritious, yet easy on the body many have claimed it has helped them deal
      with, and overcome, a wide array of diseases. The wall in their little
      deli, full of customer testimonials, is proof to how well it has been
      received. It was this rich history and commitment to their customers that
      made for a great starting point for brand development. In a city where the
      bar is set high for food standards and healthful ingredients, it made
      sense that the Earthnuts&apos; brand would revolve around their specialty
      product that has received so much attention.
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
    title: "Professors",
    values: [
      {
        name: "Tom McNulty",
      },
    ],
  },
  {
    title: "Categories",
    values: [
      {
        name: "Packaging design",
      },
      { name: "Branding" },
      { name: "Photography" },
      { name: "Screenprinting" },
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
      <div className="flex flex-col gap-8">
        <Image src={Earthnuts5} alt={title} className="rounded-2xl" />

        <Image src={Earthnuts1} alt={title} className="rounded-2xl" />
        <div className="grid grid-cols-2 gap-8">
          <Image src={Earthnuts2a} alt={title} className="w-full rounded-2xl" />
          <Image src={Earthnuts2b} alt={title} className="w-full rounded-2xl" />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Image src={Earthnuts3a} alt={title} className="w-full rounded-2xl" />
          <Image src={Earthnuts3b} alt={title} className="w-full rounded-2xl" />
        </div>
        <Image src={Earthnuts4} alt={title} className="rounded-2xl" />
      </div>
    </main>
  </>
);

export default Project;
