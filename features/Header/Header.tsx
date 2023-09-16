import Link from "next/link";

const Header = () => {
  return (
    <div className="pr-12 hidden w-full gap-3 justify-end py-5 text-lg fixed z-50 font-semibold md:flex">
      <Link className="text-white" href={'/'}>Accueil </Link>
      <Link className="text-white" href={'/portfolio'}>Portfolio </Link>
      <Link className="text-white" href={'/about'}>About </Link>
      <Link className="text-white" href={'/contact'}>Contact </Link>
    </div>
  );
};

export default Header;
