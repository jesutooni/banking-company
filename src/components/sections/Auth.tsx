import Image from "next/image";
import Icon from "../global/Icon";

const Auth = ({
  heading,
  teaser,
  children,
}: {
  heading: string;
  teaser: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="mx-4 mt-[30px] md:mt-[50px]">
      <div className="max-w-5xl mx-auto w-full py-20 text-center  border border-grey-15 rounded-2xl px-[30px] relative">
        <div className="absolute top-0 right-0 z-10">
          <Image
            src="/assets/abstract.svg"
            alt="abstract design"
            height={200}
            width={200}
          />
        </div>
        <Image
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          src="/assets/auth-background.png"
          layout="fill"
          objectFit="cover"
          alt="background"
        />
        <div className="mb-[60px]">
          <h1 className="text-green capitalize text-[28px] md:text-4xl font-medium">
            {heading}
          </h1>
          <p className="mt-2.5 md:mt-4 text-grey-75 text-sm md:text-base">
            {teaser}
          </p>
        </div>
        {children}
        <div className="flex items-center justify-center gap-4 mt-6 max-w-[404px] mx-auto">
          <div className="h-[1px] w-full bg-grey-70"></div>
          <p className="text-sm text-grey-70 w-full">Or Continue with</p>
          <div className="h-[1px] w-full bg-grey-70"></div>
        </div>
        <div className="mt-6 flex justify-center items-center gap-5">
          <Icon name="AuthGoogle" size={6} />
          <Icon name="AuthFacebook" size={6} />
          <Icon name="AuthApple" size={6} />
        </div>
      </div>
    </section>
  );
};

export default Auth;
