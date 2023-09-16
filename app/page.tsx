"use client";
import projects from "./projects";
import ProjectTile from "@/components/ProjectTile";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="p-32">
            <div className="my-0 mx-auto max-w-4xl">
                <header className="mb-32 flex flex-col gap-8">
                    <h1>Hello 👋</h1>
                    <p className="text-2xl max-w-2xl tracking-tight">
                        I&apos;m Knut, a San-Francisco-based designer and
                        developer. Currently the design lead for Reddit&apos;s
                        Developer Platform.
                    </p>
                </header>

                <main className="flex flex-wrap m-[-16px]">
                    {projects.map((project) => (
                        <ProjectTile
                            key={project.url}
                            title={project.name}
                            image={project.image}
                            url={project.url}
                            tags={project.tags}
                            className="w-1/3"
                        />
                    ))}
                </main>

                <Footer />
            </div>
        </div>
    );
}
