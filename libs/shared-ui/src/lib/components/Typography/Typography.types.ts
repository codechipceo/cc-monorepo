export interface TypographyProps {
    variant?: 'display2xl' | 'displayxl' | 'displaylg' | 'displaymd' | 'displaysm' | 'displayxs' |
              'textxl' | 'textlg' | 'textmd' | 'textsm' | 'textxs' | 'label';
    children: React.ReactNode;
    color?: string;
    align?: 'left' | 'center' | 'right';
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';
    className?: string;
  }
  