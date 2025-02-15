import * as Popover from '@radix-ui/react-popover';
import classNames from 'classnames';
import { ReactNode, useState } from 'react';
import { Alignment, Side } from './Popover.types';


interface CustomPopoverProps  {
  trigger: ReactNode;
  content: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  animate?: boolean;
  showArrow?: boolean;
  triggerOnHover?: boolean;
  side: Side;
  align: Alignment;
  offset?: number;
}

const CustomPopover = ({
  trigger,
  content,
  open: controlledOpen,
  side = Side.BOTTOM,
  align = Alignment.CENTER,
  offset = 10,
  animate = false,
  onOpenChange,

  triggerOnHover = false,
}: CustomPopoverProps) => {
  const [hoverOpen, setHoverOpen] = useState(false);
  const popoverClass = classNames({
    'popover-content': animate,
  });

  return (
    <Popover.Root
      open={triggerOnHover ? hoverOpen : controlledOpen}
      onOpenChange={(open) => {
        if (!triggerOnHover) {
          onOpenChange?.(open);
        }
      }}
    >
      <Popover.Trigger
        asChild
        onMouseEnter={() => triggerOnHover && setHoverOpen(true)}
        onMouseLeave={() => triggerOnHover && setHoverOpen(false)}
      >
        {trigger}
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className={popoverClass}
          side={side}
          align={align}
          sideOffset={offset}
          collisionPadding={10}
          onMouseEnter={() => triggerOnHover && setHoverOpen(true)}
          onMouseLeave={() => triggerOnHover && setHoverOpen(false)}
        >
          {content}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
export  default CustomPopover