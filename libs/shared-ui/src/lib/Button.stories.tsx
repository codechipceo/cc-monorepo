import React from 'react';
import Button from './shared-ui';

export default {
  title: 'Shared UI/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
};
