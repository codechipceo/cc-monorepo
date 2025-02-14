import { Meta, Story } from '@storybook/react';
import ToggleButton, { ToggleButtonProps } from './ToggleButton';

const meta: Meta<ToggleButtonProps> = {
  title: 'Shared Ui/ToggleButton',
  component: ToggleButton,
  parameters: {
    docs: {
      description: {
        component:
          'A customizable toggle button with different variants and sizes.',
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Controls whether the toggle is checked or not.', // Added descriptions
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the toggle button, preventing interaction.',
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'neutral', 'warning', 'destructive'],
      description: 'Sets the visual style of the toggle button.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'], // Include 'large' if it's an option.
      description: 'Sets the size of the toggle button.',
    },
    onChange: {
      action: 'onChange', // Use action for logging changes
      description:
        'A callback function that is called when the toggle state changes.',
    },
    label: {
      control: 'text',
      description:
        'An optional label for the toggle button (for accessibility).',
    },
  },
};

export default meta;
type Story = Story<ToggleButtonProps>;

const Template: Story = (args) => <ToggleButton {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  checked: false,
  disabled: false,
  variant: 'primary',
  size: 'medium',
  label: 'Toggle Me', // Example label
  onChange: () => {}, // Dummy function for the playground
};
Playground.parameters = {
  docs: {
    description: {
      story:
        'Use this story to interactively explore the different props and see how they affect the ToggleButton.',
    },
  },
};

export const Primary = Template.bind({});
Primary.args = { ...Playground.args, variant: 'primary' };
Primary.parameters = {
  docs: { description: { story: 'Primary variant of the toggle button.' } },
};

export const Success = Template.bind({});
Success.args = { ...Playground.args, variant: 'success' };
Success.parameters = {
  docs: { description: { story: 'Success variant of the toggle button.' } },
};

export const Warning = Template.bind({});
Warning.args = { ...Playground.args, variant: 'warning' };
Warning.parameters = {
  docs: { description: { story: 'Warning variant of the toggle button.' } },
};

export const Destructive = Template.bind({});
Destructive.args = { ...Playground.args, variant: 'destructive' };
Destructive.parameters = {
  docs: { description: { story: 'Destructive variant of the toggle button.' } },
};

export const Disabled = Template.bind({});
Disabled.args = { ...Playground.args, disabled: true, variant: 'neutral' };
Disabled.parameters = {
  docs: { description: { story: 'Disabled state of the toggle button.' } },
};

export const WithLabel = Template.bind({});
WithLabel.args = { ...Playground.args, label: 'Enable Feature' }; // Example label
WithLabel.parameters = {
  docs: { description: { story: 'Toggle button with an accessible label.' } },
};

export const SmallSize = Template.bind({});
SmallSize.args = { ...Playground.args, size: 'small' };
SmallSize.parameters = {
  docs: { description: { story: 'Small size of the toggle button.' } },
};
