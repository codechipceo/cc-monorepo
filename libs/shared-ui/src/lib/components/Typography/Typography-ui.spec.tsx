import { render } from '@testing-library/react';
import Typography from './Typography-ui';

describe('Typography', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Typography>Test Text</Typography>);
    expect(baseElement).toBeTruthy();
  });

  it('should render the correct variant', () => {
    const { getByText } = render(<Typography variant="header">Heading</Typography>);
    const element = getByText('Heading');
    expect(element.tagName).toBe('H1');
  });
});
