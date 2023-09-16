import { ReactElement } from "react";

interface RowProps {
  children: ReactElement[];
  gap?: number;
  color?: string;
  rounded?: boolean;
}

const Row = ({ children, gap = 32, color, rounded = false }: RowProps) => {
  const containerClasses = `grid-cols-12 flex flex-row flex-nowrap gap-${gap} ${
    color ? `p-4 bg-${color}` : ""
  } ${rounded ? "rounded-lg" : ""}`;

  return <div className={containerClasses}>{children}</div>;
};

export default Row;