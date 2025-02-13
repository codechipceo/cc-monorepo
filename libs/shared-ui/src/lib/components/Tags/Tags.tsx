import React from 'react';
import { ChipBadgeProps } from './Tags.types';
import classNames from 'classnames';

const ChipBadge: React.FC<ChipBadgeProps> = ({id,  label, tagType, onClose, variant = 'neutral', className , shape='rectangle', size='small' }) => {
  const chipBadgeClass = classNames(
    'tags',
    'font-md',
    `tags--${variant}`,
    `tags--${tagType}`,
    {
      'tags--ellipse': shape === 'ellipse',
      'tags--rectangle': shape === 'rectangle',
      'tags--small': size === 'small',
      'tags--medium': size === 'medium',
      'tags--large': size === 'large',
    },
    className // Allows custom classes to be passed
  );



  return (
    <div className={chipBadgeClass}>
      <span className="tags__label">{label}</span>
      {tagType === 'chip' && onClose && (
        <button
          className="tags__close-button"
          onClick={(event) => onClose(id, event)}
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default ChipBadge;
