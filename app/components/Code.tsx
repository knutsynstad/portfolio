interface CodeProps {
  children: string;
}

const Code = ({ children }: CodeProps) => {
  return (
    <code className="mx-0.5 rounded-sm bg-black/10 px-1 font-mono">
      {children}
    </code>
  );
};

export default Code;
