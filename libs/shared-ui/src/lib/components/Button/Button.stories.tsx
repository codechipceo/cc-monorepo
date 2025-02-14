import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import {
  ButtonShape,
  ButtonSize,
  ButtonType,
  ButtonVariant,
} from './Button.types';

// Define metadata for Storybook
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: Object.values(ButtonVariant) },
    type: { control: 'select', options: Object.values(ButtonType) },
    size: { control: 'select', options: Object.values(ButtonSize) },
    shape: { control: 'select', options: Object.values(ButtonShape) },
    isLoading: { control: 'boolean' },
    isIcon: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default Button Story
export const Default: Story = {
  args: {
    children: 'Click Me',
    type: ButtonType.SOLID,
    variant: ButtonVariant.PRIMARY,
    size: ButtonSize.MEDIUM,
    shape: ButtonShape.ROUNDED,
    disabled: false,
    isLoading: false,
  },
};

// Variant Stories
export const Primary: Story = {
  args: {
    ...Default.args,
    variant: ButtonVariant.PRIMARY,
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    variant: ButtonVariant.SUCCESS,
  },
};

export const Destructive: Story = {
  args: {
    ...Default.args,
    variant: ButtonVariant.DESTRUCTIVE,
  },
};

// Loading & Disabled States
export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const IconButton: Story = {
  args: {
    ...Default.args,
    isIcon: true,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L15 8H22L16.5 12L18 18L12 14L6 18L7.5 12L2 8H9L12 2Z"
          style={{
            fill: 'currentColor',
            stroke: 'currentColor',
            strokeWidth: 2,
          }}
        />
      </svg>
    ),
  },
};
