import DefaultSection from "@/features/DefaultSection/DefaultSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <DefaultSection
        displayStack={true}
        title="Gauthier Boddaert"
        subTitle=<div className="flex justify-center md:text-xl lg:text-3xl">
          <p className="text-nauticalCyan">Full-stack &nbsp;</p>
          <p className="text-nauticalGrey">developer</p>
        </div>
      />

      <p>coucou</p>
    </main>
  );
}
