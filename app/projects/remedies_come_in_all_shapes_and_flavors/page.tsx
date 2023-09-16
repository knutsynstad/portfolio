import ProjectDetailsPage from "@/layouts/ProjectDetailsPage";
import Image from "@/components/Image";

// Assets
import Earthnuts1 from "../../../public/images/Earthnuts_1_2340w.png";
import Earthnuts2a from "../../../public/images/Earthnuts_2a_1140w.png";
import Earthnuts2b from "../../../public/images/Earthnuts_2b_1140w.png";
import Earthnuts3a from "../../../public/images/Earthnuts_3a_1140w.png";
import Earthnuts3b from "../../../public/images/Earthnuts_3b_1140w.png";
import Earthnuts4 from "../../../public/images/Earthnuts_4_2340w.png";
import Earthnuts5 from "../../../public/images/Earthnuts_5_2340w.png";
import Earthnuts6 from "../../../public/images/Earthnuts_6_2340w.png";

const data = {
  id: "remedies_come_in_all_shapes_and_flavors",
  metadata: [
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
  ],
  title: "Remedies come in all shapes and flavors.",
  description: (
    <>
      <p>
        Delicatessens in San Francisco are a dime a dozen. Unfortunately, most
        don&apos;t have the budget to obtain design services that would help
        separate them from the crowd and speak to the quality of their
        establishment. My objective was to select an existing local company that
        could benefit from stronger design, in an effort to strengthen their
        brand equity and create a niche market.
      </p>
      <p>
        After a fair amount of research, I learned of a neighborhood deli in the
        Lower Haight with an amazing story. Staples of their community for over
        22 years, Jack and Margaret Chang have had numerous articles published
        about their discovery of a miraculous concoction rooted in peanut milk.
        Nutritious, yet easy on the body many have claimed it has helped them
        deal with, and overcome, a wide array of diseases. The wall in their
        little deli, full of customer testimonials, is proof to how well it has
        been received. It was this rich history and commitment to their
        customers that made for a great starting point for brand development. In
        a city where the bar is set high for food standards and healthful
        ingredients, it made sense that the Earthnuts&apos; brand would revolve
        around their specialty product that has received so much attention.
      </p>
    </>
  ),
};

const Project = () => (
  <ProjectDetailsPage data={data}>
    <div className="flex flex-col gap-8">
      <Image src={Earthnuts5} alt={data.title} rounded />

      <Image src={Earthnuts1} alt={data.title} rounded />
      <div className="flex flex-row gap-8">
        <Image src={Earthnuts2a} alt={data.title} rounded />
        <Image src={Earthnuts2b} alt={data.title} rounded />
      </div>
      <div className="flex flex-row gap-8">
        <Image src={Earthnuts3a} alt={data.title} rounded />
        <Image src={Earthnuts3b} alt={data.title} rounded />
      </div>
      <Image src={Earthnuts4} alt={data.title} rounded />
    </div>
  </ProjectDetailsPage>
);

export default Project;
