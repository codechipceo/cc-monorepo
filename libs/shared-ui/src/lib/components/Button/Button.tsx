import React from 'react';
import classNames from 'classnames';
import { ButtonType, ButtonVariant , ButtonSize, ButtonShape, ButtonProps} from './Button.types';


const buttonProperties: Record<ButtonType, Record<ButtonVariant, string>> = {
  [ButtonType.SOLID]: {
    [ButtonVariant.NEUTRAL]: `DS__btn__solid DS__btn--neutral`,
    [ButtonVariant.PRIMARY]: `DS__btn__solid DS__btn--primary`,
    [ButtonVariant.SUCCESS]: `DS__btn__solid DS__btn--success`,
    [ButtonVariant.WARNING]: `DS__btn__solid DS__btn--warning`,
    [ButtonVariant.DESTRUCTIVE]: `DS__btn__solid DS__btn--destructive`,
  },
  [ButtonType.GHOST]: {
    [ButtonVariant.NEUTRAL]: `DS__btn__ghost DS__btn--neutral`,
    [ButtonVariant.PRIMARY]: `DS__btn__ghost DS__btn--primary`,
    [ButtonVariant.SUCCESS]: `DS__btn__ghost DS__btn--success`,
    [ButtonVariant.WARNING]: `DS__btn__ghost DS__btn--warning`,
    [ButtonVariant.DESTRUCTIVE]: `DS__btn__ghost DS__btn--destructive`,
  },
  [ButtonType.OUTLINE]: {
    [ButtonVariant.NEUTRAL]: `DS__btn__outline DS__btn--neutral`,
    [ButtonVariant.PRIMARY]: `DS__btn__outline DS__btn--primary`,
    [ButtonVariant.SUCCESS]: `DS__btn__outline DS__btn--success`,
    [ButtonVariant.WARNING]: `DS__btn__outline DS__btn--warning`,
    [ButtonVariant.DESTRUCTIVE]: `DS__btn__outline DS__btn--destructive`,
  },
  [ButtonType.LINK]: {
    [ButtonVariant.NEUTRAL]: `DS__btn__link DS__btn--neutral`,
    [ButtonVariant.PRIMARY]: `DS__btn__link DS__btn--primary`,
    [ButtonVariant.SUCCESS]: `DS__btn__link DS__btn--success`,
    [ButtonVariant.WARNING]: `DS__btn__link DS__btn--warning`,
    [ButtonVariant.DESTRUCTIVE]: `DS__btn__link DS__btn--destructive`,
  }
}

const Button: React.FC<ButtonProps> = ({
  variant = ButtonVariant.PRIMARY,
  type = ButtonType.SOLID,
  size = ButtonShape.ROUNDED,
  shape = ButtonSize.MEDIUM,
  isLoading = false,
  disabled = false,
  addClass,
  onClick,
  children,
  ...props
}) => {


  const buttonClass = classNames(
    addClass,
    `DS__btn DS__btn--${size}`,
    `DS__btn--${shape}`,
    {
      'DS__btn--loading': isLoading,
      'DS__btn--disabled': disabled || isLoading,
      [buttonProperties[type][variant]]: true,
    }
  );

  const handleClickWrapper = (event: React.MouseEvent<HTMLButtonElement>)=>{
    event.stopPropagation();
    if (onClick) {
      onClick(event);
    }
  }
  return (
    <div className={buttonClass}>
      <button onClick={handleClickWrapper} disabled={disabled || isLoading} {...props}>
        {children}
      </button>

   </div>
  );
};

export default Button;
