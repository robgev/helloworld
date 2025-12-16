import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { HelloWorldPage } from './HelloWorldPage';

type MatchMediaResult = {
  matches: boolean;
  media: string;
  onchange: ((event: MediaQueryListEvent) => void) | null;
  addEventListener: (
    type: string,
    listener: (event: MediaQueryListEvent) => void
  ) => void;
  removeEventListener: (
    type: string,
    listener: (event: MediaQueryListEvent) => void
  ) => void;
  addListener: (listener: (event: MediaQueryListEvent) => void) => void;
  removeListener: (listener: (event: MediaQueryListEvent) => void) => void;
  dispatchEvent: (event: MediaQueryListEvent) => boolean;
};

const mockMatchMedia = (matches: boolean) => {
  const listeners = new Set<(event: MediaQueryListEvent) => void>();
  const result: MatchMediaResult = {
    matches,
    media: '(prefers-reduced-motion: reduce)',
    onchange: null,
    addEventListener: (_type, listener) => {
      listeners.add(listener);
    },
    removeEventListener: (_type, listener) => {
      listeners.delete(listener);
    },
    addListener: (listener) => listeners.add(listener),
    removeListener: (listener) => listeners.delete(listener),
    dispatchEvent: (event) => {
      listeners.forEach((listener) => listener(event));
      return true;
    }
  };

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn(() => result)
  });
};

describe('HelloWorldPage', () => {
  it('renders the hello world heading with qa hooks', () => {
    mockMatchMedia(false);
    render(<HelloWorldPage />);

    const container = screen.getByTestId('hello-container');
    const text = screen.getByTestId('hello-text');

    expect(container).toHaveAttribute('data-hello-world', 'container');
    expect(text).toHaveAttribute('data-hello-world', 'text');
    expect(text).toHaveTextContent('Hello World');
  });

  it('exposes reduced motion state when user prefers it', () => {
    mockMatchMedia(true);
    render(<HelloWorldPage />);

    const container = screen.getByTestId('hello-container');

    expect(container).toHaveAttribute('data-reduced-motion', 'true');
  });
});
