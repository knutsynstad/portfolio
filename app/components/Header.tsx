interface H2Props {
  label: string;
}

const H2 = ({ label }: H2Props) => {
  return <h2 className="p-2 bg-black text-white text-center">{label}</h2>;
};

export default H2;
