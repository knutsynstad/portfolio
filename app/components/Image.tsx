import Image, { StaticImageData } from "next/image";

interface ImageProps {
    src: string | StaticImageData;
    alt: string;
    srcSet?: string;
    shadow?: boolean;
    rounded?: boolean;
    width?: number;
    height?: number;
    maxWidth?: number;
    priority?: boolean;
    className?: string;
}

const StyledImageComponent = ({
    maxWidth,
    rounded,
    shadow,
    alt,
    className,
    ...props
}: ImageProps) => {
    return (
        <div
            className={[
                "overflow-hidden",
                rounded ? "rounded-2xl" : "rounded-none",
                shadow ? "shadow-lg" : "shadow-none",
                maxWidth ? `max-w-[${maxWidth}px]` : "max-w-full",
            ].join(" ")}
        >
            <Image
                alt={alt}
                className={`w-full ${className}`}
                {...props}
            />
        </div>
    );
};

export default StyledImageComponent;
