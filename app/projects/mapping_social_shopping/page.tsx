import Image from "@/components/Image";
import Slideshow from "@/components/Slideshow";
import Slide from "@/components/Slide";
import ProjectHeader from "@/components/ProjectHeader";

// Assets
import Sello_Social_Selling from "../../../public/images/Sello_Social_Selling.svg";
import Sello_Merchant_Map_1 from "../../../public/images/Sello_Merchant_Map_1_2340w.png";
import Sello_Merchant_Map_2 from "../../../public/images/Sello_Merchant_Map_2_2340w.png";
import Sello_Merchant_Map_3 from "../../../public/images/Sello_Merchant_Map_3_2340w.png";
import Sello_Customer_Map from "../../../public/images/Sello_Customer_Map_2340w.png";

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

const Project = () => (
  <>
    <ProjectHeader
      title={title}
      description={description}
      metadata={metadata}
    />
    <main>
      <h2>Modeling social shopping</h2>
      <Image src={Sello_Social_Selling} alt={title} rounded />

      <h2>Merchant mobile application (iOS)</h2>
      <Slideshow shadow>
        <Slide>
          <Image src={Sello_Merchant_Map_1} alt={title} />
        </Slide>
        <Slide>
          <Image src={Sello_Merchant_Map_2} alt={title} />
        </Slide>
        <Slide>
          <Image src={Sello_Merchant_Map_3} alt={title} />
        </Slide>
      </Slideshow>

      <h2>Customer facing web store</h2>
      <Image src={Sello_Customer_Map} alt={title} rounded />
    </main>
  </>
);

export default Project;
