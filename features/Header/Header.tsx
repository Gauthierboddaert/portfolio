import Link from "next/link";

const Header = () => {
  return (
    <div className="container flex w-full gap-3 justify-end py-5 text-lg fixed z-50 font-semibold">
      <Link style={{color:'white'}} href={'/portfolio'}>Portfolio </Link>
      <Link style={{color:'white'}} href={'/about'}>About </Link>
      <Link style={{color:'white'}} href={'/contact'}>Contact </Link>
    </div>
  );
};

export default Header;
