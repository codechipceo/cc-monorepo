import { SidebarItem } from './sidebar.types';
import {
  LayoutDashboard,
  TextQuote,
  ChevronsDown,
  Container,
  UserRoundPlus,
} from 'lucide-react';

export const sidebarRoutes: SidebarItem[] = [
  {
    label: 'Dashboard',
    to: '/dashboard',
    id: '2',
    icon: <LayoutDashboard fill="none" />,
  },
  { label: 'Quotations', to: '/', id: '1', icon: <TextQuote fill="none" /> },
  {
    label: 'Shipments',
    id: '3',
    to: '/fd',
    icon: <Container fill="none" />,
    children: [
      {
        label: 'Folder',
        to: '/create/folder',
        id: '3-1',
        icon: <ChevronsDown fill="none" />,
      },
      { label: 'Document', to: '/create/document', id: '3-2' },
      { label: 'Project', to: '/create/project', id: '3-3' },
    ],
  },
  {
    label: 'Employees',
    id: '4',
    to: '',
    icon: <UserRoundPlus />,
  },
];
