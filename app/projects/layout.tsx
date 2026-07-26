import Link from "next/link";

/**
 * The layout for a project.
 * @param children - The children of the project.
 * @returns The project.
 */
export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}

      <nav className="fixed top-8 left-8">
        <Link
          aria-label="Back to projects"
          href="/"
          className="fill-black hover:fill-[rgba(0,0,0,0.3)] transition-all"
        >
          <svg
            viewBox="0 -960 960 960"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16"
          >
            <path d="M480-160 160-480l320-320 57 56-224 224h487v80H313l224 224-57 56Z" />
          </svg>
        </Link>
      </nav>
    </section>
  );
}
