import Page from "@/features/About/Api/getGithubInfo";
import getRepos from "@/features/About/Api/getGithubInfo";
import CardGithubList from "@/features/About/Components/CardGithubList";
import DefaultSection from "@/features/DefaultSection/DefaultSection";

const About = () => {

    Page()
    return (<>

        <DefaultSection title="About myself" />
        <h1 className=" text-center pb-12 text-3xl text-nauticalGrey">Github infos</h1>
        <CardGithubList />
    </>)
}

export default About;