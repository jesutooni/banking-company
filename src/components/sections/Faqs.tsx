import faqs from "@/data/faq";

const Faqs = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-14">
      <div>
        <h2 className="font-medium text-[28px] md:text-[38px] text-white text-center md:text-left">
          <span className="text-green">Frequently</span> Asked Questions
        </h2>
        <p className="text-grey-70 font-light text-sm md:text-base text-center md:text-left mt-2.5">
          Still you have any questions? Contact our Team via
          support@yourbank.com
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-[50px] md:mt-[60px]">
        {faqs.map((faq) => (
          <FaqCard key={faq.question} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;

interface FaqType {
  question: string;
  answer: string;
}

const FaqCard = ({ faq }: { faq: FaqType }) => {
  return (
    <div className="border border-grey-15 rounded-[10px] p-6 md:p-9">
      <h3 className="text-white font-medium text-sm md:text-lg">{faq.question}</h3>
      <div className="my-5 md:my-6 border border-grey-15"></div>
      <p className="text-grey-70 font-light text-xs md:text-base">{faq.answer}</p>
    </div>
  );
};
