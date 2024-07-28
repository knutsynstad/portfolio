export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}

      <nav className="fixed top-[32px] left-[32px]">
        <a
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
        </a>
      </nav>
    </section>
  );
}
