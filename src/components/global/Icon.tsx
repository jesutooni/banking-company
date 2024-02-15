import { IconProps } from "@/types";
import Image from "next/image";

const Icon: React.FC<IconProps> = ({ name, alt, size = 2 }) => {
  return (
    <div>
      <Image
        src={`/assets/icons/${name}.svg`}
        alt={alt || name}
        width={size * 10}
        height={size * 10}
      />
    </div>
  );
};

export default Icon;
