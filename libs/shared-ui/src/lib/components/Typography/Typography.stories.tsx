import { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';
import { TypographyProps } from './Typography.types';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'display-2xl',
        'display-xl',
        'display-lg',
        'display-md',
        'display-sm',
        'display-xs',
        'xl',
        'lg',
        'md',
        'sm',
        'xs',
      ],
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'semibold', 'bold'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    transform: {
      control: 'select',
      options: ['uppercase', 'lowercase', 'capitalize'],
    },
    as: {
      control: 'select',
      options: [
        'p',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'span',
        'strong',
        'em',
        'div',
      ],
    },
    addClass: { control: 'text' },
    children: { control: 'text', defaultValue: 'Sample Typography Text' },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;


export const Playground: Story = {
  args: {
    variant: 'md',
    weight: 'regular',
    align: 'left',
    transform: undefined,
    as: 'p',
    children: ' The quick brown fox jumps over the lazy dog',
  },
};

export const AllSizes = () => {
 const variants: TypographyProps['variant'][] = [
   'display-2xl',
   'display-xl',
   'display-lg',
   'display-md',
   'display-sm',
   'display-xs',
   'xl',
   'lg',
   'md',
   'sm',
   'xs',
 ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '2rem',
      }}
    >
      {variants.map((variant) => (
        <Typography key={variant} variant={variant} weight="bold">
          The quick brown fox jumps over the lazy dog
        </Typography>
      ))}
    </div>
  );
};
