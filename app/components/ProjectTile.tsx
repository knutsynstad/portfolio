interface ProjectTileProps {
  title: string;
  url: string;
  image: string;
  className?: string;
  tags?: string[];
}

export default function ProjectTile(props: ProjectTileProps) {
  const { title, url, image, className, tags } = props;
  return (
    <a
      href={url}
      className={`p-4 text-decoration-none mb-8 flex flex-col gap-4 shadow-none transform transition-transform duration-200 hover:-translate-y-2 hover:scale-105 hover:z-10 hover:shadow-lg rounded-2xl no-underline ${className}`}
    >
      <img src={image} alt={title} className="w-full rounded-md" />
      <h2 className="text-2xl">{title}</h2>
      <div className="flex gap-1">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 rounded-lg px-2 text-xs text-grauy-700 font-medium leading-none py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
