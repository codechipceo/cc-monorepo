import { Meta, StoryFn } from '@storybook/react';
import ToolTip from './ToolTip';

export default {
  title: 'Shared Ui/ToolTip',
  component: ToolTip,
  argTypes: {
    label: { control: 'text' },
    triggerOnHover: { control: 'boolean' },
    animate: { control: 'boolean' },
  },
} as Meta<typeof ToolTip>;

const Template: StoryFn<typeof ToolTip> = (args) => <ToolTip {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Tooltip Content',
  children: <button>Hover me</button>,
};

export const WithAnimation = Template.bind({});
WithAnimation.args = {
  label: 'Animated Tooltip Long Long description ',
  children: <button>Hover me</button>,
  animate: true,
};

