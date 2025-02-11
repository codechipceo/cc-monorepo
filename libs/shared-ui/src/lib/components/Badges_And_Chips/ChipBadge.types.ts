export interface ChipBadgeProps {
    label: string;
    variant: 'badge' | 'chip';
    onClose?: () => void;
    color?: 'primary' | 'destructive' | 'success' | 'warning' | 'neutral';
    className?: string;
  }
  