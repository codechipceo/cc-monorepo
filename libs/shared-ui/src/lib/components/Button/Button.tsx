import React from 'react';
import { ButtonProps } from './Button.types';
// import '../../scss/global/components/_button.scss';
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  disabled = false,
  size = 'md',
  className,
  fullWidth,
  isLoading,
  leftIcon,
  rightIcon,
  state,
}) => {
  return <button>{children}</button>;
};

export default Button;
