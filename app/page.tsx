import ProjectTile from "@/components/ProjectTile";
import { featuredProjects, projectUrl } from "@/projects/registry";

export default function Home() {
  return (
    <>
      <header className="mb-32 flex flex-col gap-8">
        <h1>Hello.</h1>
        <p className="text-2xl max-w-2xl tracking-tight">
          I&apos;m{" "}
          <a
            href="https://www.linkedin.com/in/knutsynstad"
            target="_blank"
            rel="noopener noreferrer"
          >
            Knut
          </a>
          , a San-Francisco-based designer and developer. Currently the design
          lead for{" "}
          <a
            href="https://developers.reddit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reddit&apos;s Developer Platform
          </a>
          .
        </p>
      </header>

      <main className="grid grid-cols-2 md:grid-cols-3 gap-0 m-[-16px]">
        {featuredProjects.map((project, index) => (
          <ProjectTile
            key={project.slug}
            title={project.name}
            image={project.image}
            url={projectUrl(project.slug)}
            tags={project.tags}
            priority={index < 6}
          />
        ))}
      </main>
    </>
  );
}
