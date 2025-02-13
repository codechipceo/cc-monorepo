import React from 'react';
import { InputFieldProps } from './InputField.types';

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'input',
  placeholder,
  value,
  onChange,
  errorMessage,
  disabled = false,
  size = 'md',
  className = '',
  ...rest // Allows future props to be passed
}) => {
  return (
    <div className={`inputFieldContainer ${errorMessage ? 'error' : ''} size-${size} ${className}`}>
      <label className="inputLabel">{label}</label>
      {type === 'input' ? (
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="inputField"
          {...rest} // Spread future props
        />
      ) : (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="textareaField"
          {...rest} // Spread future props
        />
      )}
      {errorMessage && <span className="errorMessage">{errorMessage}</span>}
    </div>
  );
};

export default InputField;
