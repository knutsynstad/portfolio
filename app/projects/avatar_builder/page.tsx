import ProjectHeader from "@/components/ProjectHeader";
import Image from "next/image";
import { Metadata } from "next";
import Marquee from "@/components/Marquee";

// Avatar Showcase
import Box1 from "./assets/Box1.png";
import Box2 from "./assets/Box2.png";
import Box3 from "./assets/Box3.png";
import Box4 from "./assets/Box4.png";
import Box5 from "./assets/Box5.png";
import Box6 from "./assets/Box6.png";
import Box7 from "./assets/Box7.png";
import Box8 from "./assets/Box8.png";
import Box9 from "./assets/Box9.png";
import Box10 from "./assets/Box10.png";
import Box11 from "./assets/Box11.png";
import Box12 from "./assets/Box12.png";
import Box13 from "./assets/Box13.png";
import Box14 from "./assets/Box14.png";
import Box15 from "./assets/Box15.png";
import Box16 from "./assets/Box16.png";
import Box17 from "./assets/Box17.png";
import Box18 from "./assets/Box18.png";

// Screens
import Me1 from "./assets/Me1.png";
import Me2 from "./assets/Me2.png";
import Me3 from "./assets/Me3.png";
import Style1 from "./assets/Style1.png";
import Style2 from "./assets/Style2.png";
import Style3 from "./assets/Style3.png";
import Explore0 from "./assets/Explore0.png";
import Explore1 from "./assets/Explore1.png";
import Explore2 from "./assets/Explore2.png";
import Explore3 from "./assets/Explore3.png";

const title = "The Reddit Avatar Builder.";
const description = (
  <>
    <p>
      Avatars on Reddit are more than mere images&mdash;they are the embodiment
      of personal identity and creativity, offering an expressive extension of
      oneself.
    </p>

    <p>
      With the Avatar Builder, users can effortlessly craft their unique
      identity using Reddit&apos;s iconic mascot, Snoo, alongside a diverse
      array of visual elements designed to inspire limitless creativity. Whether
      whimsical, minimalist, or boldly eccentric, your avatar becomes your
      digital essence on Reddit&mdash;a celebration of all things quirky and
      unique.
    </p>

    <p>
      A modular UI system set the stage for continuous exploration and expansion
      of the Avatars program.
    </p>
  </>
);
const details = [
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
        name: "Economy",
      },
    ],
  },
  {
    title: "Collaborators",
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
];

/*

  {
    title: "Year",
    values: [
      {
        name: "2022",
      },
    ],
  },

*/

export const metadata: Metadata = { title: `${title} - Knut Synstad` };

const marqueeImages = [
  { image: Box1, label: "Halo" },
  { image: Box2, label: title },
  { image: Box3, label: "WallStreetBets" },
  { image: Box4, label: "Football" },
  { image: Box5, label: title },
  { image: Box6, label: "Viking" },
  { image: Box7, label: title },
  { image: Box8, label: title },
  { image: Box9, label: title },
  { image: Box10, label: "Valentines" },
  { image: Box11, label: title },
  { image: Box12, label: title },
  { image: Box13, label: "Wheelchair" },
  { image: Box14, label: "Orc" },
  { image: Box15, label: "Minecraft" },
  { image: Box16, label: "Fox" },
  { image: Box17, label: "Pride" },
  { image: Box18, label: title },
];

const Project = () => (
  <>
    <ProjectHeader title={title} description={description} details={details} />
    <main className="flex flex-col gap-32">
      <Marquee>
        {marqueeImages.map((image, index) => (
          <Image
            src={image.image}
            alt={image.label}
            key={`marquee-${index}-${image.label}`}
            className="w-[200px]"
          />
        ))}
      </Marquee>

      <div className="w-full flex flex-col gap-8">
        <h2>Make your Snoo</h2>
        <div className="grid grid-cols-3 gap-8">
          {[Me1, Me2, Me3].map((image, index) => (
            <Image
              src={image}
              alt={title}
              key={`${index}-${image}`}
              className="rounded-2xl shadow-2xl"
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-8">
        <div className="grid grid-cols-3 gap-y-4 gap-x-8">
          <h2 className="col-span-2">Style it with seasonal gear</h2>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {[Explore1, Explore2, Explore3].map((image, index) => (
            <Image
              src={image}
              alt={title}
              key={`${index}-${image}`}
              className="rounded-2xl shadow-2xl"
            />
          ))}
        </div>
      </div>
    </main>
  </>
);

export default Project;

/*


      <div className="w-full flex flex-col gap-8">
        <div className="grid grid-cols-3 gap-y-4 gap-x-8">
          <h2 className="col-span-2">Find a style to match.</h2>
          <p className="col-span-2 text-2xl tracking-tight">
            Stylize your own version of Snoo, the Reddit mascot, to represent
            yourself across the platform. The Avatar grows with you through new
            features and assets over time.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {[Style1, Style2, Style3].map((image, index) => (
            <Image
              src={image}
              alt={title}
              key={`${index}-${image}`}
              className="rounded-2xl shadow-2xl"
            />
          ))}
        </div>
      </div>

*/

/*


      <div className="relative grid pt-16 pb-16 grid-cols-2 gap-8 after:absolute after:w-screen after:h-full after:left-[50%] after:translate-x-[-50%] after:bg-slate-800 after:z-1">
        <Image src={Explore0} alt={title} className="rounded-2xl z-10" />
        <Image src={Explore1} alt={title} className="rounded-2xl z-10" />
      </div>



 The Avatar Builder is a system that allows users to create a unique avatar that represents them across the Reddit platform. The system is extensible and scalable, allowing for the addition of new features and assets over time.



      <div className="w-full flex flex-col gap-8">
        <h2>Get inspired by seasonal drops.</h2>
        <div className="relative grid pt-16 pb-16 grid-cols-3 gap-8">
          {[Explore0, Explore1].map((image, index) => (
            <Image
              src={image}
              alt={title}
              key={`${index}-${image}`}
              className="rounded-2xl shadow-2xl"
            />
          ))}
        </div>
      </div>

*/
