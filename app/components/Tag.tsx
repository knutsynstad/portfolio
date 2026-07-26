type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Tag(props: TagProps) {
  const { children, className } = props;
  return (
    <span
      className={`bg-gray-100 whitespace-nowrap rounded text-sm text-gray-700 font-medium leading-none p-1 ${className}`}
    >
      {children}
    </span>
  );
}
