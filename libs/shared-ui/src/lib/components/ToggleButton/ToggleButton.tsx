import React, { useState } from 'react';
import classNames from 'classnames';


export interface ToggleButtonProps {
  id?: string;
  disabled: boolean;
  variant?: 'primary' | 'success' | 'neutral' | 'warning' | 'destructive';
  size?: 'small' | 'medium' ;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  ariaLabel?: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  defaultChecked = false,
  onChange,
  ariaLabel = 'Toggle button',
  disabled =false
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  const buttonClasses = classNames('toggle-button', {
    [`toggle-button--${variant}`]: variant,
    [`toggle-button--${size}`]: size,
    'toggle-button--checked': checked,
  });

  const thumbClasses = classNames('toggle-button__thumb', {
    'toggle-button__thumb--checked': checked,
  });

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      className={buttonClasses}
      disabled={disabled}
      onClick={handleToggle}
    >
      <span className={thumbClasses} />
    </button>
  );
};

export default ToggleButton;
