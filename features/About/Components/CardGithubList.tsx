import CardGithubStats from "./CardGithubStats";

const CardGithubList = () => {
    return (
        <div className=" py-2 container flex gap-4 flex-wrap justify-center">
                <CardGithubStats title="Number of commit" data="100"/>
                <CardGithubStats title="Number of repository" data="200"/>
                <CardGithubStats title="Member since" data="2019"/>
                <CardGithubStats title="Member since" data="2019"/>
        </div>
    )
}

export default CardGithubList;