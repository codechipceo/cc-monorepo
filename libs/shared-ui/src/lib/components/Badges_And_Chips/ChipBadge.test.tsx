import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ChipBadge from './ChipBadge';

describe('ChipBadge Component', () => {
  it('renders correctly with badge variant', () => {
    const { getByText } = render(<ChipBadge label="Test Badge" variant="badge" />);
    expect(getByText('Test Badge')).toBeTruthy();
  });

  it('renders correctly with chip variant', () => {
    const { getByText } = render(<ChipBadge label="Test Chip" variant="chip" />);
    expect(getByText('Test Chip')).toBeTruthy();
  });

  it('calls onClose when chip close button is clicked', () => {
    const onCloseMock = vi.fn();
    const { getByText } = render(<ChipBadge label="Closable Chip" variant="chip" onClose={onCloseMock} />);
    fireEvent.click(getByText('×'));
    expect(onCloseMock).toHaveBeenCalled();
  });
});
