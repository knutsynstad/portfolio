type FullBleedProps = React.ComponentPropsWithoutRef<"div">;

/** Break out of the centered content column to the viewport edges. */
const FullBleed = ({ className, ...props }: FullBleedProps) => (
  <div
    className={["full-bleed", className].filter(Boolean).join(" ")}
    {...props}
  />
);

export default FullBleed;
