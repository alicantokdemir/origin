import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { colors } from './shared/variables';
import { Text } from '../components/shared/Text';

// eslint-disable-next-line @typescript-eslint/naming-convention
const InfoContainer = styled.div`
  border: 1px solid ${colors.blueGray50};
  border-radius: 8px;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const AmountContainer = styled.div`
  padding: 24px 32px 16px 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const DetailContainer = styled.div`
  background: ${colors.blueGray10};
  padding: 24px 32px 24px 32px;
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
}

export function MonthlyInfo(
  props: PropsWithChildren<MonthlyInfoProps>
): JSX.Element {
  return (
    <InfoContainer className={props.className || ''}>
      <AmountContainer>
        <MonthlyAmountText>Monthly amount</MonthlyAmountText>
        <MoneyInfoText className="text-right">$520.83</MoneyInfoText>
      </AmountContainer>
      <DetailContainer>
        <Text.Caption>
          You’re planning{' '}
          <span className="font-weight-600">48 monthly deposits</span> to reach
          your <span className="font-weight-600">$25,000</span> goal by{' '}
          <span className="font-weight-600">October 2020.</span>
        </Text.Caption>
      </DetailContainer>
    </InfoContainer>
  );
}
