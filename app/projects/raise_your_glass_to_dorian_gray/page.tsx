import ProjectDetailsPage from "@/layouts/ProjectDetailsPage";
import Image from "@/components/Image";

// Assets
import Magnolia_01 from "../../../public/images/Magnolia_01.jpg";
import Magnolia_02 from "../../../public/images/Magnolia_02.jpg";
import Magnolia_03 from "../../../public/images/Magnolia_03.jpg";
import Magnolia_04 from "../../../public/images/Magnolia_04.jpg";
import Magnolia_05 from "../../../public/images/Magnolia_05.jpg";

const data = {
  id: "raise_your_glass_to_dorian_gray",
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
  ],
  title: "Raise your glass to Dorian Gray.",
  description: (
    <>
      <p>
        Magnolia, the 15-year-old craft brewery and gastropub in the
        Haight-Ashbury district, is well established in the Bay Area, known for
        their excellent handcrafted ales and gourmet food. Their menu offers
        upscale takes on British pub fare, although the fish and chips are solid
        and straightforward, other pub grub has definitely been fancified.
      </p>
      <p>
        Assuming Magnolia were to enter the retail marketplace, it would be
        necessary to develop a bottle and labeling system; leveraging their
        market position and brand soul to launch a product line as unique as the
        brewery itself. This would include introducing a new lighter beer to
        appeal to a larger audience group. Conceptually, the new product line
        I&apos;ve developed plays on themes from Oscar Wilde&apos;s The Picture
        of Dorian Gray, an homage to their traditional interior, which is
        adorned with gilding, rich textures and an abundance of mirrored
        surfaces, ideal for the “handsoming” of patrons. This new line of ales
        would reflect all the characteristics of “the Magnolia man”: complex,
        refined and undeniably smooth.
      </p>
    </>
  ),
};

const Project = () => (
  <ProjectDetailsPage data={data}>
    <div className="flex flex-col gap-8">
      <Image src={Magnolia_01} alt={data.title} rounded />
      <Image src={Magnolia_02} alt={data.title} rounded />
      <div className="flex flex-row gap-8">
        <Image src={Magnolia_03} alt={data.title} rounded />
        <Image src={Magnolia_04} alt={data.title} rounded />
      </div>
      <Image src={Magnolia_05} alt={data.title} rounded />
    </div>
  </ProjectDetailsPage>
);

export default Project;
