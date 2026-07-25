import ProjectHeader from "@/components/ProjectHeader";
import { projectMetadata } from "@/lib/metadata";
import { getProject } from "@/projects/registry";
import Image from "next/image";

import Screenshot from "./assets/Screenshot.png";

const title = "Faux code generator.";
const description = (
  <>
    <p>
      Designers and illustrators sometimes create abstracted imitations of code
      for their technical illustrations and designs. This tool enables easy
      creation of editable SVGs from real code and syntax highlights.
    </p>
    <p>Use a random, or provide your own, Github Gist.</p>
  </>
);
const details = [
  {
    title: "Category",
    values: [{ name: "Tool" }],
  },
  {
    title: "Featured in",
    values: [
      {
        name: "Product Hunt",
        url: "https://www.producthunt.com/posts/faux-code-generator",
      },
      {
        name: "CSS-Tricks",
        url: "https://css-tricks.com/fake-code/",
      },
    ],
  },
  {
    title: "Links",
    values: [
      {
        name: "Faux Code Generator",
        url: "http://knutsynstad.com/fauxcode/",
      },
      {
        name: "Repository",
        url: "https://github.com/knutsynstad/faux-code-generator",
      },
    ],
  },
  {
    title: "Year",
    values: [{ name: "2020" }],
  },
];

const project = getProject("faux-code-generator");
export const metadata = projectMetadata(title, project?.metaDescription ?? "");

export default function Project() {
  return (
    <>
      <ProjectHeader
        title={title}
        description={description}
        details={details}
      />
      <main>
        <Image
          src={Screenshot}
          alt="Screenshot of the faux code generator"
          className="rounded-2xl"
        />
      </main>
    </>
  );
}
