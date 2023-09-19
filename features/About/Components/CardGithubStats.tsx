interface Props {
  data: string;
  title: string;
}

const CardGithubStats = ({ data, title }: Props) => {
  return <div className="w-[300px] h-[250px] border-[3px] rounded-lg border-nauticalGrey shadow-sm flex flex-col items-center justify-center gap-3">
    <h1>{title}</h1>
    <p>{data}</p>
  </div>;
};

export default CardGithubStats;
