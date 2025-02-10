import { StoryFn, Meta } from '@storybook/react';
import Checkbox from './Checkbox-ui';
import { CheckboxProps } from './Checkbox.types';

export default {
  title: 'Shared UI/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  label: 'Accept Terms & Conditions',
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  label: 'I Agree',
  disabled: true,
};
