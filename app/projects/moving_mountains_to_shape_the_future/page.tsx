import ProjectHeader from "@/components/ProjectHeader";
import Image from "next/image";
import { Metadata } from "next";

// Assets
import Life1 from "./assets/100_People_01.jpg";
import Life2 from "./assets/100_People_02.jpg";
import Life3 from "./assets/100_People_03.jpg";
import Life4 from "./assets/100_People_04.jpg";
import Life5 from "./assets/100_People_05.jpg";
import Life6 from "./assets/100_People_06.jpg";

const title = "Moving mountains to shape the future.";
const description = (
  <>
    <p>
      When tasked to redesign a book of my choosing, I found it was going to be
      necessary to select a book with strong subject matter, yet suffered from a
      lack of typographical sophistication. This endeavor proved to be more
      challenging than initially thought, as there was no shortage of books
      needing assistance and I was faced with a multitude of possibilities as
      vast as the San Francisco library&apos;s card catalog.
    </p>
    <p>
      Ultimately, I selected a book by Life magazine, which showcased 100 people
      who changed the world through bold and experimental means. It was in this
      same manner that I wanted to convey the powerful history behind these
      remarkable figures and their extraordinary contributions, while still
      honoring the journalistic appeal of the publication&apos;s past.
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
    title: "Class",
    values: [
      {
        name: "GR.619 Type Composition",
      },
    ],
  },
  {
    title: "Professor",
    values: [
      {
        name: "Lian Ng",
      },
    ],
  },
  {
    title: "Categories",
    values: [
      { name: "Typography" },
      { name: "Editorial" },
      { name: "Bookbinding" },
      { name: "Screenprinting" },
    ],
  },
];

export const metadata: Metadata = { title: `${title} - Knut Synstad` };

const Project = () => (
  <>
    <ProjectHeader title={title} description={description} details={details} />
    <main>
      <div className="flex flex-col gap-8">
        <Image src={Life1} alt={title} className="w-full rounded-2xl" />
        <Image src={Life2} alt={title} className="w-full rounded-2xl" />
        <div className="relative mt-16 mb-16 flex flex-col justify-center">
          <Image
            src={Life4}
            alt={title}
            className="relative left-[50%] translate-x-[-50%] w-screen rounded-2xl max-w-none"
          />
        </div>
        <Image src={Life3} alt={title} className="w-full rounded-2xl" />
        <Image src={Life5} alt={title} className="w-full rounded-2xl" />
        <Image src={Life6} alt={title} className="w-full rounded-2xl mt-32" />
      </div>
    </main>
  </>
);

export default Project;
