import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { breakpoints, boxShadows } from './variables';

interface CardProps {
  className: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const CardContainer = styled.div`
  width: 360px;
  background: #ffffff;
  box-shadow: ${boxShadows.level4};
  border-radius: 8px;
  padding: 24px;
  max-width: 100%;

  @media (min-width: ${breakpoints.xs}) {
    width: 560px;
    padding: 35px 40px 40px;
  }
`;

export function Card(props: PropsWithChildren<CardProps>): JSX.Element {
  return (
    <CardContainer className={props.className}>{props.children}</CardContainer>
  );
}
