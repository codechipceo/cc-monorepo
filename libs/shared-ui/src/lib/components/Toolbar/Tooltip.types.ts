import { ReactNode } from "react";
import { Alignment, Side } from "../Popover/Popover.types";

export interface ToolTipProps {
  label: string;
  children: ReactNode;
  triggerOnHover?: boolean;
  animate?: boolean;
  side: Side;
  align: Alignment;
  offset?: number;
}
