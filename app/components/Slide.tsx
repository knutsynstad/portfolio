interface SlideProps {
  children: React.ReactNode;
}

const Slide = ({ children }: SlideProps) => {
  return (
    <div className="relative w-full flex-shrink-0 transition-all ease-out duration-300">
      {children}
    </div>
  );
};

export default Slide;
