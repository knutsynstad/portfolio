interface ButtonGroupProps {
  children: React.ReactNode | React.ReactNode[];
}

const ButtonGroup = ({ children }: ButtonGroupProps) => {
  return <div className="grid grid-cols-12 gap-6">{children}</div>;
};

export default ButtonGroup;
