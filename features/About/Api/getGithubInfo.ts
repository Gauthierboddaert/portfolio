import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const getCommits = async () => {
  const owner = "propriétaire-du-référentiel";
  const repo = "nom-du-référentiel";

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/commits`,
    {
      headers: {
        Authorization: "token VOTRE_JETON_D_ACCÈS_PERSONNEL",
      },
    }
  );
};

type Repo = {
  name: string
  stargazers_count: number
}

// const getRepos = (async (context) => {
//   const owner = "gauthierboddaert";

//   const res = await fetch(`https://api.github.com/users/${owner}/repos`, {
//     headers: {
//       Authorization: `token ${process.env.NEXT_PUBLIC_TOKEN_GITHUB}`,
//     },
//   }

//  }) satisfies GetServerSideProps<{
//   repo: Repo
// }>
// };

export const getServerSideProps = (async (context) => {
  const res = await fetch('https://api.github.com/users/gauthierboddaert/repos')
  const repo = await res.json()
  return { props: { repo } }
}) satisfies GetServerSideProps<{
  repo: Repo
}>

 
export default function Page({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return repo.stargazers_count
}
