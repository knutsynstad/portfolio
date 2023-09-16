interface ButtonProps {
  label: string;
  href: string;
}

const Button = ({ label, href }: ButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="px-4 py-2 bg-black text-white text-center no-underline"
    >
      {label}
    </a>
  );
};

export default Button;
