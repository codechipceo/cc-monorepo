import { ReactNode } from "react";

export interface LogoProps {
  sidebarClasses: { sidebarBtnClass: string };
  isSidebarOpen: boolean;
  setIsSidebarOpen: (state: boolean) => void;
}

export interface RoutesProps {
  items: SidebarItem[];
  parentLinkId: string;
  childLinkId: string;
  handleParentLink: (parentId: string) => void;
  handleChildLink: (childId: string) => void;
}


export interface SidebarItem {
  label: string;
  to: string;
  children?: SidebarItem[];
  icon?: ReactNode;
  id: string;
}

export interface SidebarProps {
  items: SidebarItem[];
}