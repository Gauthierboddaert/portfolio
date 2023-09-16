import { ReactNode } from "react";
import PuddleGradient from "../Svg/PuddleGradient";
import Title from "../Title/Title";
import StackLogo from "../HomePage/Components/StackLogo";

interface Props {
  title: string;
  subTitle?: ReactNode;
  displayStack?: boolean
}

const DefaultSection = ({ title, subTitle, displayStack = false }: Props) => {
  return (
    <div className=" h-[60vh] flex w-full overflow-hidden relative sm-1:h-[65vh] md:h-[88vh] lg:h-screen">
      <div className="w-1/12 sm:w-2/12"></div>
      <div className="w-11/12 sm:w-10/12">
        <div className="absolute top-20 z-30 lg:left-[250px] lg:top-48">
          <Title
            className=" text-3xl font-semibold text-nauticalGrey md:text-3xl lg:text-6xl"
            title={title}
          />
          {subTitle}
          {displayStack ? <StackLogo/> : null}
        </div>
        <PuddleGradient />
      </div>
      
    </div>
  );
};

export default DefaultSection;
