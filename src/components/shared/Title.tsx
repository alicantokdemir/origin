import React, { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { breakpoints, colors } from './variables';

import { Text } from './Text';

// eslint-disable-next-line @typescript-eslint/naming-convention
const TitleContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;
  text-align: center;

  @media (min-width: ${breakpoints.xs}) {
    margin-top: 48px;
  }
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const TitleText = styled(Text.Subtitle)`
  color: ${colors.brandColorPrimary};
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const TitleTextBold = styled(TitleText)`
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
