import ProjectHeader from "@/components/ProjectHeader";
import Image from "next/image";
import { Metadata } from "next";

// Assets
import Icons_Core from "./assets/Icons_Core.svg";
import Icons_Buildings from "./assets/Icons_Buildings.svg";
import Icons_Transport_Travel from "./assets/Icons_Transport_Travel.svg";
import Icons_Closed_Loop_Insulin_Delivery2 from "./assets/Icons_Closed_Loop_Insulin_Delivery2.svg";
import Icons_Tech_Science from "./assets/Icons_Tech_Science.svg";
import Icons_Data_Science from "./assets/Icons_Data_Science.svg";
import Icons_Healthcare from "./assets/Icons_Healthcare.svg";
import Icons_Article_Publishing2 from "./assets/Icons_Article_Publishing2.svg";
import Icons_Food_Drink from "./assets/Icons_Food_Drink.svg";
import Icons_Audio_Video from "./assets/Icons_Audio_Video.svg";
import Icons_Household from "./assets/Icons_Household.svg";
import Icons_Animals_Pets from "./assets/Icons_Animals_Pets.svg";
import Icons_Reseller_Venue_Relationship2 from "./assets/Icons_Reseller_Venue_Relationship2.svg";
import Icons_Office_Supplies from "./assets/Icons_Office_Supplies.svg";
import Icons_Time_Date from "./assets/Icons_Time_Date.svg";
import Icons_Feedback_Loop2 from "./assets/Icons_Feedback_Loop2.svg";
import Icons_Finance from "./assets/Icons_Finance.svg";
import Icons_Communication from "./assets/Icons_Communication.svg";
import Icons_Electronics from "./assets/Icons_Electronics.svg";
import Icons_People from "./assets/Icons_People.svg";

const title = "A pictogram is worth a thousand words.";
const description = (
  <>
    <p>
      Most of us are familiar with the notion that a complex idea may be
      communicated through an image, or that an image of an object captures its
      meaning or essence better than a description could. Iconography is a
      natural extension of this notion. Space efficient and inherently
      multilingual, it lends itself to a range of communication tasks—from
      wayfinding on public transit to digital interfaces.
    </p>

    <p>
      The following line icons have a uniform size and were drawn with a single
      stroke weight, round caps, and corners, on a padded 8 by 8 grid. Use of
      color is limited to a solid color and a derivative tint as needed.
    </p>
  </>
);
const details = [
  {
    title: "Categories",
    values: [
      {
        name: "Iconography",
      },
    ],
  },
];

const slides = [
  { image: Icons_Core, label: "Core", shadow: true },
  { image: Icons_Buildings, label: "Buildings", shadow: true },
  {
    image: Icons_Transport_Travel,
    label: "Transportation & travel",
    shadow: true,
  },
  {
    image: Icons_Closed_Loop_Insulin_Delivery2,
    label: "Closed loop insulin delivery",
    shadow: false,
  },
  { image: Icons_Tech_Science, label: "Technology & science", shadow: true },
  {
    image: Icons_Data_Science,
    label: "A.I., data & data science",
    shadow: true,
  },
  { image: Icons_Healthcare, label: "Healthcare", shadow: true },
  {
    image: Icons_Article_Publishing2,
    label: "Scientific article publishing process",
    shadow: false,
  },
  { image: Icons_Food_Drink, label: "Food & drink", shadow: true },
  { image: Icons_Audio_Video, label: "Audio & video", shadow: true },
  { image: Icons_Household, label: "Household", shadow: true },
  { image: Icons_Animals_Pets, label: "Animals & pets", shadow: true },
  {
    image: Icons_Reseller_Venue_Relationship2,
    label: "Reseller & venue relationship",
    shadow: false,
  },
  { image: Icons_People, label: "People", shadow: true },
  { image: Icons_Office_Supplies, label: "Office supplies", shadow: true },
  { image: Icons_Time_Date, label: "Time & date", shadow: true },
  { image: Icons_Feedback_Loop2, label: "Feedback loop", shadow: false },
  { image: Icons_Finance, label: "Finance", shadow: true },
  { image: Icons_Communication, label: "Communication", shadow: true },
  { image: Icons_Electronics, label: "Electronics", shadow: true },
];

export const metadata: Metadata = { title: `${title} - Knut Synstad` };

export default function Project() {
  return (
    <>
      <ProjectHeader
        title={title}
        description={description}
        details={details}
      />
      <main>
        <div className="flex flex-col gap-32">
          {slides.map(({ image, label, shadow }, index) => (
            <div key={`${label}+${index}`}>
              {shadow && <h2 className="mb-8">{label}</h2>}
              <Image
                src={image}
                alt={label}
                className={`rounded-2xl ${shadow ? "shadow-lg" : ""}`}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
