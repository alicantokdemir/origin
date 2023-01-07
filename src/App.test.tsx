import { App } from './App';
import { render } from '@testing-library/react';

describe('App', () => {
  it('renders with title', () => {
    const component = render(<App />);

    expect(component.getByTestId('title')).toBeInTheDocument();
    expect(component.getByTestId('title').textContent).toBe(
      "Let's plan your saving goal."
    );
  });

  it('renders default values on money input', () => {
    const component = render(<App />);

    const moneyInput = component.getByTestId('money-input');

    expect(moneyInput).toBeInTheDocument();
    expect(moneyInput.querySelector('input')).toBeInTheDocument();
    expect(moneyInput.querySelector('input')?.value).toBe('25,000');
  });
});
