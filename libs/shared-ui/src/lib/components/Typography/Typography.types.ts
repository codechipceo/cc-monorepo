import { JSX } from 'react';
export interface TypographyProps {
  variant?:
    | 'display-2xl'
    | 'display-xl'
    | 'display-lg'
    | 'display-md'
    | 'display-sm'
    | 'display-xs'
    | 'xl'
    | 'lg'
    | 'md'
    | 'sm'
    | 'xs';
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  transform?: 'uppercase' | 'lowercase' | 'capitalize';
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  addClass?: string;
}
