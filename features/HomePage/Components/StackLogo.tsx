import Symfony from "../../../public/symfony.png";
import Docker from "../../../public/docker.png";
import React from "../../../public/react.png";
import Image from "next/image";

const StackLogo = () => {
  return (
    <div className="flex flex-col items-center absolute top-32 left-12 sm-1:top-52 sm:top-64 md:top-80">
      <div className="w-fit flex gap-6 justify-center">
        <Image
          className=" w-16 h-20 lg:h-[110px] lg=w-[90px] lg:w-24"
          alt="Symfony"
          src={Symfony}
        />
        <Image
          className="w-[75px] h-20 lg:h-[110px] lg=w-[180px] lg:w-[110px]"
          alt="React"
          src={React}
        />
      </div>
      <Image
        className="w-20 h-20 lg:h-[110px] lg=w-[180px] lg:w-28"
        alt="Docker"
        src={Docker}
      />
    </div>
  );
};

export default StackLogo;
