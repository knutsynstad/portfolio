import ProjectHeader from "@/components/ProjectHeader";
import { Metadata } from "next";

const title = "Devvit Play.";
const description = (
  <>
    <p>
      A lightweight environment for rapid experimentation on custom posts. Each
      playground provides an interactive code editor and a live preview.
    </p>
  </>
);
const details = [
  {
    title: "Company",
    values: [{ name: "Reddit", url: "https://reddit.com" }],
  },
  {
    title: "Category",
    values: [{ name: "Tooling" }, { name: "Open Source" }],
  },
  {
    title: "Role",
    values: [{ name: "Owner" }, { name: "Design Lead" }, { name: "Developer" }],
  },
  {
    title: "Collaborator",
    values: [
      {
        name: "Stephen Niedzielski",
        url: "https://niedzielski.com/",
      },
    ],
  },
  {
    title: "Links",
    values: [
      {
        name: "Devvit Play",
        url: "https://developers.reddit.com/play",
      },
      {
        name: "Source Code",
        url: "https://github.com/knutsynstad/faux-code-generator",
      },
    ],
  },
  {
    title: "Year",
    values: [{ name: "2023" }],
  },
];

export const metadata: Metadata = { title: `${title} - Knut Synstad` };

const Project = () => (
  <>
    <ProjectHeader title={title} description={description} details={details} />
    <main></main>
  </>
);

export default Project;
