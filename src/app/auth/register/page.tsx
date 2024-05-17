import Input from "@/components/global/Input";
import Button from "@/components/global/button";
import Auth from "@/components/sections/Auth";
import Link from "next/link";

const Register = () => {
  return (
    <Auth
      heading="sign up"
      teaser="Join our community today! Create an account to unlock exclusive features and personalized experiences."
    >
      <div>
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
          <Input placeholder="Enter First Name" />
          <Input placeholder="Enter Last Name" />
          <Input placeholder="Enter your Email" />
          <Input placeholder="Password" icon="eye" />
        </div>
        <div className="space-y-6 max-w-[404px] mx-auto mt-6 md:mt-[30px]">
          <Button size="full">Sign Up</Button>
          <Button size="full" theme="secondary">
            Login
          </Button>
        </div>
      </div>
    </Auth>
  );
};

export default Register;
