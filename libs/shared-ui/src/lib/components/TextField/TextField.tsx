import classNames from 'classnames';
import React, {
  useState,
  InputHTMLAttributes,
  ChangeEvent,
  ReactNode,
} from 'react';

interface HeadlessInputFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorText?: string;
  isError?: boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  showClear?: boolean;
}

const HeadlessInputField: React.FC<HeadlessInputFieldProps> = ({
  label,
  helperText,
  errorText,
  isError,
  value,
  onChange,
  prefixIcon,
  suffixIcon,
  showClear = true,
  required,
  ...rest
}) => {
  const [internalValue, setInternalValue] = useState(value || '');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInternalValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const handleClear = () => {
    setInternalValue('');
    if (onChange) {
      onChange({ target: { value: '' } } as ChangeEvent<HTMLInputElement>);
    }
  };

  const textFieldInput = classNames('textField__input', 'font-sm', {
    'textField__input--prefix': prefixIcon && true,
    'textField__input--suffix': suffixIcon && true,
    'textField__input--disabled': rest.disabled,
    'textField__input--error': isError,
  });

  const textFieldWrapper = classNames('textField__wrapper', {
    'textField__wrapper--fullwidth': false,
  });

  const textFieldLabel = classNames('textField__label', {
    'textField__label--error' : isError
  });

  return (
    <div className={textFieldWrapper}>
      <div className={'textField__input-container'}>
        {label && (
          <label htmlFor={rest.id} className={textFieldLabel}>
            {label} {required && <span className="label__required">*</span>}
          </label>
        )}
        <div className="textField__input-inner">
          {prefixIcon && (
            <span className="textField__prefix">{prefixIcon}</span>
          )}
          <input
            {...rest}
            value={internalValue}
            onChange={handleChange}
            aria-invalid={isError}
            aria-describedby={
              (helperText && `${rest.id}-helper`) ||
              (errorText && `${rest.id}-error`)
            }
            className={textFieldInput}
          />
          {showClear && internalValue && (
            <button
              type="button"
              onClick={handleClear}
              className="textField__clear-button"
              aria-label="Clear input"
            >
              &#x2715;
            </button>
          )}
          {suffixIcon && (
            <span className="textField__suffix">{suffixIcon}</span>
          )}
        </div>
        {helperText && !isError && (
          <div id={`${rest.id}-helper`} className="textField__helper-text">
            {helperText}
          </div>
        )}
        {isError && errorText && (
          <div id={`${rest.id}-error`} className="textField__error-text">
            {errorText}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeadlessInputField;
