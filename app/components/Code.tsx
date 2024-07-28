interface CodeProps {
  children: string;
}

const Code = ({ children }: CodeProps) => {
  return (
    <code className="px-1 mx-0.5 rounded-sm bg-black bg-opacity-10 font-mono">
      {children}
    </code>
  );
};

export default Code;
