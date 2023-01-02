import React, { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { breakpoints, colors } from './variables';

// eslint-disable-next-line @typescript-eslint/naming-convention
const TitleContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;

  @media (min-width: ${breakpoints.xs}) {
    margin-top: 48px;
  }
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const TitleText = styled.h3`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  text-align: center;

  color: ${colors.brandColorPrimary};

  @media (min-width: ${breakpoints.xs}) {
    font-weight: 400;
    font-size: 20px;
  }
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const TitleTextBold = styled.span`
  font-weight: bold;
`;

export function Title(
  props: PropsWithChildren<Record<string, unknown>>
): JSX.Element {
  return (
    <TitleContainer>
      <TitleText>{props.children}</TitleText>
    </TitleContainer>
  );
}
