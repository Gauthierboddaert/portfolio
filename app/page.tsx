import DefaultSection from "@/features/DefaultSection/DefaultSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <DefaultSection
        displayStack={true}
        title="Gauthier Boddaert"
        subTitle=<div className=" text-lg flex justify-center md:text-xl lg:text-3xl">
          <p className="text-nauticalGrey md:text-nauticalCyan">Full-stack &nbsp;</p>
          <p className="text-nauticalGrey">developer</p>
        </div>
      />

      <p>coucou</p>
    </main>
  );
}
