import ProjectHeader from "@/components/ProjectHeader";
import Image from "next/image";

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
const metadata = [
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
  [Icons_Core, "Core"],
  [Icons_Buildings, "Buildings"],
  [Icons_Transport_Travel, "Transportation & travel"],
  [Icons_Closed_Loop_Insulin_Delivery2],
  [Icons_Tech_Science, "Technology & science"],
  [Icons_Data_Science, "A.I., data & data science"],
  [Icons_Healthcare, "Healthcare"],
  [Icons_Article_Publishing2],
  [Icons_Food_Drink, "Food & drink"],
  [Icons_Audio_Video, "Audio & video"],
  [Icons_Household, "Household"],
  [Icons_Animals_Pets, "Animals & pets"],
  [Icons_Reseller_Venue_Relationship2],
  [Icons_People, "People"],
  [Icons_Office_Supplies, "Office supplies"],
  [Icons_Time_Date, "Time & date"],
  [Icons_Feedback_Loop2],
  [Icons_Finance, "Finance"],
  [Icons_Communication, "Communication"],
  [Icons_Electronics, "Electronics"],
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
        {slides.map(([src, alt], index) => (
          <div key={`${alt}+${index}`}>
            {alt && <h2 className="mb-8">{alt}</h2>}
            <Image
              src={src}
              alt={alt}
              className={`rounded-2xl ${alt ? "shadow-lg" : "false"}`}
            />
          </div>
        ))}
      </div>
    </main>
  </>
);

export default Project;
