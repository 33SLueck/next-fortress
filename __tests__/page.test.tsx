import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
  });

  it('has the correct document structure', () => {
    render(<Home />);

    // Check for main content area
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveClass('flex', 'flex-col');
  });

  it('displays the Next.js logo', () => {
    render(<Home />);

    const logo = screen.getByAltText('Next.js logo');
    expect(logo).toBeInTheDocument();
  });

  it('contains the Deploy now button', () => {
    render(<Home />);

    const deployButton = screen.getByText('Deploy now');
    expect(deployButton).toBeInTheDocument();
    expect(deployButton.closest('a')).toHaveAttribute('href');
  });

  it('contains the Read our docs link', () => {
    render(<Home />);

    const docsLink = screen.getByText('Read our docs');
    expect(docsLink).toBeInTheDocument();
    expect(docsLink.closest('a')).toHaveAttribute('href');
  });
});
