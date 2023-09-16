import ProjectDetailsPage from "@/layouts/ProjectDetailsPage";
import Image from "@/components/Image";

// Assets
import Elite_Raiders_01 from "../../../public/images/Elite_Raiders_01.jpg";
import Elite_Raiders_02 from "../../../public/images/Elite_Raiders_02.jpg";
import Elite_Raiders_03 from "../../../public/images/Elite_Raiders_03.jpg";
import Elite_Raiders_04 from "../../../public/images/Elite_Raiders_04.jpg";
import Elite_Raiders_05 from "../../../public/images/Elite_Raiders_05.jpg";

const data = {
  id: "winning_is_the_only_way_to_play_the_game",
  metadata: [
    {
      title: "University",
      values: [
        {
          name: "Academy of Art University",
        },
      ],
    },
    {
      title: "Class",
      values: [
        {
          name: "GR.601 Type Systems",
        },
      ],
    },
    {
      title: "Categories",
      values: [{ name: "Book Design" }],
    },
  ],
  title: "Winning is the only way to play the game.",
  description: (
    <>
      <p>
        The popularity of video games has increased exponentially over the last
        decade and in order to keep players interested, game developers keep
        adding content at a higher level of difficulty to promote competition.
        Massively Multiplayer Online (MMO) games are a relatively recent form of
        gaming that has gained popularity by creating communities around
        teamwork. Often players are encouraged to band together to overcome
        challenges, they would not be able to accomplish on their own.
      </p>
      <p>
        This creates a culture of competition to either be the best, the fastest
        or in some way distinguish themselves from the rest. For some, this even
        means abandoning conventional lifestyles and dedicating their lives to
        the pursuit of gaming supremacy. This book explores this subculture of
        gamers and their willingness to do whatever it takes to achieve their
        idea of success.
      </p>
    </>
  ),
};

const Project = () => (
  <ProjectDetailsPage data={data}>
    <div className="flex flex-col gap-8">
      <Image src={Elite_Raiders_01} alt={data.title} rounded />
      <Image src={Elite_Raiders_02} alt={data.title} rounded />

      <div className="flex flex-row gap-8">
        <Image src={Elite_Raiders_03} alt={data.title} rounded />
        <Image src={Elite_Raiders_04} alt={data.title} rounded />
      </div>
      <Image src={Elite_Raiders_05} alt={data.title} rounded />
    </div>
  </ProjectDetailsPage>
);

export default Project;
