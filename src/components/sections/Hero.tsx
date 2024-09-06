import Image from "next/image";

interface HeroInfo {
  teaser?: string;
  heading: string;
  description: string;
  image: string;
}

const Hero = ({ teaser, heading, description, image }: HeroInfo) => {
  const headings = heading.split("&");
  return (
    <div className="max-w-screen-xl mx-auto px-6">
      <div className="bg-grey-11 p-10 rounded-[20px] mt-12 relative">
        <div className="absolute top-0 right-0">
          <Image
            src="/assets/abstract.svg"
            alt="abstract design"
            height={200}
            width={200}
          />
        </div>
        <div className="bg-grey-10 p-6 md:p-10 lg:p-14 rounded-[20px] md:rounded-tl-[20px] md:rounded-tr-none md:rounded-br-[60px] md:rounded-bl-[20px] max-w-[658px] absolute   md:top-10 md:left-10 z-20 text-center md:text-left">
          <p className="text-sm md:text-lg text-white">{teaser}</p>
          <h2 className="text-white font-medium text-[28px] md:text-4xl lg:text-5xl leading-9 md:leading-10 lg:leading-[62px]">
            {headings[0]}
            <br />
            <span className=" text-green">{headings[1]}</span>
          </h2>
          <p className="text-grey-70 mt-3.5 md:mt-5 text-sm md:text-base font-light leading-5 md:leading-6">
            {description}
          </p>
        </div>
        <div className="flex justify-end relative z-10">
          <Image
            src={`/assets/${image}.png`}
            alt="hero bg"
            width={715}
            height={568}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
