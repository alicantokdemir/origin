import React from 'react';
import { Navbar } from './components/shared/Navbar';
import { Card } from './components/shared/Card';
import { Title, TitleTextBold } from './components/shared/Title';

export function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Title>
        Let&apos;s plan your <TitleTextBold>saving goal.</TitleTextBold>
      </Title>
      {/* <Card>
        Buy a house Saving goal
        <label htmlFor="totalAmount">Total amount</label>
        <input id="totalAmount" type="text" />

        <label htmlFor="reachGoalBy">Reach goal by</label>
        <input id="reachGoalBy" type="text" />
      </Card> */}
    </>
  );
}
