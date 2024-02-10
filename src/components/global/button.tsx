import { ButtonProps } from "@/types";
import { SyncLoader } from "react-spinners";

const Button: React.FC<ButtonProps> = ({
  theme = "primary",
  loading = false,
  disabled,
  size = "md",
  children,
}) => {
  const themes = {
    primary: "bg-green text-grey-15",
    secondary: "bg-grey-15 text-white",
  };
  const sizes = {
    sm: "py-2 px-4",
    md: "py-3.5 px-6",
    lg: "py-4 px-8",
  };
  return (
    <button
      className={`${themes[theme]} ${sizes[size]} rounded-full text-lg font-normal text-center`}
      disabled={disabled || loading}
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
