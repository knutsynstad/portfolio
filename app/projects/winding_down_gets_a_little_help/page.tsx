import Image from "@/components/Image";
import ProjectHeader from "@/components/ProjectHeader";

// Assets
import Seagrams_01 from "./assets/Seagrams_01.jpg";
import Seagrams_02 from "./assets/Seagrams_02.jpg";
import Seagrams_03 from "./assets/Seagrams_03.jpg";
import Seagrams_04 from "./assets/Seagrams_04.jpg";
import Seagrams_05 from "./assets/Seagrams_05.jpg";
import Seagrams_06 from "./assets/Seagrams_06.jpg";
import Seagrams_07 from "./assets/Seagrams_07.jpg";
import Seagrams_08 from "./assets/Seagrams_08.jpg";
import Seagrams_09 from "./assets/Seagrams_09.jpg";

const title = "Winding down gets a little help.";
const description = (
  <>
    <p>
      In today&apos;s marketplace, a brand is no longer simply a logo, but
      instead an highly considered and orchestrated set of elements meant to
      reach an audience—not on a visual level—but on an emotional one. My given
      objective was to choose a dead, dying or defunct brand and move beyond
      simply creating an identity system but to reinforce the nuances that
      constitute a holistic branding effort.
    </p>
    <p>
      Few whiskey companies can compare to the history of The Seagram Company.
      Founded in 1857, Seagram&apos;s rose to become the largest distiller of
      whiskey in the world by 1989. It was only after a shift in priority of
      company holdings and a series of management missteps that the brand was
      sent into a downward spiral from which they could no longer recover.
    </p>
    <p>
      Born a whiskey distiller and fell an investment company, Seagram&apos;s
      lost sight of what made them great. Contrary to popular belief,
      Seagram&apos;s wasn&apos;t selling whiskey, but a state of relaxation. By
      expanding the context of relaxation, this project aims to show how
      Seagram&apos;s can interject itself into new and previously overlooked
      segments to reacquire market appeal.
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
        name: "GR.604 Nature of Identity",
      },
    ],
  },
  {
    title: "Professors",
    values: [
      {
        name: "Hunter Wimmer",
      },
    ],
  },
  {
    title: "Categories",
    values: [
      { name: "Branding" },
      { name: "Book Design" },
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
        <Image src={Seagrams_02} alt={title} rounded />
        <Image src={Seagrams_01} alt={title} rounded />
        <Image src={Seagrams_03} alt={title} rounded />
        <Image src={Seagrams_04} alt={title} rounded />
        <Image src={Seagrams_05} alt={title} rounded />
        <div className="flex flex-row gap-8">
          <Image src={Seagrams_06} alt={title} rounded />
          <Image src={Seagrams_07} alt={title} rounded />
        </div>
        <Image src={Seagrams_08} alt={title} rounded />
        <Image src={Seagrams_09} alt={title} rounded />
      </div>
    </main>
  </>
);

export default Project;
