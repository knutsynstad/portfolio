import ProjectHeader from "@/components/ProjectHeader";
import Image from "next/image";
import Slideshow from "@/components/Slideshow";
import { Metadata } from "next";

// Assets
import BiozModel from "./assets/Bioz_Model.svg";
import SearchResultsProducts from "./assets/Bioz_Search_Results_Products_2340w.png";
import SearchResultsProductsBulkActions from "./assets/Bioz_Search_Results_Products_Bulk_Actions_2340w.png";
import SearchResultsFigures from "./assets/Bioz_Search_Results_Figures_2340w.png";
import SearchResultsFiguresBulkActions from "./assets/Bioz_Search_Results_Figures_Bulk_Actions_2340w.png";
import SearchResultsArticles from "./assets/Bioz_Search_Results_Articles_2340w.png";
import SearchResultsArticlesBulkActions from "./assets/Bioz_Search_Results_Articles_Bulk_Actions_2340w.png";
import ProductTiles from "./assets/Bioz_Product_Tiles_2340w.png";
import ProductComparison from "./assets/Bioz_Product_Comparison_2340w.png";
import JournalCreation from "./assets/Bioz_Journal_Creation.svg";
import FilterDropDowns from "./assets/Bioz_Filter_Dropdowns_2340w.png";
import SaveProductToFolder from "./assets/Bioz_Save_Product_to_Folder_2340w.png";
import ProductDetails from "./assets/Bioz_Product_Details_2340w.png";
import FigureViewer from "./assets/Bioz_Figure_Viewer_2340w.png";
import FigureViewerFullScreen from "./assets/Bioz_Figure_Viewer_Full_Screen_2340w.png";
import InformationOverlap from "./assets/Bioz_Information_Overlap.svg";
import ArticleFullText from "./assets/Bioz_Article_Full_Text_2340w.png";

const title = "Using A.I. to accelerate life science.";
const description = (
  <>
    <p>
      Through cutting-edge natural language processing, life science startup
      Bioz digests millions of public and commercial scientific articles to
      better understand labware, reagent, and antibody usage, efficacy, and
      protocols. The continuously updated knowledge graph is manifested in a
      proprietary multi-parameter score assigned to all products. Advised by
      Nobel laureates, Bioz strives to remove bias and catalyst life science
      research forward.
    </p>
    <p>
      Their platform augments the researcher&apos;s workflow by dramatically
      reducing the time spent finding articles, planning experiments, and
      evaluating and purchasing products so that researchers can spend more time
      doing what they do best. The Bioz score enables researchers to quickly
      find products used and trusted by their peers.
    </p>
    <p>
      In addition to their search tool, shown below, Bioz syndicates their score
      through vendor catalogs, and publishing journals alike.
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
    title: "Client",
    values: [
      {
        name: "Bioz",
      },
    ],
  },
  {
    title: "Project",
    values: [
      {
        name: "Biological Search Tool",
      },
    ],
  },
  {
    title: "Categories",
    values: [
      { name: "Interaction Design" },
      { name: "Visual Design" },
      { name: "Usability" },
      { name: "Animation" },
    ],
  },
];

export const metadata: Metadata = { title: `${title} - Knut Synstad` };

const Project = () => (
  <>
    <ProjectHeader title={title} description={description} details={details} />
    <main className="flex flex-col gap-8">
      <Image src={BiozModel} alt={title} />

      <Slideshow
        slides={[
          { image: SearchResultsProducts },
          { image: SearchResultsProductsBulkActions },
          { image: SearchResultsFigures },
          { image: SearchResultsFiguresBulkActions },
          { image: SearchResultsArticles },
          { image: SearchResultsArticlesBulkActions },
        ]}
        shadow
      />

      <Slideshow
        slides={[{ image: ProductTiles }, { image: ProductComparison }]}
        shadow
      />

      <Image src={JournalCreation} alt={title} className="rounded-2xl" />
      <Image src={FilterDropDowns} alt={title} className="rounded-2xl" />
      <Image src={SaveProductToFolder} alt={title} className="rounded-2xl" />
      <Image src={ProductDetails} alt={title} className="rounded-2xl" />

      <Slideshow
        slides={[{ image: FigureViewer }, { image: FigureViewerFullScreen }]}
        shadow
      />

      <Image src={InformationOverlap} alt={title} className="rounded-2xl" />
      <Image src={ArticleFullText} alt={title} className="rounded-2xl" />
    </main>
  </>
);

export default Project;
