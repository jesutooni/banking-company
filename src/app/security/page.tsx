import Protection from "@/components/sections/Protection";
import Faqs from "@/components/sections/Faqs";
import Hero from "@/components/sections/Hero";

const SecurityPage = () => {
  return (
    <main>
      <Hero
        heading="Your Security is Our & Top Priority"
        description="At YourBank, we understand the importance of keeping your financial
            information secure. We employ robust security measures and advanced
            technologies to protect your personal and financial data. Rest
            assured that when you bank with us, your security is our utmost
            priority."
        image="security-hero-bg"
      />
      <Protection />
      <Faqs />
    </main>
  );
};

export default SecurityPage;
