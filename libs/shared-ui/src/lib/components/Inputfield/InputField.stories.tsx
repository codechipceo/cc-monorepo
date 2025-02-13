import { StoryFn, Meta } from '@storybook/react';
import InputField from './InputField';
import { InputFieldProps } from './InputField.types';

export default {
  title: 'Shared UI/InputField',
  component: InputField,
  argTypes: {
    label: { control: 'text' },
    type: { control: 'radio', options: ['input', 'textarea'] },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    errorMessage: { control: 'text' },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'] },
  },
} as Meta<typeof InputField>;

const Template: StoryFn<InputFieldProps> = (args) => <InputField {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  label: 'Email',
  type: 'input',
  placeholder: 'Enter your email',
  value: '',
  errorMessage: '',
  size: 'md',
};

export const LargeTextarea = Template.bind({});
LargeTextarea.args = {
  label: 'Message',
  type: 'textarea',
  placeholder: 'Enter your message',
  value: '',
  errorMessage: '',
  size: 'lg',
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  label: 'Email',
  type: 'input',
  placeholder: 'Enter your email',
  value: 'invalid email',
  errorMessage: 'This is an error message.',
  size: 'sm',
};
