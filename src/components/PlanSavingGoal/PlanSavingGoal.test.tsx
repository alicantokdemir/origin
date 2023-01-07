import { PlanSavingGoal } from './PlanSavingGoal';
import { render, fireEvent } from '@testing-library/react';
import { getMonthText, getYear } from '../../utils/date';

describe('PlanSavingGoal', () => {
  it('renders with title', () => {
    const component = render(<PlanSavingGoal />);

    expect(component.getByTestId('title')).toBeInTheDocument();
    expect(component.getByTestId('title').textContent).toBe(
      "Let's plan your saving goal."
    );
  });

  it('renders default values on money input', () => {
    // default is 25,000
    const component = render(<PlanSavingGoal />);

    const moneyInput = component.getByTestId('money-input');

    expect(moneyInput).toBeInTheDocument();
    expect(moneyInput.querySelector('input')).toBeInTheDocument();
    expect(moneyInput.querySelector('input')?.value).toBe('25,000');
  });

  it('renders default values on date input', () => {
    // default is 48 months from today
    const component = render(<PlanSavingGoal />);

    const dateInput = component.getByTestId('date-input');

    const today = new Date();
    const defaultDate = new Date(
      today.getFullYear(),
      today.getMonth() + 48,
      today.getDate()
    );

    expect(dateInput).toBeInTheDocument();
    const paragraphs = dateInput.querySelectorAll('p');

    expect(paragraphs.length).toBe(2);
    expect(paragraphs[0].textContent).toBe(getMonthText(defaultDate));
    expect(paragraphs[1].textContent).toBe(getYear(defaultDate));
  });

  it('renders default values monthly amount', () => {
    // default is 25,000 / 48 months = 520.83 from today
    const component = render(<PlanSavingGoal />);

    const monthlyAmount = component.getByTestId('monthly-info');
    const amountText = monthlyAmount.querySelector('h2');

    expect(monthlyAmount).toBeInTheDocument();

    expect(amountText?.textContent).toBe('$520.83');
  });

  it('shows correct values on amount and date change', () => {
    // default is 48 months from today
    const component = render(<PlanSavingGoal />);

    const monthlyAmount = component.getByTestId('monthly-info');
    const amountText = monthlyAmount.querySelector('h2');
    const goPreviousMonthBtn = component.getByAltText('chevron-left');
    const goNextMonthBtn = component.getByAltText('chevron-right');
    const moneyInput = component
      .getByTestId('money-input')
      ?.querySelector('input');

    fireEvent.change(moneyInput as HTMLInputElement, {
      target: { value: '48000' },
    });

    expect(amountText?.textContent).toBe('$1000.00');

    fireEvent.click(goPreviousMonthBtn as HTMLInputElement);

    // 48000 / 47
    expect(amountText?.textContent).toBe('$1021.28');

    fireEvent.click(goNextMonthBtn as HTMLInputElement);
    fireEvent.click(goNextMonthBtn as HTMLInputElement);

    // 48000 / 49
    expect(amountText?.textContent).toBe('$979.59');
  });
});
