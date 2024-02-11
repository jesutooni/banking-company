import Link from "next/link";
import Icon from "./global/Icon";
import Button from "./global/button";

const TheHeader = () => {
  const navs = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Careers",
      path: "/career",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Security",
      path: "/security",
    },
  ];
  return (
    <header className="pt-[30px] px-4">
      <nav className="max-w-screen-xl mx-auto rounded-full px-3.5 sm:px-6 py-3.5 bg-grey-11 flex justify-between items-center">
        <div>
          <div className="hidden md:block">
            <Icon name="AppLogoDesktop" width={10} height={10} />
          </div>
          <div className="md:hidden">
            <Icon name="AppLogoMobile" width={10} height={10} />
          </div>
        </div>
        <ul className="hidden md:flex gap-[26px]">
          {navs.map((nav, index) => (
            <li
              key={index}
              className="cursor-pointer text-sm text-white hover:text-green transition-colors duration-300 ease-in-out"
            >
              <Link href={nav.path}>{nav.name}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex items-center">
          <Button theme="transparent" size="sm">
            Sign Up
          </Button>
          <Button size="sm">Login</Button>
        </div>
        <div className="md:hidden w-14 h-10 rounded-full bg-green flex items-center justify-center">
          <Icon name="Hamburger" width={2.5} height={2.5} />
        </div>
      </nav>
    </header>
  );
};

export default TheHeader;
