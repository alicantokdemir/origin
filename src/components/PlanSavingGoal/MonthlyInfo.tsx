import React, { PropsWithChildren, useMemo } from 'react';
import styled from 'styled-components';
import { breakpoints, colors } from '../shared/variables';
import { Text } from '../shared/Text';
import { roundTo2Decimal } from '../../utils/number';

// eslint-disable-next-line @typescript-eslint/naming-convention
const InfoContainer = styled.div`
  border: 1px solid ${colors.blueGray50};
  border-radius: 8px;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const AmountContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${breakpoints.xs}) {
    padding: 24px 32px 16px 32px;
  }
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const DetailContainer = styled.div`
  background: ${colors.blueGray10};
  padding: 24px 32px 24px 32px;
  text-align: center;

  @media (min-width: ${breakpoints.xs}) {
    text-align: left;
  }
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const MoneyInfoText = styled(Text.HeadingMedium)`
  color: ${colors.brandColorSecondary};
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const MonthlyAmountText = styled(Text.Subtitle)`
  color: ${colors.blueGray900};
`;

interface MonthlyInfoProps {
  className: string;
  totalMonthlyDeposits: number;
  totalAmount: number;
  goalReachBy: string;
}

export function MonthlyInfo(
  props: PropsWithChildren<MonthlyInfoProps>
): JSX.Element {
  const monthlyPayment = useMemo(
    () => roundTo2Decimal(props.totalAmount / props.totalMonthlyDeposits),
    [props.totalAmount, props.totalMonthlyDeposits]
  );

  return (
    <InfoContainer data-testid="monthly-info" className={props.className || ''}>
      <AmountContainer>
        <MonthlyAmountText>Monthly amount</MonthlyAmountText>
        <MoneyInfoText className="text-right">${monthlyPayment}</MoneyInfoText>
      </AmountContainer>
      <DetailContainer data-testid="monthly-info__detail">
        <Text.Caption>
          You???re planning{' '}
          <span className="font-weight-600">
            {props.totalMonthlyDeposits} monthly deposit
            {props.totalMonthlyDeposits > 1 ? 's' : ''}
          </span>{' '}
          to reach your{' '}
          <span className="font-weight-600">${props.totalAmount}</span> goal by{' '}
          <span className="font-weight-600">{props.goalReachBy}.</span>
        </Text.Caption>
      </DetailContainer>
    </InfoContainer>
  );
}
