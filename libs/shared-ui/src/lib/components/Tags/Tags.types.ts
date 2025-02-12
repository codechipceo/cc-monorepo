export interface ChipBadgeProps {
  label: string;
  id: string;
  size?: 'small' | 'medium' | 'large';
  tagType: 'badge' | 'chip';
  onClose?: (id: string, e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'destructive' | 'success' | 'warning' | 'neutral';
  shape?: 'ellipse' | 'rectangle';
  className?: string;
}
