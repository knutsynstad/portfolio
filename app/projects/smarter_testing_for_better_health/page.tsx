import Image from "@/components/Image";
import Slideshow from "@/components/Slideshow";
import ProjectHeader from "@/components/ProjectHeader";

// Assets
import AST_Identity_Color from "../../../public/images/AST_Identity_Color.svg";
import AST_Identity_Blue from "../../../public/images/AST_Identity_Blue.svg";
import AST_Identity_Black from "../../../public/images/AST_Identity_Black.svg";
import AST_Stationery from "../../../public/images/AST_Stationery.svg";

const title = "Smarter testing for better health.";
const description = (
  <>
    <p>
      Adaptive Sensory Technology (AST), a spinout from Harvard Medical School,
      is developing advanced, quantitative tools for detecting changes in
      functional vision. Their research began over a decade earlier as a lab
      project in basic vision science to improve how vision changes are detected
      in research experiments. AST&apos;s Quick Contrast Sensitivity Function
      (qCSF) method brings a new level of precision to vision assessment and has
      been applied to measure contrast sensitivity deficits in low vision,
      age-related macular degeneration, retinitis pigmentosa, glaucoma, multiple
      sclerosis, amblyopia, congenital and adult cataract, and Fabry&apos;s
      disease.
    </p>
    <p>
      Their identity revolves around the geometric circle, suggesting both an
      eye and precision. The inherent adaptive nature of their technology is
      manifested in a dynamic identity that, like their technology, continuously
      evolves and is unique every time.
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
    title: "Client",
    values: [
      {
        name: "Adaptive Sensory Technology",
        url: "https://www.adaptivesensorytechnology.com",
      },
    ],
  },
  {
    title: "Direction",
    values: [
      {
        name: "Robin Bahr",
      },
    ],
  },
  {
    title: "Categories",
    values: [
      {
        name: "Identity",
      },
      { name: "Stationery" },
      { name: "Website" },
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
      <Slideshow
        slides={[
          { image: AST_Identity_Color },
          { image: AST_Identity_Blue },
          { image: AST_Identity_Black },
        ]}
        shadow
      />

      <Image src={AST_Stationery} alt={title} rounded />
    </main>
  </>
);

export default Project;
