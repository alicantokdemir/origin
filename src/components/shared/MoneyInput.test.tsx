import { MoneyInput } from './MoneyInput';
import { fireEvent, render } from '@testing-library/react';

describe('MoneyInput', () => {
  it('renders with correct amount', () => {
    const component = render(
      <MoneyInput amount={1000} onAmountChange={() => {}} />
    );

    const inputEl = component
      .getByTestId('money-input')
      ?.querySelector('input');

    expect(inputEl?.value).toBe('1,000');
  });

  it('calls callback function on amount change', () => {
    const mockFn = jest.fn();

    const component = render(
      <MoneyInput amount={1000} onAmountChange={mockFn} />
    );

    const inputEl = component
      .getByTestId('money-input')
      ?.querySelector('input');

    fireEvent.change(inputEl as HTMLInputElement, {
      target: { value: '2000' },
    });

    expect(mockFn).toBeCalledWith('2000');
  });
});
