import '@scss/shared/_sidebar.scss';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SidebarProps } from '../sidebar.types';
import Logo from './Logo';
import Routes from './SidebarRoutes';

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  /*
    #####################################
        STATES
    ####################################
    */
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [parentLinkId, setParentLinkId] = useState<string>('');
  const [childLinkId, setChildLinkId] = useState<string>('');
  const { pathname } = useLocation();

  /*
    #####################################
      METHODS
    ####################################
    */
  const updateActiveLinks = () => {
    let foundParentId = '';
    let foundChildId = '';

    items.forEach((item) => {
      if (pathname === item.to) {
        foundParentId = item.id;
      }
      if (item.children) {
        item.children.forEach((child) => {
          if (pathname.includes(child.to)) {
            foundParentId = item.id;
            foundChildId = child.id;
          }
        });
      }
    });

    if (foundParentId && foundChildId) {
      setParentLinkId(foundParentId);
      setChildLinkId(foundChildId);
    } else {
      setParentLinkId(foundParentId);
      setChildLinkId('');
    }
    };
     const handleParentLink = (parentId: string) => {
       setParentLinkId(parentId);
     };

     const handleChildLink = (childId: string) => {
       setChildLinkId(childId);
    };


    

  useEffect(() => {
    updateActiveLinks();
  }, []);


  const sidebarClasses = {
    sidebarToggleClass: isSidebarOpen === false ? 'close' : '',
    sidebarBtnClass: isSidebarOpen === false ? 'rotate' : '',
  };

  return (
    <nav id="sidebar" className={sidebarClasses.sidebarToggleClass}>
      <ul style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Logo
          sidebarClasses={sidebarClasses}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Routes
          items={items}
          parentLinkId={parentLinkId}
          childLinkId={childLinkId}
          handleParentLink={handleParentLink}
          handleChildLink={handleChildLink}
        />
        {/* <Footer /> */}
      </ul>
    </nav>
  );
};

export { Sidebar };
