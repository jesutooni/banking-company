export interface ButtonProps {
  theme?: "primary" | "secondary" | "transparent";
  loading?: boolean;
  disabled?: boolean;
  size?: "sm" | "lg";
  children: React.ReactNode;
}

export interface IconProps {
  name: string;
  size?: number;
  alt?: string;
}
