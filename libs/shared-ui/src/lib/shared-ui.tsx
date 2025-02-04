import React from 'react';


export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
}) => {
  return (
    <button
 
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
