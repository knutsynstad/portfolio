import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectTileProps {
  title: string;
  url: string;
  image: StaticImageData;
  className?: string;
  tags?: string[];
  priority?: boolean;
}

export default function ProjectTile(props: ProjectTileProps) {
  const { title, url, image, className, tags, priority } = props;
  const unoptimized = image.src.endsWith(".svg") || image.src.endsWith(".gif");

  return (
    <Link
      href={url}
      className={`p-4 mb-8 flex flex-col gap-4 shadow-none transform transition-transform duration-150 hover:-translate-y-2 hover:scale-105 hover:z-10 hover:shadow-lg rounded-4xl no-underline ${className}`}
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover"
          priority={priority}
          unoptimized={unoptimized}
        />
      </div>
      <h2 className="text-2xl text-balance">{title}</h2>
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
    </Link>
  );
}
