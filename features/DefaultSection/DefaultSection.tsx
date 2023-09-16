"use client";

import { ReactNode } from "react";
import PuddleGradient from "../Svg/PuddleGradient";
import Title from "../Title/Title";

interface Props {
  title: string;
  subTitle?: ReactNode;
}

const DefaultSection = ({ title, subTitle }: Props) => {
  return (
    <div className="flex w-full h-screen overflow-hidden relative">
      <div className="w-2/12"></div>
      <div className="w-10/12">
        <div className="absolute top-28 z-30 lg:left-[300px] lg:top-48">
          <Title
            className=" text-xl font-semibold text-nauticalGrey md:text-3xl lg:text-5xl"
            title={title}
          />
          {subTitle}
        </div>
        <PuddleGradient />
      </div>
    </div>
  );
};

export default DefaultSection;
