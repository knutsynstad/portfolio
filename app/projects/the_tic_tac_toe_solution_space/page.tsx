import Code from "@/components/Code";
import Image from "next/image";
import Slideshow from "@/components/Slideshow";
import ProjectHeader from "@/components/ProjectHeader";
import { Metadata } from "next";

// Assets
import Exhibit1 from "./assets/Tic_Tac_Toe_Poster_Full_2340w.png";
import Exhibit2 from "./assets/Tic_Tac_Toe_Multiple_2340w.png";
import Exhibit3 from "./assets/Tic_Tac_Toe_Detail_2340w.png";
import Exhibit4 from "./assets/Tic_Tac_Toe_Legend_2340w.png";
import Exhibit5 from "./assets/Tic_Tac_Toe_Website.svg";
import Exhibit6 from "./assets/Tic_Tac_Toe_Website_About.svg";
import Exhibit7 from "./assets/Tic_Tac_Toe_Graph_1.svg";
import Exhibit8 from "./assets/Tic_Tac_Toe_Graph_2.svg";
import Exhibit9 from "./assets/Tic_Tac_Toe_Graph_3.svg";

const title = "The tic-tac-toe solution space.";
const description = (
  <>
    <p>
      In this visualization, we examine what Herbert Simon might call the
      &#8220;solution space&#8221; for tic-tac-toe, a compound visualization of
      all its solutions&mdash;every legal game move and the connections between
      them&mdash;in a single artifact.
    </p>
    <p>
      How large is the solution space? Well, for the first move, there are 9
      cells available. For the second, there are 8, and so on. Follow to
      completion, and we get{" "}
      <Code>
        9&times;8&times;7&times;6&times;5&times;4&times;3&times;2&times;1
      </Code>{" "}
      or <Code>9!</Code> boards for the final level. For each level{" "}
      <Code>n</Code> of gameplay, there are <Code>9!/(9-n)!</Code> boards in
      total. By adding the level totals together, we get an &#8220;upper
      bound&#8221; of 986,410 boards&mdash;far too many to represent
      meaningfully.
    </p>
    <p>
      For the visualization to be meaningful, the number of boards must be
      reduced. We do this by introducing 3 rules; (1) removing duplicate boards
      reduces the count to 6,046, (2) removing illegal moves (play after a win)
      reduces the count to 5,478, and (3) by removing symmetric duplicates
      (rotational and reflectional) we are left with 765 unique boards. This
      poster displays them all in a matrix.
    </p>
  </>
);
const details = [
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
    title: "Direction",
    values: [
      {
        name: "Hugh Dubberly",
        url: "https://www.dubberly.com",
      },
    ],
  },
  {
    title: "Design intern",
    values: [
      {
        name: "Marina Menéndez-Pidal",
        url: "https://marinamp.info",
      },
    ],
  },
  {
    title: "Categories",
    values: [
      {
        name: "Information Design",
      },
      { name: "Computational Design" },
      { name: "Solution Space" },
    ],
  },
  {
    title: "Year",
    values: [
      {
        name: "2019",
      },
    ],
  },
  {
    title: "Links",
    values: [
      { name: "Download poster (PDF)", url: "/files/Tic-Tac-Toe_1901016.pdf" },
      { name: "Launch interactive", url: "http://tictactoe.dubberly.com" },
      {
        name: "Source code",
        url: "https://github.com/knutsynstad/tic-tac-toe",
      },
    ],
  },
];

export const metadata: Metadata = { title: `${title} - Knut Synstad` };

const Project = () => (
  <>
    <ProjectHeader title={title} description={description} details={details} />
    <main className="flex flex-col gap-32">
      <div className="flex flex-col gap-8">
        <h2>27 &times; 38 inch poster</h2>
        <Image
          src={Exhibit1}
          alt={title}
          className="rounded-2xl shadow-lg"
          priority
        />
      </div>

      <Image src={Exhibit2} alt={title} className="rounded-2xl shadow-lg" />

      <div className="flex flex-col gap-8">
        <h2>
          Each board configuration list of boards that precede and succeed it.
        </h2>
        <Image src={Exhibit3} alt={title} className="rounded-2xl shadow-lg" />
      </div>

      <div className="flex flex-col gap-8">
        <h2>
          Excluding rotational and reflectional symmetries to reduce the
          solution space
        </h2>
        <Image src={Exhibit4} alt={title} className="rounded-2xl shadow-lg" />
      </div>

      <div className="flex flex-col gap-8">
        <h2>
          The interactive website places emphasis on the connections between
          boards.
        </h2>
        <Slideshow slides={[{ image: Exhibit5 }, { image: Exhibit6 }]} shadow />
        <Slideshow
          slides={[
            { image: Exhibit7 },
            { image: Exhibit8 },
            { image: Exhibit9 },
          ]}
          shadow
        />
      </div>
    </main>
  </>
);

export default Project;
