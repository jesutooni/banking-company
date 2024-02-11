import { IconProps } from "@/types";
import Image from "next/image";

const Icon: React.FC<IconProps> = ({
  name,
  alt,
  width = 20,
  height = 20,
}) => {
  return (
    <div>
      <Image
        src={`/assets/icons/${name}.svg`}
        alt={alt || name}
        width={width * 10}
        height={height * 10}
      />
    </div>
  );
};

export default Icon;