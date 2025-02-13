import { StoryFn, Meta } from '@storybook/react';
import ChipBadge from './Tags';
import { ChipBadgeProps } from './Tags.types';

export default {
  title: 'Shared UI/ChipBadge',
  component: ChipBadge,
  argTypes: {
    label: { control: 'text' },
    tagType: { control: 'radio', options: ['badge', 'chip'] },
    variant: { control: 'select', options: ['primary', 'destructive', 'success', 'warning', 'neutral'] },
    shape: { control: 'radio', options: ['ellipse', 'rectangle'] },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    onClose: { action: 'closed' },
  },
} as Meta<typeof ChipBadge>;

const Template: StoryFn<ChipBadgeProps> = (args) => <ChipBadge {...args} />;

export const Badge = Template.bind({});
Badge.args = {
  label: 'Badge',
  tagType: 'badge',
  variant: 'primary',
};

export const Chip = Template.bind({});
Chip.args = {
  label: 'Chip',
  tagType: 'chip',
  variant: 'destructive',
};