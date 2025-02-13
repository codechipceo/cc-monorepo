import React from 'react';
import classNames from 'classnames';
import { TypographyProps } from './Typography.types';


const Typography: React.FC<TypographyProps> = ({
  variant = 'md',
  weight = 'regular',
  align,
  transform,
  as: Component = 'p',
  children,
  addClass,
}) => {
const typographyClasses = classNames({
  [`font-${variant}`]: true,
  [`font-${weight}`]: !!weight,
  [`font-${align}`]: !!align,
  [`font-${transform}`]: !!transform,
  addClass

});


  return <Component className={typographyClasses}>{children}</Component>;
};

export default Typography;
