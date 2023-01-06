import React from 'react';
import { Navbar } from './components/shared/Navbar';
import { Card } from './components/shared/Card';
import { Title, TitleTextBold } from './components/shared/Title';

import icon from './assets/icons/house.svg';
import { MoneyInput } from './components/shared/MoneyInput';
import { DateInput } from './components/shared/DateInput';
import { MonthlyInfo } from './components/MonthlyInfo';
import { Text } from './components/shared/Text';
import styled from 'styled-components';
import { breakpoints, colors } from './components/shared/variables';

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

export function App(): JSX.Element {
  return (
    <>
      <Navbar />
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
          <MoneyInput style={{ flex: '60%', minWidth: 'min(288px, 100%)' }} />
          <DateInput style={{ flex: '40%', minWidth: 'min(192px, 100%)' }} />
        </InfoInputs>

        <MonthlyInfo className="mb-5" />

        <button
          style={{
            maxWidth: '100%',
            width: '320px',
            height: '56px',
            /* $brandColorPrimary */
            background: '#1B31A8',
            borderColor: '#1B31A8',
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
