export enum ButtonType {
    SOLID = 'solid',
    GHOST = 'ghost',
    OUTLINE = 'outline',
    LINK = 'link',
}

export enum ButtonVariant {
    PRIMARY = 'primary',
    SUCCESS = 'success',
    DESTRUCTIVE = 'destructive',
    WARNING = 'warning',
    NEUTRAL = 'neutral'
}

export enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

export enum ButtonShape {
    ROUNDED = 'rounded',
    RECTANGLE ='rectangle',
    ELIPSE= 'elipse'
}

export interface ButtonProps {
  type?: ButtonType;
  isIcon?: boolean;
  icon?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  disabled?: boolean;
  isLoading?: boolean;
  addClass?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  btnType: 'button' | 'submit';
}