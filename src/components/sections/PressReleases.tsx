import Image from "next/image";
import releases from "@/data/press";

const PressReleases = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-24">
      <div>
        <h2 className="font-medium text-[28px] md:text-[38px] text-green text-center md:text-left">
          Press Releases
        </h2>
        <p className="text-grey-70 font-light text-sm md:text-base text-center md:text-left mt-2.5">
          Stay updated with the latest happenings and exciting developments at
          YourBank through our press releases.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-[50px] md:mt-[60px]">
        {releases.map((press) => (
          <PressCard key={press.heading} press={press} />
        ))}
      </div>
    </section>
  );
};

export default PressReleases;

interface Press {
  image: string;
  heading: string;
  body: string;
  location: string;
  date: string;
}

const PressCard = ({ press }: { press: Press }) => {
  return (
    <div className="border border-grey-15 bg-grey-11 rounded-t-[40px] rounded-b-2xl p-6">
      <div>
        <Image
        className="w-full"
          src={`/assets/${press.image}.png`}
          alt="press release"
          width={500}
          height={300}
        />
      </div>
      <div className="mt-10">
        <h3 className="text-lg lg:text-xl text-white">{press.heading}</h3>
        <div className="mt-2.5 lg:mt-3.5 flex gap-1.5 text-grey-70 font-light text-sm lg:text-base">
          <div className="py-1.5 px-3.5 rounded-full border border-grey-15 bg-grey-10">
            Location: {press.location}
          </div>
          <div className="py-1.5 px-3.5 rounded-full border border-grey-15 bg-grey-10">
            Date: {press.date}
          </div>
        </div>
        <p className="mt-6 text-grey-70 text-sm lg:text-base">{press.body}</p>
      </div>
    </div>
  );
};
