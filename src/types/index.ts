export interface ButtonProps {
  theme?: "primary" | "secondary" | "transparent";
  loading?: boolean;
  disabled?: boolean;
  size?: "sm" | "lg" | "full";
  children: React.ReactNode;
}

export interface IconProps {
  name: string;
  size?: number;
  alt?: string;
}

export interface InputProps {
  placeholder: string;
  icon?: string
}
