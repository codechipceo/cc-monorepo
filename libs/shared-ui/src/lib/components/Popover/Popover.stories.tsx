import { Meta, StoryObj } from '@storybook/react';
import Popover from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
};

export default meta;

type Story = StoryObj<typeof Popover>;

// 📌 Click-triggered Popover (Default)
export const Default: Story = {
  args: {
    trigger: <button>Click Me</button>,
    content: <p>I'm a popover!</p>,
    showArrow: false,
  },
};

// 📌 Hover-triggered Tooltip
export const Tooltip: Story = {
  args: {
    trigger: (
      <span style={{ textDecoration: 'underline', cursor: 'help' }}>
        Hover over me
      </span>
    ),
    content: <p>I'm a tooltip!</p>,
    triggerOnHover: true, // Hover-based
    showArrow: true,
  },
};

// 📌 Hover-triggered Dropdown (Like a menu)
export const HoverDropdown: Story = {
  args: {
    trigger: <button>Hover Me</button>,
    content: (
      <div>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
      </div>
    ),
    triggerOnHover: true, // Hover-based
    showArrow: false,
  },
};
