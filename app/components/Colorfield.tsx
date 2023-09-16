interface ColorfieldProps {
  children: React.ReactNode | React.ReactNode[];
  color: string;
  wide?: boolean;
}

const Colorfield = ({ children, color, wide = false }: ColorfieldProps) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`relative pt-[192px] pb-[192px] flex flex-nowrap gap-16 align-middle items-center`}
    >
      {children}
      {wide && (
        <>
          <div
            style={{ backgroundColor: color }}
            className={`absolute h-full top-0 left-0 w-[9000px] translate-x-[-9000px] z-[-1]`}
          />
          <div
            style={{ backgroundColor: color }}
            className={`absolute h-full top-0 right-0 w-[9000px] translate-x-[9000px] z-[-1]`}
          />
        </>
      )}
    </div>
  );
};

export default Colorfield;
