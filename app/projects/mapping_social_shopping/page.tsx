import ProjectHeader from "@/components/ProjectHeader";
import Image from "next/image";
import Slideshow from "@/components/Slideshow";
import { Metadata } from "next";

// Assets
import Sello_Social_Selling from "./assets/Sello_Social_Selling.svg";
import Sello_Merchant_Map_1 from "./assets/Sello_Merchant_Map_1_2340w.png";
import Sello_Merchant_Map_2 from "./assets/Sello_Merchant_Map_2_2340w.png";
import Sello_Merchant_Map_3 from "./assets/Sello_Merchant_Map_3_2340w.png";
import Sello_Customer_Map from "./assets/Sello_Customer_Map_2340w.png";

const title = "Mapping social shopping.";
const description = (
  <>
    <p>
      <a href="http://www.dubberly.com" target="_blank">
        Dubberly Design Office
      </a>{" "}
      has a long history of pioneering approaches for taming complexity. One of
      the artifacts to emerge from the practice is the Application Map. In 1998,
      Hugh Dubberly, inspired by Paul Souza&apos;s work for the original NOVA TV
      series, engaged Paul Khan and Krzysztof Lenk to map the Netscape website.
      Since then the artifact has reached maturity through iteration and
      definition.
    </p>
    <p>
      Senior Designer at DDO, Ryan Reposar describes the premise as follows:
      “Software applications suffer from the &quot;keyhole effect&quot;—by
      looking through the viewport, you can only see one screen at a time. That
      means it&apos;s difficult to immediately understand the scale and scope of
      an application, and it can be hard to know if you&apos;ve visited every
      screen or seen every case. A way to bypass this is to create an
      application flow map; a single document which captures and presents every
      screen within an application and shows how they&apos;re connected.”
    </p>
    <p>
      Here, I&apos;ve mapped and modeled Shopify&apos;s Sello application in
      order to better understand social shopping. Sello enables anyone,
      anywhere, to sell anything using an easy to use mobile application. The
      service also takes care of integration with payment services such as
      Stripe.
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
    title: "Categories",
    values: [
      {
        name: "Application Map",
      },
      { name: "Modeling" },
      { name: "Social Shopping" },
    ],
  },
];

export const metadata: Metadata = { title: `${title} - Knut Synstad` };

const Project = () => (
  <>
    <ProjectHeader title={title} description={description} details={details} />
    <main className="flex flex-col gap-8">
      <h2>Modeling social shopping</h2>
      <Image src={Sello_Social_Selling} alt={title} className="rounded-2xl" />

      <h2>Merchant mobile application (iOS)</h2>
      <Slideshow
        slides={[
          { image: Sello_Merchant_Map_1 },
          { image: Sello_Merchant_Map_2 },
          { image: Sello_Merchant_Map_3 },
        ]}
        shadow
      />

      <h2>Customer facing web store</h2>
      <Image src={Sello_Customer_Map} alt={title} className="rounded-2xl" />
    </main>
  </>
);

export default Project;
