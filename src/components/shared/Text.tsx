import styled from 'styled-components';
import { breakpoints } from './variables';

// eslint-disable-next-line @typescript-eslint/naming-convention
const TextDescription = styled.span`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  @media (min-width: ${breakpoints.xs}) {
    font-size: 14px;
  }
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const TextHeadingMedium = styled.h2`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  @media (min-width: ${breakpoints.xs}) {
    font-size: 32px;
  }
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const TextHeadingSmall = styled.h3`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  @media (min-width: ${breakpoints.xs}) {
    font-size: 24px;
  }
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const TextSubtitle = styled.span`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  @media (min-width: ${breakpoints.xs}) {
    font-size: 20px;
  }
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const TextParagraph = styled.p`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  @media (min-width: ${breakpoints.xs}) {
    font-size: 16px;
  }
`;

// eslint-disable-next-line @typescript-eslint/naming-convention
const TextCaption = styled.span`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

/* eslint-disable @typescript-eslint/naming-convention */
export const Text = {
  Description: TextDescription,
  HeadingMedium: TextHeadingMedium,
  HeadingSmall: TextHeadingSmall,
  Subtitle: TextSubtitle,
  Paragraph: TextParagraph,
  Caption: TextCaption,
};
/* eslint-enable @typescript-eslint/naming-convention */
