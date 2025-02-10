import React from 'react';
import { CheckboxProps } from './Checkbox.types';


export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  className = '',
}) => {
  return (
    <label className={`checkboxContainer ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`checkbox`}
      />
      <span className={'checkmark'}></span>
      {label && <span className={'label'}>{label}</span>}
    </label>
  );
};

export default Checkbox;
