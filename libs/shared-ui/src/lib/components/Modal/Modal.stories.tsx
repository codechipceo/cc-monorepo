import { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import {
  ModalSize,
  ModalPosition,
  ModalVariant,
} from './Modal.types';
import { useState } from 'react';

// Define metadata for Storybook
const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    size: { control: 'select', options: Object.values(ModalSize) },
    position: { control: 'select', options: Object.values(ModalPosition) },
    variant: { control: 'select', options: Object.values(ModalVariant) },
    closeOnOverlayClick: { control: 'boolean' },
    closeOnEscPress: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
    preventScroll: { control: 'boolean' },
    showHeader: { control: 'boolean' },
    showFooter: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Default Modal Story
export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Modal Title',
    children: 'Modal Content goes here',
    size: ModalSize.MEDIUM,
    position: ModalPosition.CENTER,
    variant: ModalVariant.DEFAULT,
    closeOnOverlayClick: true,
    closeOnEscPress: true,
    showCloseButton: true,
    preventScroll: true,
    showHeader: true,
    showFooter: true,
    footerContent: (
      <>
        <button onClick={() => {}}>Cancel</button>
        <button onClick={() => {}}>Confirm</button>
      </>
    ),
  },
};

// Size Stories
export const Small: Story = {
  args: {
    ...Default.args,
    size: ModalSize.SMALL,
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: ModalSize.LARGE,
  },
};

export const FullScreen: Story = {
  args: {
    ...Default.args,
    size: ModalSize.FULL,
  },
};

// Position Stories
export const TopPosition: Story = {
  args: {
    ...Default.args,
    position: ModalPosition.TOP,
  },
};

export const BottomPosition: Story = {
  args: {
    ...Default.args,
    position: ModalPosition.BOTTOM,
  },
};

// Variant Stories
export const Alert: Story = {
  args: {
    ...Default.args,
    variant: ModalVariant.ALERT,
    title: 'Alert Modal',
    children: 'This is an alert message.',
  },
};

export const Confirm: Story = {
  args: {
    ...Default.args,
    variant: ModalVariant.CONFIRM,
    title: 'Confirm Action',
    children: 'Are you sure you want to proceed?',
  },
};

export const Info: Story = {
  args: {
    ...Default.args,
    variant: ModalVariant.INFO,
    title: 'Information',
    children: 'Here is some important information.',
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    variant: ModalVariant.WARNING,
    title: 'Warning',
    children: 'Please be careful with this action.',
  },
};

// Feature Stories
export const NoHeader: Story = {
  args: {
    ...Default.args,
    showHeader: false,
  },
};

export const NoFooter: Story = {
  args: {
    ...Default.args,
    showFooter: false,
  },
};

export const LongContent: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <p>This is a modal with long content to demonstrate scrolling.</p>
        {Array(20).fill(0).map((_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        ))}
      </>
    ),
  },
};

// Interactive Example
export const InteractiveExample: Story = {
  args: {
    ...Default.args,
    children: (
      <div>
        <h3>Interactive Modal Content</h3>
        <p>This modal demonstrates interactive content with forms or actions.</p>
        <form style={{ marginTop: '1rem' }}>
          <input type="text" placeholder="Enter some text..." style={{ marginBottom: '1rem' }} />
          <textarea placeholder="Enter a longer message..." rows={4} />
        </form>
      </div>
    ),
    footerContent: (
      <>
        <button onClick={() => {}}>Cancel</button>
        <button onClick={() => {}}>Submit</button>
      </>
    ),
  },
};