import { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  variant?: "primary" | "secondaryColor" | "secondaryGrey" | "tertiaryColor" | "tertiaryGrey" | "linkGrey" | "linkColor";
  state?: "default" | "disabled" | "focused" | "hover";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  className?: string;
}