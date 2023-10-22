import ProjectHeader from "@/components/ProjectHeader";

const title = "A faux code generator.";
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
const metadata = [
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

const Project = () => (
  <>
    <ProjectHeader
      title={title}
      description={description}
      metadata={metadata}
    />
    <main></main>
  </>
);

export default Project;
