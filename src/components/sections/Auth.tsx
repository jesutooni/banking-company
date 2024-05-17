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
    <section className="max-w-5xl mx-auto w-full py-20 text-center">
      <div className="mb-[60px]">
        <h1 className="text-green capitalize text-4xl font-medium">
          {heading}
        </h1>
        <p className="mt-4 text-grey-75">{teaser}</p>
      </div>
      {children}
      <div className="flex items-center justify-center gap-4 mt-6">
        <div className="h-[1px] w-32 bg-grey-70"></div>
        <p className="text-sm text-grey-70">Or Continue with</p>
        <div className="h-[1px] w-32 bg-grey-70"></div>
      </div>
      <div className="mt-6 flex justify-center items-center gap-5">
        <Icon name="AuthGoogle" size={6} />
        <Icon name="AuthFacebook" size={6} />
        <Icon name="AuthApple" size={6} />
      </div>
    </section>
  );
};

export default Auth;
