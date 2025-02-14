export interface ToggleProps {
  checked: boolean;
  disabled: boolean;
  onClick: (check: boolean, id: string) => void;
  id: string;
  addClass: string;
  ariaLabel?: string;
  variant: ToggleVariant;

  size: ToggleSize;
}

export const enum ToggleVariant {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DESTRUCTIVE = 'destructive',
  NEUTRAL = 'neutral',
}

export const enum ToggleSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}
