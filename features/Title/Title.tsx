type Props = {
  title: string;
  balise?: string;
};

const Title = ({ title, balise }: Props) => {
  return <h1>{title}</h1>;
};

export default Title;
