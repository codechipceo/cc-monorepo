// TextField.stories.tsx

import React, { useState } from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import TextField from './TextField'; // Adjust the import path

export default {
  title: 'Shared UI/HeadlessInputField',
  component: TextField,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'number', 'tel', 'url'],
    },
    isError: { control: 'boolean' },
  },
} as Meta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (
  args: ComponentStory<typeof TextField>['args']
) => {
  const [value, setValue] = useState('')

  console.log(value)

return  <>
  <TextField {...args} value={value} name='email' onBlur={(e) =>{console.log(e.target.name)}}  onChange={(e) => setValue(e.target.value)} />
    <TextField {...args} disabled required />
  </>
}


export const Text = Template.bind({});
Text.args = {
  type: 'text',
  label: 'Name',
  placeholder: 'Enter your name',
  helperText: 'Please provide your full name.',
  id: 'name-input',
  prefixIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
      <polyline points="2,6 12,13 22,6" />
    </svg>
  ),
  suffixIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  label: 'Email',
  placeholder: 'Enter your email',
  helperText: 'example@email.com',
  id: 'email-input',

};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  label: 'Password',
  placeholder: 'Enter your password',
  helperText: 'At least 8 characters.',
  id: 'password-input',
};

export const Search = Template.bind({});
Search.args = {
  type: 'search',
  label: 'Search',
  placeholder: 'Search...',
  id: 'search-input',
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  type: 'text',
  label: 'Username',
  placeholder: 'Enter username',
  isError: true,
  errorText: 'Username already taken.',
  id: 'username-input',
};

export const ControlledInput = Template.bind({});
ControlledInput.args = {
  type: 'text',
  label: 'Controlled Input',
  placeholder: 'Type here',
  value: 'Initial value',
  id: 'controlled-input',
};

ControlledInput.play = async ({ canvasElement }) => {
  const input = canvasElement.querySelector('input');
  if (input) {
    input.value = 'Updated value';
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: 'number',
  label: 'Age',
  placeholder: 'Enter your age',
  helperText: 'Enter a number',
  id: 'age-input',
};

export const TelInput = Template.bind({});
TelInput.args = {
  type: 'tel',
  label: 'Phone number',
  placeholder: 'Enter your phone number',
  helperText: 'Enter your phone number',
  id: 'tel-input',
};

export const UrlInput = Template.bind({});
UrlInput.args = {
  type: 'url',
  label: 'Website',
  placeholder: 'Enter website URL',
  helperText: 'Enter a valid url',
  id: 'url-input',
};
