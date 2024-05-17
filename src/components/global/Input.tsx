import { InputProps } from "@/types";
import Icon from "./Icon";

const Input: React.FC<InputProps> = ({ placeholder, icon }) => {
  return (
    <div className="border border-grey-15 px-5 rounded-full flex items-center">
      <input
        type="text"
        className="bg-transparent w-full h-16 placeholder:text-grey-35 text-white-90"
        placeholder={placeholder}
      />
      {icon && (
        <div className="cursor-pointer">
          <Icon name="eye" />
        </div>
      )}
    </div>
  );
};

export default Input;
