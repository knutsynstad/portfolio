import Image from "next/image";

interface ProjectTileProps {
  title: string;
  url: string;
  image: string;
  className?: string;
  tags?: string[];
  priority?: boolean;
}

function imageSrc(image: string) {
  return image.startsWith("/") ? image : `/${image}`;
}

export default function ProjectTile(props: ProjectTileProps) {
  const { title, url, image, className, tags, priority } = props;
  const src = imageSrc(image);
  const unoptimized = src.endsWith(".svg") || src.endsWith(".gif");

  return (
    <a
      href={url}
      className={`p-4 text-decoration-none mb-8 flex flex-col gap-4 shadow-none transform transition-transform duration-150 hover:-translate-y-2 hover:scale-105 hover:z-10 hover:shadow-lg rounded-2xl no-underline ${className}`}
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover"
          priority={priority}
          unoptimized={unoptimized}
        />
      </div>
      <h2 className="text-2xl">{title}</h2>
      <div className="flex flex-wrap gap-1">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 whitespace-nowrap rounded text-sm text-gray-700 font-medium leading-none p-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
