interface CodeProps {
  children: string;
}

const Code = ({ children }: CodeProps) => {
  return (
    <code className="px-1 mx-0.5 rounded-sm bg-[rgba(0,0,0,0.1)] font-mono">
      {children}
    </code>
  );
};

export default Code;
