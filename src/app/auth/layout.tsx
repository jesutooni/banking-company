import Testimonials from "@/components/sections/Testimonials";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Testimonials />
    </div>
  );
};

export default layout;
