'use client'

import { ButtonProps } from "@/types";
import { useRouter } from "next/navigation";
import { SyncLoader } from "react-spinners";

const Button: React.FC<ButtonProps> = ({
  theme = "primary",
  loading = false,
  disabled,
  size = "sm",
  children,
  href,
}) => {
  const router = useRouter();
  const themes = {
    primary: "bg-green text-grey-11",
    secondary: "bg-grey-15 text-white",
    transparent: "bg-transparent text-white",
  };
  const sizes = {
    sm: "py-3 px-6 text-sm",
    lg: "py-4 px-8 text-lg",
    full: "w-full py-3.5 px-6 text-sm",
  };
  return (
    <button
      className={`${themes[theme]} ${sizes[size]} rounded-full font-normal text-center`}
      disabled={disabled || loading}
      onClick={() => href && router.push(href)}
    >
      {loading ? (
        <SyncLoader color="#fff" loading={loading} size={8} />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
