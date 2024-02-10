export interface ButtonProps {
  theme?: "primary" | "secondary";
  loading?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}
