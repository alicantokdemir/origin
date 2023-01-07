import { Card } from '../shared/Card';
import { Title, TitleTextBold } from '../shared/Title';
import React, { useState, useMemo } from 'react';

import icon from '../../assets/icons/house.svg';
import { MoneyInput } from '../shared/MoneyInput';
import { DateInput } from '../shared/DateInput';
import { MonthlyInfo } from '../MonthlyInfo';
import { Text } from '../shared/Text';
import styled from 'styled-components';
import { colors } from '../shared/variables';
import { getMonthsDiff, getMonthText, getYear } from '../../utils/date';

// eslint-disable-next-line @typescript-eslint/naming-convention
const InfoInputs = styled.div`
  flex-wrap: wrap;

  @media (max-width: 560px) {
    > *:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media (min-width: 560px) {
    > *:not(:last-child) {
      padding-right: 16px;
    }
  }
`;

export function PlanSavingGoal(): JSX.Element {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth() + 48, today.getDate())
  );

  const [totalAmount, setTotalAmount] = useState(25000);

  const monthDiff = useMemo(() => {
    return getMonthsDiff(currentDate, today);
  }, [currentDate]);

  const goalReachBy = useMemo(() => {
    return getMonthText(currentDate) + ' ' + getYear(currentDate);
  }, [currentDate]);

  function onDateChange(newDate: Date) {
    setCurrentDate(newDate);
  }

  function onAmountChange(newAmount: string) {
    setTotalAmount(+newAmount);
  }
  return (
    <>
      <Title>
        Let&apos;s plan your <TitleTextBold>saving goal.</TitleTextBold>
      </Title>
      <Card className="m-auto">
        <div className="d-flex flex-wrap justify-items-center align-items-center mb-4 px-1">
          <img src={icon} alt="Buy a house" />
          <div className="ml-3">
            <Text.HeadingSmall className="mb-1">Buy a house</Text.HeadingSmall>
            <Text.Paragraph style={{ color: colors.blueGray400 }}>
              Saving a goal
            </Text.Paragraph>
          </div>
        </div>

        <InfoInputs className="mb-4 d-flex">
          <MoneyInput
            onAmountChange={onAmountChange}
            amount={totalAmount}
            style={{ flex: '60%', minWidth: 'min(288px, 100%)' }}
          />
          <DateInput
            onDateChange={onDateChange}
            reachDate={currentDate}
            style={{ flex: '40%', minWidth: 'min(192px, 100%)' }}
          />
        </InfoInputs>

        <MonthlyInfo
          totalAmount={totalAmount}
          totalMonthlyDeposits={monthDiff}
          goalReachBy={goalReachBy}
          className="mb-5"
        />

        <button
          style={{
            maxWidth: '100%',
            width: '320px',
            height: '56px',
            background: colors.brandColorPrimary,
            borderColor: colors.brandColorPrimary,
            borderRadius: '32px',

            fontWeight: 600,
            lineHeight: '20px',

            color: '#FFFFFF',

            margin: 'auto',
            display: 'block',
          }}
        >
          Confirm
        </button>
      </Card>
    </>
  );
}
