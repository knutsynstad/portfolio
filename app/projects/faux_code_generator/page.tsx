import ProjectDetailsPage from "@/layouts/ProjectDetailsPage";
import Image from "@/components/Image";

// Assets
import Sensors1 from "../../../public/images/Sensors_1.svg";
import Sensors2 from "../../../public/images/Sensors_2.svg";
import Sensors3 from "../../../public/images/Sensors_3.svg";
import Sensors4 from "../../../public/images/Sensors_4.svg";
import Sensors5 from "../../../public/images/Sensors_5.svg";
import Sensors6 from "../../../public/images/Sensors_6.svg";

const data = {
    id: "from_sensors_to_action",
    metadata: [
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
    ],
    title: "A faux code generator.",
    description: (
        <>
            <p>
                Designers and illustrators sometimes create abstracted
                imitations of code for their technical illustrations and
                designs. This tool enables easy creation of editable SVGs from
                real code and syntax highlights.
            </p>
            <p>Use a random, or provide your own, Github Gist.</p>
        </>
    ),
};

const slides = [
    [Sensors1, "Sensors make point-in-time observations."],
    [
        Sensors2,
        "Observations may accumulate over time—preserving historical data.",
    ],
    [Sensors3, "Enough historical data enables modeling."],
    [Sensors4, "Modeling predicits future states."],
    [
        Sensors5,
        "More observations lead to more accurate models, and a better understanding of what is to come.",
    ],
    [Sensors6, "Knowing what is coming enables us to act today."],
];

const Project = () => (
    <ProjectDetailsPage data={data}>
        <div className="flex flex-col gap-32">
            {slides.map(([src, alt]) => (
                <div key={alt}>
                    <h2 className="mb-8">{alt}</h2>
                    <Image src={src} alt={alt} rounded />
                </div>
            ))}
        </div>
    </ProjectDetailsPage>
);

export default Project;
