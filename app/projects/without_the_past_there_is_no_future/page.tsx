import ProjectDetailsPage from "@/layouts/ProjectDetailsPage";
import Image from "@/components/Image";

// Assets
import Befor_01 from "../../../public/images/Befor_01.jpg";
import Befor_11 from "../../../public/images/Befor_11.jpg";
import Befor_02 from "../../../public/images/Befor_02.jpg";
import Befor_03 from "../../../public/images/Befor_03.jpg";
import Befor_10 from "../../../public/images/Befor_10.jpg";
import Befor_04 from "../../../public/images/Befor_04.jpg";
import Befor_05 from "../../../public/images/Befor_05.jpg";
import Befor_07 from "../../../public/images/Befor_07.jpg";
import Befor_12 from "../../../public/images/Befor_12.jpg";
import Befor_13 from "../../../public/images/Befor_13.jpg";
import Befor_08 from "../../../public/images/Befor_08.jpg";

const data = {
  id: "without_the_past_there_is_no_future",
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
      title: "Classes",
      values: [
        {
          name: "GR.800 Group Directed Study",
        },
        {
          name: "GR.801 Thesis Development",
        },
      ],
    },
    {
      title: "Professors",
      values: [
        {
          name: "Carolina de Bartolo",
        },
        {
          name: "Dave Gottwald",
        },
        {
          name: "Bob Slote",
        },
        {
          name: "Phil Hamlett",
        },
      ],
    },
    {
      title: "Categories",
      values: [
        { name: "Thesis" },
        { name: "Usability" },
        { name: "Interaction" },
        { name: "Visual" },
      ],
    },
  ],
  title: "Without the past, there is no future.",
  description: (
    <>
      <p>
        “Without the past, there is no future.” The origin of this phrase
        remains a mystery, but the message is clear―understanding where we are
        going comes from knowing where we&apos;ve been. Stories of one&apos;s
        family heritage are passed down from generation to generation, but as
        with all storytelling, details are often lost along the way.
      </p>
      <p>
        Technology has changed how we go about discovering our family&apos;s
        history and reconnecting with our past. In fact, in the digital age
        it&apos;s never been easier to organize and document memories. Now, with
        the help of Befør, Norwegian Americans have the unique opportunity to
        tell their family&apos;s story in a medium that can be preserved and
        shared for generations to come.
      </p>
    </>
  ),
};

const Project = () => (
  <ProjectDetailsPage data={data}>
    <div className="flex flex-col gap-8">
      <Image src={Befor_01} alt={data.title} rounded />
      <Image src={Befor_11} alt={data.title} rounded />
      <Image src={Befor_02} alt={data.title} rounded />
      <Image src={Befor_03} alt={data.title} rounded />
      <Image src={Befor_10} alt={data.title} rounded />
      <Image src={Befor_04} alt={data.title} rounded />
      <Image src={Befor_05} alt={data.title} rounded />
      <Image src={Befor_07} alt={data.title} rounded />
      <div className="flex flex-row gap-8">
        <Image src={Befor_12} alt={data.title} rounded />
        <Image src={Befor_13} alt={data.title} rounded />
      </div>
      <Image src={Befor_08} alt={data.title} rounded />
    </div>
  </ProjectDetailsPage>
);

export default Project;
