import React from 'react';
import styles from './Typography-ui.module.scss';
import { TypographyProps } from './Typography.types';

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  children,
  color,
  align = 'left',
  weight = 'normal',
  className,
}) => {
  return (
    <p
      className={[
        styles[`typography-${variant}`],
        styles[`typography-weight-${weight}`],
        styles[`typography-align-${align}`],
        className
      ].filter(Boolean).join(' ')}
      style={{ color }} // Only color is passed as inline style
    >
      {children}
    </p>
  );
};

export default Typography;
