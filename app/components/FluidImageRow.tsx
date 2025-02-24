import type { JSX } from "react";

interface FluidImageRowProps {
  children: JSX.Element[];
}

const FluidImageRow = (props: FluidImageRowProps) => {
  const { children } = props;

  const totalWidth = children.reduce((acc, child) => {
    return acc + child.props.src.width;
  }, 0);

  const imageWrappers = children.map((child, index) => {
    const width = child.props.src.width;
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
