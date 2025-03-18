import { SidebarItem } from "./sidebar.types";
import { House, LayoutDashboard, TextQuote, ChevronsDown } from 'lucide-react';

export const sidebarRoutes: SidebarItem[] = [
  { label: 'Home', to: '/', id: '1', icon: <House fill="none" /> },
  {
    label: 'Dashboard',
    to: '/dashboard',
    id: '2',
    icon: <LayoutDashboard fill="none" />,
  },
  {
    label: 'Create',
    id: '3',
    to: '/fd',
    icon: <TextQuote fill="none" />,
    children: [
      { label: 'Folder', to: '/create/folder', id: '3-1', icon: <ChevronsDown fill="none" /> },
      { label: 'Document', to: '/create/document', id: '3-2' },
      { label: 'Project', to: '/create/project', id: '3-3' },
    ],
  },
  {
    label: 'Todo-Lists',
    id: '4',
    to: '',
    children: [
      { label: 'Work', to: '/todos/work', id: '4-1' },
      { label: 'Private', to: '/todos/private', id: '4-2' },
    ],
  },
];
