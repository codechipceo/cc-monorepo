export enum ModalSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    FULL = 'full'
}

export enum ModalPosition {
    CENTER = 'center',
    TOP = 'top',
    BOTTOM = 'bottom',
    LEFT = 'left',
    RIGHT = 'right'
}

export enum ModalVariant {
    DEFAULT = 'default',
    ALERT = 'alert',
    CONFIRM = 'confirm',
    INFO = 'info',
    WARNING = 'warning'
}

// export enum ModalAnimation {
//     FADE = 'fade',
//     SLIDE = 'slide',
//     ZOOM = 'zoom',
//     NONE = 'none'
// }

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    
    size?: ModalSize;
    position?: ModalPosition;
    variant?: ModalVariant;
    // animation?: ModalAnimation;
    
    closeOnOverlayClick?: boolean;
    closeOnEscPress?: boolean;
    showCloseButton?: boolean;
    preventScroll?: boolean;
    
    // Header/Footer configuration
    showHeader?: boolean;
    showFooter?: boolean;
    footerContent?: React.ReactNode;
    
    // Accessibility
    ariaLabel?: string;
    ariaDescribedBy?: string;
}