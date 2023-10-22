type DetailContent = {
  name: string;
  url?: string;
};

type Detail = {
  title: string;
  values: DetailContent[];
};

interface ProjectHeaderProps {
  title: string;
  description: React.ReactNode | React.ReactNode[];
  details: Detail[];
}

export default function ProjectHeader(props: ProjectHeaderProps) {
  const { title, details, description } = props;
  const detailElements = details.map(({ title, values }) => (
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
          else return <p key={value.name}>{value.name}</p>;
        })}
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-12 gap-8 mb-24">
      <h1 className="col-span-12 mb-24">{title}</h1>
      <div className="col-span-7">
        <h3>Description</h3>
        <div className="flex flex-col gap-[28px]">{description}</div>
      </div>
      <div className="col-start-10 col-span-3 flex flex-col gap-7">
        {detailElements}
      </div>
    </div>
  );
}
