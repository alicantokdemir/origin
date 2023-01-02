import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import { breakpoints } from './variables';

// eslint-disable-next-line @typescript-eslint/naming-convention
const Nav = styled.nav`
  background: #fff;
  padding: 16px;
  height: 56px;

  @media (min-width: ${breakpoints.xs}) {
    padding: 24px 56px;
    height: 80px;
  }
`;

export function Navbar(
  props: PropsWithChildren<Record<string, never>>
): JSX.Element {
  return (
    <Nav>
      <img style={{ height: '100%' }} src={logo} alt="Origin Logo" />
    </Nav>
  );
}
