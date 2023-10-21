import Image from "@/components/Image";
import Row from "@/components/Row";
import ProjectHeader from "@/components/ProjectHeader";

// Avatar Showcase
import Box1 from "../../../public/images/Box1.png";
import Box2 from "../../../public/images/Box2.png";
import Box3 from "../../../public/images/Box3.png";
import Box4 from "../../../public/images/Box4.png";
import Box5 from "../../../public/images/Box5.png";
import Box6 from "../../../public/images/Box6.png";
import Box7 from "../../../public/images/Box7.png";
import Box8 from "../../../public/images/Box8.png";
import Box9 from "../../../public/images/Box9.png";
import Box10 from "../../../public/images/Box10.png";
import Box11 from "../../../public/images/Box11.png";
import Box12 from "../../../public/images/Box12.png";
import Box13 from "../../../public/images/Box13.png";
import Box14 from "../../../public/images/Box14.png";
import Box15 from "../../../public/images/Box15.png";
import Box16 from "../../../public/images/Box16.png";
import Box17 from "../../../public/images/Box17.png";
import Box18 from "../../../public/images/Box18.png";

// Screens
import Me1 from "../../../public/images/Me1.png";
import Me2 from "../../../public/images/Me2.png";
import Me3 from "../../../public/images/Me3.png";
import Style1 from "../../../public/images/Style1.png";
import Style2 from "../../../public/images/Style2.png";
import Style3 from "../../../public/images/Style3.png";
import Explore0 from "../../../public/images/Explore0.png";
import Explore1 from "../../../public/images/Explore1.png";
import Explore2 from "../../../public/images/Explore2.png";
import Explore3 from "../../../public/images/Explore3.png";

const title = "The Reddit Avatar Builder.";

const description = (
  <>
    <p>
      Reddit avatars is a vehicle for personal expression. It&apos;s your canvas
      to do with as you please.
    </p>
    <p>
      The Avatar Builder is a system that allows users to create a unique avatar
      that represents them across the Reddit platform. The system is extensible
      and scalable, allowing for the addition of new features and assets over
      time.
    </p>

    <p>
      Use the builder to assemble your own avatar using Snoo—Reddit&apos;s
      mascot—and visual elements we provide. Your avatar is how your appear to
      others throughout Reddit. We embrace the weird.
    </p>

    <p>Problem/opportunity</p>
    <p>solution</p>
    <p>impact</p>
  </>
);

const metadata = [
  {
    title: "Company",
    values: [
      {
        name: "Reddit",
        url: "https://www.reddit.com",
      },
    ],
  },
  {
    title: "Team",
    values: [
      {
        name: "Economy (Bets/X)",
      },
    ],
  },
  {
    title: "Design Colleagues",
    values: [
      {
        name: "Sam Stratton",
        url: "https://samstratton.com/",
      },
      {
        name: "Matt Bloom-Carlin",
        url: "https://mbloomcarlin.com/",
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
        name: "2022",
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
      <div className="relative bg-black pt-32 pb-32 w-full flex flex-col gap-16">
        <h2 className="text-white">
          A platform for personal expression and delight.
        </h2>
        <div className="flex gap-8 flex-nowrap">
          <Image src={Explore0} alt={title} rounded />
          <Image src={Explore1} alt={title} rounded />
        </div>
        <div
          className={`bg-black absolute h-full top-0 left-0 w-[9000px] translate-x-[-9000px] z-[-1]`}
        />
        <div
          className={`bg-black absolute h-full top-0 right-0 w-[9000px] translate-x-[9000px] z-[-1]`}
        />
      </div>

      <h2>Get inspired by seasonal drops.</h2>
      <Row color="black">
        <Image src={Explore1} alt={title} rounded />
        <Image src={Explore2} alt={title} rounded />
        <Image src={Explore3} alt={title} rounded />
      </Row>

      <h2>Enabling anyone to represent themselves</h2>
      <Row>
        <Image src={Box1} alt="Halo" />
        <Image src={Box2} alt={title} />
        <Image src={Box3} alt="WallStreetBets" />
        <Image src={Box4} alt="Football" />
        <Image src={Box5} alt={title} />
        <Image src={Box6} alt="Viking" />
      </Row>
      <Row>
        <Image src={Box7} alt={title} />
        <Image src={Box8} alt={title} />
        <Image src={Box9} alt={title} />
        <Image src={Box10} alt="Valentines" />
        <Image src={Box11} alt={title} />
        <Image src={Box12} alt={title} />
      </Row>
      <Row>
        <Image src={Box13} alt="Wheelchair" />
        <Image src={Box14} alt="Orc" />
        <Image src={Box15} alt="Minecraft" />
        <Image src={Box16} alt="Fox" />
        <Image src={Box17} alt="Pride" />
        <Image src={Box18} alt={title} />
      </Row>
      <p>
        These were all drawn by the talented illustrators on our internal
        branding team, OrangeRed.
      </p>

      <h2>Make your own Snoo.</h2>
      <Row color="black">
        <Image src={Me1} alt={title} rounded />
        <Image src={Me2} alt={title} rounded />
        <Image src={Me3} alt={title} rounded />
      </Row>

      <h2>Find a style to match.</h2>
      <Row color="#f7d9bc">
        <Image src={Style1} alt={title} rounded />
        <Image src={Style2} alt={title} rounded />
        <Image src={Style3} alt={title} rounded />
      </Row>
      <p>6 slots to configure</p>
      <p>Adjust colors</p>
      <p>Provides random access to all items.</p>
      <p>Quick access to worn items.</p>
    </main>
  </>
);

export default Project;
