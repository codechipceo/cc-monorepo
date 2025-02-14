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
  isIcon = false,
  variant = ButtonVariant.PRIMARY,
  type = ButtonType.SOLID,
  size = ButtonSize.SMALL,
  shape = ButtonShape.ROUNDED,
  isLoading = false,
  disabled = false,
  addClass,
  icon,
  onClick,
  children,
  ...props
}) => {


  const buttonClass = classNames(
    addClass,
    `DS__btn DS__btn--${size}`,
    `DS__btn--${shape}`,
    {
      'DS__btn--circle--small' : isIcon === true  && ButtonSize.SMALL === size,
      'DS__btn--circle--medium' : isIcon === true  && ButtonSize.MEDIUM === size,
      'DS__btn--circle--large' : isIcon === true  && ButtonSize.LARGE === size,
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
  if (isIcon && !icon) {
    return 'Please pass svg Icon if isIcon is true'
  }
  return (
    <div className={''}>
      <button
        onClick={handleClickWrapper}
        className={buttonClass}
        disabled={disabled || isLoading}
        {...props}
      >
        {' '}
        {isLoading ? (
          <span className="DS__btn__loader"></span>
        ) : isIcon && icon ? (
          <span className="DS__btn__icon">{icon}</span>
        ) : (
          children
        )}
      </button>
    </div>
  );
};

export default Button;
