import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Layout Tests', () => {
  it('should render basic elements correctly', () => {
    const TestComponent = () => <div data-testid="test">Hello World</div>;

    const { getByTestId } = render(<TestComponent />);

    expect(getByTestId('test')).toBeInTheDocument();
    expect(getByTestId('test')).toHaveTextContent('Hello World');
  });

  it('should handle conditional rendering', () => {
    const ConditionalComponent = ({ show }: { show: boolean }) => (
      <div>{show && <span data-testid="conditional">Shown</span>}</div>
    );

    const { getByTestId, rerender } = render(
      <ConditionalComponent show={true} />
    );

    expect(getByTestId('conditional')).toBeInTheDocument();

    rerender(<ConditionalComponent show={false} />);

    expect(() => getByTestId('conditional')).toThrow();
  });
});
