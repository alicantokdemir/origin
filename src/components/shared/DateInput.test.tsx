import { DateInput } from './DateInput';
import { fireEvent, render } from '@testing-library/react';

const today = new Date();

const nextMonthDate = new Date(
  today.getFullYear(),
  today.getMonth() + 1,
  today.getDate()
);

const twoMonthsLater = new Date(
  today.getFullYear(),
  today.getMonth() + 2,
  today.getDate()
);

describe('DateInput', () => {
  it('renders with correct amount', () => {
    const newDate = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate()
    );
    newDate.setMonth(0);
    const component = render(
      <DateInput reachDate={newDate} onDateChange={() => {}} />
    );

    const dateInput = component.getByTestId('date-input');

    const paragraphs = dateInput.querySelectorAll('p');
    expect(paragraphs[0].textContent).toBe('January');
    expect(paragraphs[1].textContent).toBe(newDate.getFullYear().toString());
  });

  it('shouldnt allow date before next month', () => {
    const mockFn = jest.fn();

    const component = render(
      <DateInput reachDate={nextMonthDate} onDateChange={mockFn} />
    );

    // should not go before next month
    const goPreviousMonthBtn = component.getByAltText('chevron-left');
    fireEvent.click(goPreviousMonthBtn as HTMLInputElement);
    expect(mockFn).not.toBeCalled();
  });

  it('calls callback function on click previous month', () => {
    const mockFn = jest.fn();

    const component = render(
      <DateInput reachDate={twoMonthsLater} onDateChange={mockFn} />
    );

    const goPreviousMonthBtn = component.getByAltText('chevron-left');

    fireEvent.click(goPreviousMonthBtn as HTMLInputElement);
    expect(mockFn).toBeCalledWith(nextMonthDate);
  });

  it('calls callback function on click next month', () => {
    const mockFn = jest.fn();

    const component = render(
      <DateInput reachDate={nextMonthDate} onDateChange={mockFn} />
    );

    const goNextMonthBtn = component.getByAltText('chevron-right');

    fireEvent.click(goNextMonthBtn as HTMLInputElement);
    expect(mockFn).toBeCalledWith(twoMonthsLater);
  });
});
