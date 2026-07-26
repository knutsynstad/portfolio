import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Tag from "./Tag";

/**
 * A tile linking to a project.
 * @param props - The props for the project tile.
 * @returns The project tile.
 */
export default function ProjectTile({
  title,
  url,
  image,
  className,
  tags,
  priority = false,
}: {
  title: string;
  url: string;
  image: StaticImageData;
  className?: string;
  tags?: string[];
  priority?: boolean;
}) {
  return (
    <Link
      href={url}
      className={`p-4 flex flex-col gap-4 shadow-none transform transition-transform duration-150 hover:-translate-y-2 hover:scale-105 hover:z-10 hover:shadow-lg rounded-4xl no-underline ${className}`}
    >
      <Image
        src={image}
        alt={title}
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover relative aspect-square w-full overflow-hidden rounded-2xl"
        priority={priority}
        unoptimized={image.src.endsWith(".svg") || image.src.endsWith(".gif")}
        draggable={false}
      />
      <h2 className="text-2xl text-balance">{title}</h2>
      {tags && (
        <div className="flex flex-wrap gap-1">
          {tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
    </Link>
  );
}
