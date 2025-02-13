import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import InputField from './InputField';

describe('InputField Component', () => {
  it('renders input field correctly', () => {
    const { getByPlaceholderText } = render(
      <InputField label="Email" type="input" placeholder="Enter your email" value="" onChange={() => {}} />
    );
    expect(getByPlaceholderText('Enter your email')).toBeTruthy();
  });

  it('renders textarea field correctly', () => {
    const { getByPlaceholderText } = render(
      <InputField label="Message" type="textarea" placeholder="Enter your message" value="" onChange={() => {}} />
    );
    expect(getByPlaceholderText('Enter your message')).toBeTruthy();
  });

  it('displays error message when provided', () => {
    const { getByText } = render(
      <InputField label="Email" type="input" placeholder="Enter your email" value="" onChange={() => {}} errorMessage="This is an error message." />
    );
    expect(getByText('This is an error message.')).toBeTruthy();
  });

  it('calls onChange function when typing in input', () => {
    const onChangeMock = vi.fn();
    const { getByPlaceholderText } = render(
      <InputField label="Email" type="input" placeholder="Enter your email" value="" onChange={onChangeMock} />
    );

    fireEvent.change(getByPlaceholderText('Enter your email'), { target: { value: 'test' } });
    expect(onChangeMock).toHaveBeenCalled();
  });
});
