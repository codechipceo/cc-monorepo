export interface InputFieldProps {
  label: string;
  type?: 'input' | 'textarea';
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errorMessage?: string;
  disabled?: boolean;
  size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  className?: string;
  [key: string]: any; // Allow future props
}
