import React from 'react';
import Button from './Button';
import { ButtonProps } from './Button.types';
import { Meta, StoryFn } from '@storybook/react/*';

export default {
  title: 'Shared UI/Button',
  component: Button,
  // argTypes: {
  //   variant:{
  //     control: "select",
  //     options: [
  //       "primary" , "secondaryColor" , "secondaryGrey" , "tertiaryColor" , "tertiaryGrey" , "linkGrey" , "linkColor"
  //     ]
  //   }
  // }
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};
