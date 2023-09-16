type Props = {
  title?: string;
  balise?: string;
  className?: string
};

const Title = ({ title, balise, className }: Props) => {
  return <h1 className={className}>{title}</h1>;
};

export default Title;
