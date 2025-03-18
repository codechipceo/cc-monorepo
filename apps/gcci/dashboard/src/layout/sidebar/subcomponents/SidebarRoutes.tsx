import { ChevronDown } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { RoutesProps, SidebarItem } from '../sidebar.types';

const Routes: React.FC<RoutesProps> = ({
  items,
  parentLinkId,
  childLinkId,
  handleParentLink,
  handleChildLink,
}) => {
  const toggleSubMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const subMenu = button.nextElementSibling;
    if (subMenu) {
      subMenu.classList.toggle('show');
      button.classList.toggle('rotate');
    }
  };

  const renderSidebarItem = (item: SidebarItem, index: number) => {
    if (item.children && item.children.length > 0) {
      return (
        <li key={index}>
          <button
            onClick={toggleSubMenu}
            className={
              parentLinkId === item.id
                ? 'dropdown-btn parent-active'
                : 'dropdown-btn'
            }
          >
            {item.icon}
            <span className="link-flex"> {item.label}</span>
            <ChevronDown fill="none" />
            {/* Your SVG Icon */}
          </button>
          <ul className="sub-menu">
            <div>
              {item.children.map((child, childIndex) => (
                <li
                  key={childIndex}
                  onClick={() => {
                    handleParentLink(item.id);
                    handleChildLink(child.id);
                  }}
                  className={childLinkId === child.id ? 'active ' : ''}
                >
                    <NavLink to={child.to}>
                  <span className='link-flex'>
                      {child.icon}

                      {child.label}
                  </span>
                    </NavLink>
                </li>
              ))}
            </div>
          </ul>
        </li>
      );
    } else {
      return (
        <li
          key={index}
          onClick={() => {
            handleParentLink(item.id);
            handleChildLink('');
          }}
          className={parentLinkId === item.id ? 'active' : ''}
        >
          <NavLink to={item.to}>
            {item.icon}
            <span className="link-flex">{item.label}</span>
          </NavLink>
        </li>
      );
    }
  };

  return <ul>{items.map(renderSidebarItem)}</ul>;
};

export default Routes;
