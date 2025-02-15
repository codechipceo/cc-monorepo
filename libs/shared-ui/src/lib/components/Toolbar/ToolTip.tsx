import Popover from '../Popover/Popover';

import { Alignment, Side } from '../Popover/Popover.types';
import { ToolTipProps } from './Tooltip.types';


const ToolTipContent = ({ label }: { label: string }) => {
  return (
    <div className="DS__tooltip__content">
      <p>{label}</p>
    </div>
  );
};

const ToolTip = ({
  label,
  children,
  animate = false,
  side = Side.TOP,
  align= Alignment.CENTER,
  offset = 0,
}: ToolTipProps) => {
  return (
    <Popover
      trigger={children}
      content={<ToolTipContent label={label} />}
      showArrow={false}
      triggerOnHover={true}
      animate={animate}
      side={side}
      align={align}
      offset={offset}
    />
  );
};

export default ToolTip;
