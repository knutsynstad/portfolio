import ProjectDetailsPage from "@/layouts/ProjectDetailsPage";
import Image from "@/components/Image";
import Corn_Poster from "../../../public/images/Corn_Poster.svg";
import Colorfield from "@/components/Colorfield";

const data = {
    id: "measuring_corn_production_in_every_county_every_day",
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
                    name: "Descartes Labs",
                    url: "https://descarteslabs.com/",
                },
            ],
        },
        {
            title: "Direction",
            values: [
                {
                    name: "Hugh Dubberly",
                    url: "https://www.dubberly.com",
                },
            ],
        },
        {
            title: "Categories",
            values: [
                {
                    name: "Information design"
                },
                { name: "Modeling" },
                { name: "Satellites" },
            ],
        },
    ],
    title: "Measuring corn production, in every county, every day.",
    description: (
        <>
            <p>Every year, the <a href="https://www.usda.gov/">United States Department of Agriculture (USDA)</a> spends millions of dollars predicting national crop production throughout the growing season. Helped by thousands, they sample farms, by hand, in a portion of the 3,242 counties. Their monthly reports move commodity crop markets—having this information before others provide a significant advantage.</p>

            <p>In 2015, <a href="http://descarteslabs.com/">Descartes Labs</a> used public satellites, weather data, and their expertise in distributed supercomputing to make the first entirely automated forecast of national corn production. While the USDA reports at a state and national granularity, Descartes Labs can provide per county predictions. Their prediction came within 1.9% of the actual production, reported by the USDA more than 6 months later.</p>

            <p>This poster was made to better understand key aspects of corn growth and prediction. It visualizes the 2015 growing season in Polk County, Iowa, and is one of a series. New posters, showing conditions for other counties, can be produced programmatically.</p>
        </>
    ),
};

const Project = () => (
    <ProjectDetailsPage data={data}>
        <Colorfield color="black" wide>
        <Image src={Corn_Poster} alt={data.title} className="bg-white" rounded />

        </Colorfield>

    </ProjectDetailsPage>
);

export default Project;
