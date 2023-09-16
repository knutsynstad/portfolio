import Footer from "@/components/Footer";

type Metadata = {
  title: string;
  values: {
    name: string;
    url?: string;
  }[];
};

interface ProjectData {
  data: {
    id: string;
    title: string;
    description: React.ReactNode | React.ReactNode[];
    metadata: Metadata[];
  };
  children: React.ReactNode | React.ReactNode[];
}

export default function ProjectDetailsPage(props: ProjectData) {
  const { children, data } = props;
  const { id, title, metadata, description } = data;

  const metadataContent = metadata.map((item) => {
    const { title, values } = item;
    return (
      <div key={`${title}-${values}`} className="flex flex-col">
        <h3>{title}</h3>
        <div className="flex flex-col">
          {values.map((value) => {
            if (value.url)
              return (
                <a key={value.name} href={value.url} target="_blank">
                  {value.name}
                </a>
              );
            if (!value.url) return <p key={value.name}>{value.name}</p>;
          })}
        </div>
      </div>
    );
  });

  return (
    <div className="p-32 flex justify-center">
      <div className="max-w-4xl">
        <a
          href="/"
          className="fixed top-[32px] left-[32px] hover:fill-[rgba(0,0,0,0.3)] transition-all"
        >
          <svg
            viewBox="0 -960 960 960"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16"
          >
            <path d="M480-160 160-480l320-320 57 56-224 224h487v80H313l224 224-57 56Z" />
          </svg>
        </a>
        <div className="grid grid-cols-12 gap-8 mb-24">
          <h1 className="col-span-12 mb-24">{title}</h1>
          <div className="col-span-7">
            <h3>Description</h3>
            <div className="flex flex-col gap-[28px]">{description}</div>
          </div>
          <div className="col-start-10 col-span-3 flex flex-col gap-7">
            {metadataContent}
          </div>
        </div>
        <main className="flex flex-col gap-16 mb-32">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
