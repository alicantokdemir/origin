import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { breakpoints, boxShadows } from './variables';

// eslint-disable-next-line @typescript-eslint/naming-convention
const CardContainer = styled.div`
  width: 560px;
  background: #ffffff;
  box-shadow: ${boxShadows.level4};
  border-radius: 8px;
  padding: 24px;

  @media (min-width: ${breakpoints.xs}) {
    width: 360px;
    padding: 35px 40px 40px;
  }
`;

export function Card(
  props: PropsWithChildren<Record<string, unknown>>
): JSX.Element {
  return <CardContainer>{props.children}</CardContainer>;
}
