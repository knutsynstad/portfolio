import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";
import { Metadata } from "next";

// Assets
import Befor_01 from "./assets/Befor_01.jpg";
import Befor_11 from "./assets/Befor_11.jpg";
import Befor_02 from "./assets/Befor_02.jpg";
import Befor_03 from "./assets/Befor_03.jpg";
import Befor_10 from "./assets/Befor_10.jpg";
import Befor_04 from "./assets/Befor_04.jpg";
import Befor_05 from "./assets/Befor_05.jpg";
import Befor_07 from "./assets/Befor_07.jpg";
import Befor_12 from "./assets/Befor_12.jpg";
import Befor_13 from "./assets/Befor_13.jpg";
import Befor_08 from "./assets/Befor_08.jpg";

const title = "Without the past, there is no future.";
const description = (
  <>
    <p>
      “Without the past, there is no future.” The origin of this phrase remains
      a mystery, but the message is clear―understanding where we are going comes
      from knowing where we&apos;ve been. Stories of one&apos;s family heritage
      are passed down from generation to generation, but as with all
      storytelling, details are often lost along the way.
    </p>
    <p>
      Technology has changed how we go about discovering our family&apos;s
      history and reconnecting with our past. In fact, in the digital age
      it&apos;s never been easier to organize and document memories. Now, with
      the help of Befør, Norwegian Americans have the unique opportunity to tell
      their family&apos;s story in a medium that can be preserved and shared for
      generations to come.
    </p>
  </>
);
const details = [
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
];

export const metadata: Metadata = { title: `${title} - Knut Synstad` };

const Project = () => (
  <>
    <ProjectHeader title={title} description={description} details={details} />
    <main>
      <div className="flex flex-col gap-8">
        <Image src={Befor_01} alt={title} className="rounded-2xl" />
        <Image src={Befor_11} alt={title} className="rounded-2xl" />

        <div className="relative mt-16 mb-16 flex flex-col justify-center">
          <Image
            src={Befor_02}
            alt={title}
            className="relative left-[50%] translate-x-[-50%] w-screen rounded-2xl max-w-none"
          />
        </div>

        <Image src={Befor_03} alt={title} className="rounded-2xl" />
        <Image src={Befor_10} alt={title} className="rounded-2xl" />
        <Image src={Befor_04} alt={title} className="rounded-2xl" />
        <Image src={Befor_05} alt={title} className="rounded-2xl" />
        <Image src={Befor_07} alt={title} className="rounded-2xl" />
        <div className="flex flex-row gap-8">
          <Image src={Befor_12} alt={title} className="rounded-2xl" />
          <Image src={Befor_13} alt={title} className="rounded-2xl" />
        </div>
        <Image src={Befor_08} alt={title} className="rounded-2xl" />
      </div>
    </main>
  </>
);

export default Project;
