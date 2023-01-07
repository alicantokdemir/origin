import { MonthlyInfo } from './MonthlyInfo';
import { render } from '@testing-library/react';

describe('MonthlyInput', () => {
  it('renders with correct values', () => {
    const totalMonthlyDeposits = 10;
    const totalAmount = 1000;
    const goalReachBy = 'January 2025';

    const component = render(
      <MonthlyInfo
        className=""
        totalMonthlyDeposits={totalMonthlyDeposits}
        totalAmount={totalAmount}
        goalReachBy={goalReachBy}
      />
    );

    const moneyInfoText = component
      .getByTestId('monthly-info')
      ?.querySelector('h2');

    const detailContainer = component.getByTestId('monthly-info__detail');

    expect(moneyInfoText?.textContent).toBe('$100.00');

    expect(detailContainer.textContent).toBe(
      `You’re planning ${totalMonthlyDeposits} monthly deposits to reach your $${totalAmount} goal by ${goalReachBy}.`
    );
  });
});
