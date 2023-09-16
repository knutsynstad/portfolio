import ProjectDetailsPage from "@/layouts/ProjectDetailsPage";
import Image from "@/components/Image";
import Slideshow from "@/components/Slideshow";
import Slide from "@/components/Slide";

// Assets
import BiozModel from "../../../public/images/Bioz_Model.svg";
import SearchResultsProducts from "../../../public/images/Bioz_Search_Results_Products_2340w.png";
import SearchResultsProductsBulkActions from "../../../public/images/Bioz_Search_Results_Products_Bulk_Actions_2340w.png";
import SearchResultsFigures from "../../../public/images/Bioz_Search_Results_Figures_2340w.png";
import SearchResultsFiguresBulkActions from "../../../public/images/Bioz_Search_Results_Figures_Bulk_Actions_2340w.png";
import SearchResultsArticles from "../../../public/images/Bioz_Search_Results_Articles_2340w.png";
import SearchResultsArticlesBulkActions from "../../../public/images/Bioz_Search_Results_Articles_Bulk_Actions_2340w.png";
import ProductTiles from "../../../public/images/Bioz_Product_Tiles_2340w.png";
import ProductComparison from "../../../public/images/Bioz_Product_Comparison_2340w.png";
import JournalCreation from "../../../public/images/Bioz_Journal_Creation.svg";
import FilterDropDowns from "../../../public/images/Bioz_Filter_Dropdowns_2340w.png";
import SaveProductToFolder from "../../../public/images/Bioz_Save_Product_to_Folder_2340w.png";
import ProductDetails from "../../../public/images/Bioz_Product_Details_2340w.png";
import FigureViewer from "../../../public/images/Bioz_Figure_Viewer_2340w.png";
import FigureViewerFullScreen from "../../../public/images/Bioz_Figure_Viewer_Full_Screen_2340w.png";
import InformationOverlap from "../../../public/images/Bioz_Information_Overlap.svg";
import ArticleFullText from "../../../public/images/Bioz_Article_Full_Text_2340w.png";

const data = {
  id: "using_ai_to_accelerate_life_science",
  title: "Using A.I. to accelerate life science.",
  description: (
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
        evaluating and purchasing products so that researchers can spend more
        time doing what they do best. The Bioz score enables researchers to
        quickly find products used and trusted by their peers.
      </p>
      <p>
        In addition to their search tool, shown below, Bioz syndicates their
        score through vendor catalogs, and publishing journals alike.
      </p>
    </>
  ),
  metadata: [
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
  ],
};

const Project = () => (
  <ProjectDetailsPage data={data}>
    <Image src={BiozModel} alt={data.title} />

    <Slideshow shadow>
      <Slide>
        <Image src={SearchResultsProducts} alt={data.title} />
      </Slide>
      <Slide>
        <Image src={SearchResultsProductsBulkActions} alt={data.title} />
      </Slide>
      <Slide>
        <Image src={SearchResultsFigures} alt={data.title} />
      </Slide>
      <Slide>
        <Image src={SearchResultsFiguresBulkActions} alt={data.title} />
      </Slide>
      <Slide>
        <Image src={SearchResultsArticles} alt={data.title} />
      </Slide>
      <Slide>
        <Image src={SearchResultsArticlesBulkActions} alt={data.title} />
      </Slide>
    </Slideshow>

    <Slideshow shadow>
      <Slide>
        <Image src={ProductTiles} alt={data.title} />
      </Slide>
      <Slide>
        <Image src={ProductComparison} alt={data.title} />
      </Slide>
    </Slideshow>

    <Image src={JournalCreation} alt={data.title} />
    <Image src={FilterDropDowns} alt={data.title} />
    <Image src={SaveProductToFolder} alt={data.title} />
    <Image src={ProductDetails} alt={data.title} />

    <Slideshow shadow>
      <Slide>
        <Image src={FigureViewer} alt={data.title} />
      </Slide>
      <Slide>
        <Image src={FigureViewerFullScreen} alt={data.title} />
      </Slide>
    </Slideshow>

    <Image src={InformationOverlap} alt={data.title} />
    <Image src={ArticleFullText} alt={data.title} />
  </ProjectDetailsPage>
);

export default Project;
