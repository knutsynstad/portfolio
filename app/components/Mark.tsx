interface MarkProps {
  children?: string | JSX.Element;
}

const Mark = (props: MarkProps) => {
  const { children } = props;
  return (
    <span className="my-0 mx-[-0.2em] py-[0.2em] px-[0.2em] rounded-tl-[1em] rounded-tr-[0.4em] rounded-bl-[0.4em] rounded-br-[1em] bg-[rgba(241,215,74,0.4)] box-decoration-clone mix-bled-multiply">
      {children}
    </span>
  );
};

export default Mark;
