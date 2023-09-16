import ProjectDetailsPage from "@/layouts/ProjectDetailsPage";
import Image from "@/components/Image";

// Assets
import Margin_of_Error_01 from "../../../public/images/Margin_of_Error_01.jpg";
import Margin_of_Error_02 from "../../../public/images/Margin_of_Error_02.jpg";
import Margin_of_Error_03 from "../../../public/images/Margin_of_Error_03.jpg";
import Margin_of_Error_04 from "../../../public/images/Margin_of_Error_04.jpg";
import Margin_of_Error_05 from "../../../public/images/Margin_of_Error_05.jpg";
import Margin_of_Error_06 from "../../../public/images/Margin_of_Error_06.jpg";
import Margin_of_Error_07 from "../../../public/images/Margin_of_Error_07.jpg";
import Margin_of_Error_08 from "../../../public/images/Margin_of_Error_08.jpg";
import Margin_of_Error_09 from "../../../public/images/Margin_of_Error_09.jpg";
import Margin_of_Error_10 from "../../../public/images/Margin_of_Error_10.jpg";

const data = {
  id: "the_truth_is_not_always_black_and_white",
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
          name: "GR.612 Integrated Communications",
        },
      ],
    },
    {
      title: "Professors",
      values: [
        {
          name: "Hunter Wimmer",
        },
        {
          name: "Christopher Morlan",
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
  title: "The truth is rarely black and white.",
  description: (
    <>
      <p>
        Of Errol Morris, Roger Ebert once said, “After twenty years of reviewing
        films, I haven&apos;t found another filmmaker who intrigues me more…
        Morris is like a magician, and as great a filmmaker as Hitchcock or
        Fellini.” With documentaries such as The Fog of War and The Thin Blue
        Line, Morris helped spur a rebirth of non-fiction film, exploring a wide
        range of subjects and politically charged themes, that garnered him both
        wide critical acclaim as well as scrutiny.
      </p>
      <p>
        My objective in creating a film festival around Errol Morris required
        selecting films which share a common thread, while developing a system
        and design language to promote said event. The Margin of Error was an
        examination of truth&apos;s subjective nature and the injustice that
        results from its varying interpretations by the entities within his
        films.
      </p>
    </>
  ),
};

const Project = () => (
  <ProjectDetailsPage data={data}>
    <div className="flex flex-col gap-8">
      <Image src={Margin_of_Error_01} alt={data.title} rounded />
      <div className="flex flex-row gap-8">
        <Image src={Margin_of_Error_02} alt={data.title} rounded />
        <Image src={Margin_of_Error_03} alt={data.title} rounded />
      </div>
      <Image src={Margin_of_Error_04} alt={data.title} rounded />
      <div className="flex flex-row gap-8">
        <Image src={Margin_of_Error_05} alt={data.title} rounded />
        <Image src={Margin_of_Error_06} alt={data.title} rounded />
      </div>
      <Image src={Margin_of_Error_07} alt={data.title} rounded />
      <Image src={Margin_of_Error_08} alt={data.title} rounded />
      <Image src={Margin_of_Error_09} alt={data.title} rounded />
      <Image src={Margin_of_Error_10} alt={data.title} rounded />
    </div>
  </ProjectDetailsPage>
);

export default Project;
