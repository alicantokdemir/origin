import React, { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { colors } from './variables';
import { Text } from '../shared/Text';

interface LabelProps {
  text?: string;
  className: string;
  htmlFor: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const LabelText = styled(Text.Description)`
  color: ${colors.blueGray900};
`;

export function Label(props: PropsWithChildren<LabelProps>): JSX.Element {
  return (
    <label htmlFor={props.htmlFor}>
      <LabelText>{props.children || props.text}</LabelText>
    </label>
  );
}
