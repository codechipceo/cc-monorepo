import React from 'react';
import { Story, Meta } from '@storybook/react';
import ToggleButton, { ToggleButtonProps } from './ToggleButton';

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'success', 'neutral', 'warning', 'destructive'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
    defaultChecked: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story<ToggleButtonProps> = (args) => <ToggleButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
  defaultChecked: false,
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  size: 'medium',
  defaultChecked: false,
};

export const Neutral = Template.bind({});
Neutral.args = {
  variant: 'neutral',
  size: 'medium',
  defaultChecked: false,
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  size: 'medium',
  defaultChecked: false,
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: 'destructive',
  size: 'medium',
  defaultChecked: false,
};
