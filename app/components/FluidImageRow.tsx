interface ImageProps {
  src: { width: number };
}

interface FluidImageRowProps {
  children: React.ReactElement<ImageProps>[];
}

const FluidImageRow = (props: FluidImageRowProps) => {
  const { children } = props;

  const totalWidth = children.reduce((acc, child) => {
    return acc + (child.props as ImageProps).src.width;
  }, 0);

  const imageWrappers = children.map((child, index) => {
    const width = (child.props as ImageProps).src.width;
    const flexBasis = `${(width / totalWidth) * 100}%`;

    return (
      <div key={index} className={`relative basis-[${flexBasis}]`}>
        {child}
      </div>
    );
  });

  return <div className="flex flex-row gap-4 flex-nowrap">{imageWrappers}</div>;
};

export default FluidImageRow;
