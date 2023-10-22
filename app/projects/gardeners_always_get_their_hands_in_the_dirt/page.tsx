import Image from "@/components/Image";
import ProjectHeader from "@/components/ProjectHeader";

// Assets
import French_Paper_01 from "./assets/French_Paper_01.jpg";
import French_Paper_02 from "./assets/French_Paper_02.jpg";
import French_Paper_03 from "./assets/French_Paper_03.jpg";
import French_Paper_04 from "./assets/French_Paper_04.jpg";
import French_Paper_05 from "./assets/French_Paper_05.jpg";
import French_Paper_06 from "./assets/French_Paper_06.jpg";

const title = "Gardeners always get their hands in the dirt.";
const description = (
  <>
    <p>
      The French Paper Company has been environmentally conscious since the very
      beginning. The hydro-generators, that power every aspect of their daily
      processes, were installed in 1922, long before it was PC or made for good
      PR. French Paper is also a pioneer when it comes to recycled paper and
      offers many environmental paper choices.
    </p>
    <p>
      Tasked with assisting a brand enter a new, viable market segment where
      they are not yet established provided a means for which French Paper could
      hypothetically transition into products that care for the environment as
      much as they do. With a deep-seeded commitment to the environment at its
      core, it&apos;s feasible that French Paper could launching their own line
      of gardening tools. Such a product line could leverage the company&apos;s
      position and expertise in environmentally friendly and sustainable
      manufacturing in order to provide a line of well-designed and high-quality
      tools and accessories.
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
        name: "GR.370 Package Design 3",
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
      { name: "Packaging" },
      { name: "Branding" },
      { name: "Prototyping" },
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
        <Image src={French_Paper_06} alt={title} rounded />

        <div className="flex flex-row gap-8">
          <Image src={French_Paper_01} alt={title} rounded />
          <Image src={French_Paper_02} alt={title} rounded />
        </div>
        <Image src={French_Paper_03} alt={title} rounded />
        <div className="flex flex-row gap-8">
          <Image src={French_Paper_04} alt={title} rounded />
          <Image src={French_Paper_05} alt={title} rounded />
        </div>
      </div>
    </main>
  </>
);

export default Project;
