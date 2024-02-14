import AppLogo from "../AppLogo";
import Link from "next/link";
import Icon from "../global/Icon";

const TheFooter = () => {
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

  const contacts = [
    {
      icon: "message",
      text: "hello@skillbirdge.com",
    },
    {
      icon: "phone",
      text: "+234 123 456 7890",
    },
    {
      icon: "location",
      text: "Somewhere in the World",
    },
  ];

  const socials = [
    {
      icon: "facebook",
      path: "https://www.facebook.com",
    },
    {
      icon: "twitter",
      path: "https://www.twitter.com",
    },
    {
      icon: "linkedin",
      path: "https://www.linkedin.com",
    },
  ];
  return (
    <footer className="bg-grey-11 pt-[50px] md:pt-[60px] pb-[30px] px-4">
      <div className="max-w-screen-xl mx-auto space-y-[30px] md:space-y-10">
        <div className="flex flex-col gap-6 md:gap-10 items-center">
          <AppLogo />
          <ul className="flex gap-3.5">
            {navs.map((nav, index) => (
              <li
                key={index}
                className="cursor-pointer text-base text-white hover:text-green transition-colors duration-300 ease-in-out"
              >
                <Link href={nav.path}>{nav.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="py-[30px] md:py-10 px-6 border-b border-t border-grey-15 flex flex-wrap justify-center gap-5">
          {contacts.map((contact, index) => (
            <Contact key={index} icon={contact.icon} text={contact.text} />
          ))}
        </div>

        <div className="bg-grey-10 flex flex-col md:flex-row gap-5 items-center justify-between  rounded-xl md:rounded-full pt-12 pb-[30px] md:p-3 text-grey-70 text-sm font-light relative border border-grey-15">
          <div className="flex gap-2 absolute md:static -top-[22px]">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.path}
                target="_blank"
                className="w-11 h-11 rounded-full bg-green flex items-center justify-center"
              >
                <Icon name={social.icon} />
              </a>
            ))}
          </div>
          <p>YourBank All Rights Reserved</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;

const Contact = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <div className="flex gap-1.5 items-center">
      <Icon name={icon} />
      <span className=" text-white">{text}</span>
    </div>
  );
};
