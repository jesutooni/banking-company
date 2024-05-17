import Input from "@/components/global/Input";
import Button from "@/components/global/button";
import Auth from "@/components/sections/Auth";
import Link from "next/link";

const Login = () => {
  return (
    <Auth
      heading="login"
      teaser="Welcome back! Please log in to access your account."
    >
      <div>
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6 mb-6 md:mb-[30px]">
          <Input placeholder="Enter your Email" />
          <Input placeholder="Password" icon="eye" />
        </div>
        <Link href="#" className="text-white underline text-base">
          Forgot Password?
        </Link>
        <div className="space-y-6 max-w-[404px] mx-auto mt-6 md:mt-[30px]">
          <Button size="full">Login</Button>
          <Button size="full" theme="secondary">
            Sign Up
          </Button>
        </div>
      </div>
    </Auth>
  );
};

export default Login;
