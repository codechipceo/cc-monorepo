import { StoryFn, Meta } from '@storybook/react';
import Typography from './Typography-ui';
import { TypographyProps } from './Typography.types';

export default {
  title: 'Shared UI/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'display2xl', 'displayxl', 'displaylg', 'displaymd', 'displaysm', 'displayxs',
        'textxl', 'textlg', 'textmd', 'textsm', 'textxs', 'label'
      ],
    },
    color: { control: 'color' },
    align: { control: 'radio', options: ['left', 'center', 'right'] },
    weight: { control: 'radio', options: ['normal', 'medium', 'semibold', 'bold'] },
  },
} as Meta<typeof Typography>;

const Template: StoryFn<TypographyProps> = (args) => <Typography {...args} />;

export const Heading = Template.bind({});
Heading.args = {
  children: 'Heading Text',
  variant: 'display2xl',
  color: '#333',
  align: 'center',
  weight: 'bold',
};

export const Body = Template.bind({});
Body.args = {
  children: 'Body Text',
  variant: 'textmd',
  color: '#666',
  align: 'left',
  weight: 'normal',
};
