import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";

// Assets
import Margin_of_Error_01 from "./assets/Margin_of_Error_01.jpg";
import Margin_of_Error_02 from "./assets/Margin_of_Error_02.jpg";
import Margin_of_Error_03 from "./assets/Margin_of_Error_03.jpg";
import Margin_of_Error_04 from "./assets/Margin_of_Error_04.jpg";
import Margin_of_Error_05 from "./assets/Margin_of_Error_05.jpg";
import Margin_of_Error_06 from "./assets/Margin_of_Error_06.jpg";
import Margin_of_Error_07 from "./assets/Margin_of_Error_07.jpg";
import Margin_of_Error_08 from "./assets/Margin_of_Error_08.jpg";
import Margin_of_Error_09 from "./assets/Margin_of_Error_09.jpg";
import Margin_of_Error_10 from "./assets/Margin_of_Error_10.jpg";

const title = "The truth is rarely black and white.";
const description = (
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
      selecting films which share a common thread, while developing a system and
      design language to promote said event. The Margin of Error was an
      examination of truth&apos;s subjective nature and the injustice that
      results from its varying interpretations by the entities within his films.
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
        <Image src={Margin_of_Error_01} alt={title} className="rounded-2xl" />
        <div className="grid grid-cols-2 gap-8">
          <Image
            src={Margin_of_Error_02}
            alt={title}
            className="w-full rounded-2xl"
          />
          <Image
            src={Margin_of_Error_03}
            alt={title}
            className="w-full rounded-2xl"
          />
        </div>
        <Image src={Margin_of_Error_04} alt={title} className="rounded-2xl" />
        <div className="grid grid-cols-2 gap-8">
          <Image
            src={Margin_of_Error_05}
            alt={title}
            className="w-full rounded-2xl"
          />
          <Image
            src={Margin_of_Error_06}
            alt={title}
            className="w-full rounded-2xl"
          />
        </div>

        <div className="relative mt-16 mb-16 flex flex-col justify-center">
          <Image
            src={Margin_of_Error_07}
            alt={title}
            className="relative left-[50%] translate-x-[-50%] w-screen rounded-2xl max-w-none"
          />
        </div>

        <Image src={Margin_of_Error_08} alt={title} className="rounded-2xl" />
        <Image src={Margin_of_Error_09} alt={title} className="rounded-2xl" />
        <Image src={Margin_of_Error_10} alt={title} className="rounded-2xl" />
      </div>
    </main>
  </>
);

export default Project;
