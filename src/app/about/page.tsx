import Hero from "@/components/sections/Hero";
import MissionVision from "@/components/sections/MissionVision";
import PressReleases from "@/components/sections/PressReleases";

const AboutPage = () => {
  return (
    <main>
      <Hero
        teaser="Welcome to YourBank"
        heading="Where Banking Meets & Excellence!"
        description="At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence."
        image="about-hero-bg"
      />
      <MissionVision />
      <PressReleases />
    </main>
  );
};

export default AboutPage;
