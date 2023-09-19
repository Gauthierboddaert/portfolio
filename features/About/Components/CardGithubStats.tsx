interface Props {
  data: string;
  title: string;
}

const CardGithubStats = ({ data, title }: Props) => {

  console.log()

  return <div className="w-[280px] h-[250px] border-[3px] rounded-tl-lg rounded-br-lg border-nauticalGrey shadow-sm flex flex-col items-center justify-center gap-3">
    <h1 className=" font-bold">{title}</h1>
    <p>{data}</p>
  </div>;
};

export default CardGithubStats;
