import React from 'react';
import { ChipBadgeProps } from './ChipBadge.types';

const ChipBadge: React.FC<ChipBadgeProps> = ({ label, variant, onClose, color = 'default', className = '' }) => {
  return (
    <div className={`chipBadge ${variant} ${color} ${className}`}>
      <span className="label">{label}</span>
      {variant === 'chip' && onClose && (
        <button className="closeButton" onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
};

export default ChipBadge;
