import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";

// Caremaps
import Caremaps_Ana from "./assets/Caremaps_Ana.svg";
import Caremaps_Chantal from "./assets/Caremaps_Chantal.svg";
import Caremaps_Fay from "./assets/Caremaps_Fay.svg";
import Caremaps_Gabrielle from "./assets/Caremaps_Gabrielle.svg";
import Caremaps_Hanna from "./assets/Caremaps_Hanna.svg";
import Caremaps_Fernando from "./assets/Caremaps_Fernando.svg";
import Caremaps_Ida from "./assets/Caremaps_Ida.svg";
import Caremaps_Nadine from "./assets/Caremaps_Nadine.svg";
import Caremaps_Odette from "./assets/Caremaps_Odette.svg";
import Caremaps_Nate from "./assets/Caremaps_Nate.svg";
import Caremaps_Sally from "./assets/Caremaps_Sally.svg";
import Caremaps_Tammy from "./assets/Caremaps_Tammy.svg";
import Caremaps_Teddy from "./assets/Caremaps_Teddy.svg";
import Caremaps_Omar from "./assets/Caremaps_Omar.svg";

const maps = [
  [
    Caremaps_Ana,
    "Ana, a woman in her 50s, has cystic fibrosis and mainly takes care of herself. She also cares of her son Albert who suffers from depression.",
  ],
  [
    Caremaps_Chantal,
    "Chantal (50s) has left work to care for her mother Debby (80s) who is in very poor health. A paid home aide provides significant assistance. Chantal's brothers also help.",
  ],
  [
    Caremaps_Fay,
    "Only-child Fay (30s) cares for her mother Josephine (70s) who has been diagnosed with Alzheimer's disease. With no one to help her, she has put her career on hold to provide 24x7 care.",
  ],
  [
    Caremaps_Gabrielle,
    "Gabrielle, a woman in her 60s with health issues of her own, is the primary caregiver for her mother Penny (101) who has Alzheimer's.",
  ],
  [
    Caremaps_Hanna,
    "Hanna (50s) and husband Gaston (50s) care for her brother Harvey (50s), with many major health issues. Gaston also cares for his mother, while managing his own chronic pain and edema. Both also work.",
  ],
  [
    Caremaps_Fernando,
    "Fernando (59) lives with his wife Laura (54). They live next door to his mother Maria (84) who was diagnosed with Alzheimer's disease last year. Fernando is her primary caregiver, but has an extensive support network helping.",
  ],
  [
    Caremaps_Ida,
    "Ida, a woman in her 70s, lives with her husband Ian (70s) who has dementia. She is her husband's primary caregiver, but gets help from her care network.",
  ],
  [
    Caremaps_Nadine,
    "Nadine (50s) lives with her husband Larry and two teen sons Jerry and Karl. Karl has type-1 diabetes and Nadine is his primary caregiver.",
  ],
  [
    Caremaps_Odette,
    "Odette (70s) and her husband Marco (70s) share their home with many other people: their son and son-in-law, and five tenants. Marco has Parkinson's disease and Odette is his primary caregiver, though several others are involved.",
  ],
  [
    Caremaps_Nate,
    "Nate (30s) lives with his wife Patty (30s). Nate has a brain tumor and Patty has MS. They are eachothers primary caregivers.",
  ],
  [
    Caremaps_Sally,
    "Sally (50s), a former lawyer, lives with her son Pablo (22). 3 months into the pregnancy with Pablo, Sally suffered a ruptured amnio, which led to the discovery that Pablo had XYY chromosone disorder. Sally provides full time care for Pablo.",
  ],
  [
    Caremaps_Tammy,
    "Tammy's home includes her husband Rafael, and their two pre-teen children Wanda and Sam. Wanda requires 24x7 direct care; Sam requires constant supervision. Tammy and/or Rafael are actively caring for Wanda and Sam at all times, except when the children are at school.",
  ],
  [
    Caremaps_Teddy,
    "Teddy (40s) lives with his wife and two sons Walter and Van. Van has Aspergers, and his parents function as his primary caregivers.",
  ],
  [
    Caremaps_Omar,
    "Omar (40s) and his separated wife Cindy (40s) share a home with their son Bob (pre-teen). Bob has Aspergers and his parents are his primary caregivers.",
  ],
];

const title = "Mapping family caregiving.";
const description = (
  <>
    <p>
      We rely on healthcare professionals (HCPs) to help us maintain our
      health—typically in hospitals and clinics. Yet many have chronic health
      conditions, which require self-management—and the help of family
      caregivers, working at home around the clock. Centers for Disease Control
      and Prevention (CDC) states that &quot;As of 2012, about half of all
      adults [in the U.S.]—117 million people—had one or more chronic health
      conditions.&quot; Chronic conditions require ongoing support, often from
      family. Experts differ on the number of family caregivers, but a 2013 Pew
      Research study suggested it could be as high as 100 million people (39% of
      the population).
    </p>

    <p>
      In 2015, Robert Wood Johnson Foundation funded a pilot study, Atlas of
      Caregiving, to look at new ways of measuring family caregiving. As part of
      the study, I designed a series of diagrams describing the study&apos;s
      participants and their care ecosystem by showing who cares for whom, how
      often, their relation, and their relative proximity. The design rationale
      was documented, enabling others to extend the set.
    </p>
  </>
);
const metadata = [
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
    title: "Client",
    values: [
      {
        name: "Robert Wood Johnson Foundation",
        url: "https://www.rwjf.org",
      },
    ],
  },
  {
    title: "Project",
    values: [
      {
        name: "Atlas of Caregiving",
      },
    ],
  },
  {
    title: "Categories",
    values: [
      {
        name: "Information Design",
      },
      { name: "Diagram" },
      { name: "Caregiving" },
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
];

const Project = () => (
  <>
    <ProjectHeader
      title={title}
      description={description}
      metadata={metadata}
    />
    <main>
      <div className="flex flex-col gap-32">
        {maps.map(([image, description]) => (
          <div key={description}>
            <h2 className="mb-8">{description}</h2>
            <Image src={image} alt={description} />
          </div>
        ))}
      </div>
    </main>
  </>
);

export default Project;
