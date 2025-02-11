import { StoryFn, Meta } from '@storybook/react';
import ChipBadge from './ChipBadge';
import { ChipBadgeProps } from './ChipBadge.types';

export default {
  title: 'Shared UI/ChipBadge',
  component: ChipBadge,
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'radio', options: ['badge', 'chip'] },
    color: { control: 'select', options: ['primary', 'destructive', 'success', 'warning', 'neutral'] },
    onClose: { action: 'closed' },
  },
} as Meta<typeof ChipBadge>;

const Template: StoryFn<ChipBadgeProps> = (args) => <ChipBadge {...args} />;

export const Badge = Template.bind({});
Badge.args = {
  label: 'Badge',
  variant: 'badge',
  color: 'primary',
};

export const Chip = Template.bind({});
Chip.args = {
  label: 'Chip',
  variant: 'chip',
  color: 'destructive',
};