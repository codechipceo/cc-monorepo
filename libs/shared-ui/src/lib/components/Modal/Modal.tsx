import React, { useEffect } from 'react';
import classNames from 'classnames';
import { ModalSize, ModalPosition, ModalVariant, ModalProps } from './Modal.types';

const modalProperties: Record<ModalVariant, string> = {
  [ModalVariant.DEFAULT]: 'DS__modal--default',
  [ModalVariant.ALERT]: 'DS__modal--alert',
  [ModalVariant.CONFIRM]: 'DS__modal--confirm',
  [ModalVariant.INFO]: 'DS__modal--info',
  [ModalVariant.WARNING]: 'DS__modal--warning',
};

const Modal: React.FC<ModalProps> = ({
  isOpen = false,
  onClose,
  title,
  children,
  size = ModalSize.MEDIUM,
  position = ModalPosition.CENTER,
  variant = ModalVariant.DEFAULT,
  closeOnOverlayClick = true,
  closeOnEscPress = true,
  showCloseButton = true,
  preventScroll = true,
  showHeader = true,
  showFooter = false,
  footerContent,
  ariaLabel,
  ariaDescribedBy,
}) => {
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEscPress) {
        onClose();
      }
    };

    if (isOpen && closeOnEscPress) {
      document.addEventListener('keydown', handleEscKey);
    }

    if (preventScroll) {
      document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeOnEscPress, onClose, preventScroll]);

  if (!isOpen) return null;

  const modalClass = classNames(
    'DS__modal',
    `DS__modal--${size}`,
    `DS__modal--${position}`,
    modalProperties[variant]
  );

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };

  return (
    <div 
      className="DS__modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
    >
      <div className={modalClass}>
        {showHeader && (
          <div className="DS__modal-header">
            {title && <h2 className="DS__modal-title">{title}</h2>}
            {showCloseButton && (
              <button 
                className="DS__modal-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                ×
              </button>
            )}
          </div>
        )}

        <div className="DS__modal-content">
          {children}
        </div>

        {showFooter && (
          <div className="DS__modal-footer">
            {footerContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;