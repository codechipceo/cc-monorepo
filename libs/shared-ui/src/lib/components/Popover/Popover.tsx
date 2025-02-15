import * as Popover from '@radix-ui/react-popover';
import { ReactNode, useState } from 'react';

interface CustomPopoverProps {
  trigger: ReactNode;
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  showArrow?: boolean;
  triggerOnHover?: boolean;
}

const CustomPopover = ({
  trigger,
  children,
  open: controlledOpen,
  onOpenChange,
  showArrow = false,
  triggerOnHover = false, 
}: CustomPopoverProps) => {
  const [hoverOpen, setHoverOpen] = useState(false);

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
          className="popover-content"
          side="bottom"
          align="center"
          sideOffset={5}
          collisionPadding={10}
          onMouseEnter={() => triggerOnHover && setHoverOpen(true)}
          onMouseLeave={() => triggerOnHover && setHoverOpen(false)}
        >
          {children}
          {showArrow && <Popover.Arrow className="popover-arrow" />}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
export  default CustomPopover