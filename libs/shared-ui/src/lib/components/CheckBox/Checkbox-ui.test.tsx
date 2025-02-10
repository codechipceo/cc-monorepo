import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest'; // Import Vitest functions
import Checkbox from './Checkbox-ui';

describe('Checkbox', () => {
  it('renders the checkbox component', () => {
    const { getByLabelText } = render(<Checkbox checked={false} onChange={() => {}} label="Check me" />);
    expect(getByLabelText('Check me')).toBeTruthy();
  });

  it('calls onChange when clicked', () => {
    const onChangeMock = vi.fn();
    const { getByLabelText } = render(<Checkbox checked={false} onChange={onChangeMock} label="Check me" />);
    fireEvent.click(getByLabelText('Check me'));
    expect(onChangeMock).toHaveBeenCalled();
  });

  it('disables the checkbox when disabled prop is true', () => {
    const { getByLabelText } = render(<Checkbox checked={false} onChange={() => {}} label="Check me" disabled />);
    expect(getByLabelText('Check me')).toBeDisabled();
  });
});
