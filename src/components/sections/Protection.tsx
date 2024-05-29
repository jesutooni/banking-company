import protections from "@/data/protection";
import Icon from "../global/Icon";
import Image from "next/image";

const Protection = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-28">
      <div>
        <h2 className="font-medium text-[28px] md:text-[38px] text-white text-center md:text-left">
          How We <span className="text-green">Protect You</span>
        </h2>
        <p className="text-grey-70 font-light text-sm md:text-base text-center md:text-left mt-2.5">
          At YourBank, we prioritize the security and confidentiality of your
          financial information. Our state-of-the-art encryption technology and
          stringent data protection measures ensure your assets and transactions
          are safeguarded at all times
        </p>
      </div>
      <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
        {protections.map((protection) => (
          <ProtectionCard key={protection.title} protection={protection} />
        ))}
      </div>
    </section>
  );
};

export default Protection;

interface ProtectionType {
  title: string;
  teaser: string;
  icon: string;
}

const ProtectionCard = ({ protection }: { protection: ProtectionType }) => {
  return (
    <div className="border border-grey-15 rounded-[20px] p-6 md:p-9 relative">
      <div className="flex items-center gap-3.5">
        <Icon name={protection.icon} size={7} />
        <h3 className="text-white text-sm md:text-lg">{protection.title}</h3>
      </div>
      <p className="text-grey-70 font-light text-xs md:text-base mt-5">
        {protection.teaser}
      </p>
      <Image className="absolute inset-0 opacity-50 mix-blend-screen"
        src="/assets/protection-background.png"
        layout="fill"
        objectFit="cover"
        alt="background"
      />
    </div>
  );
};
