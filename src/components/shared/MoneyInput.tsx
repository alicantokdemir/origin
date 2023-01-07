import React, { PropsWithChildren } from 'react';

import styled from 'styled-components';
import { Label } from './Label';

import { breakpoints, colors } from './variables';
import icon from '../../assets/icons/dollar-sign.svg';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

interface MoneyInputProps {
  text?: string;
  style?: React.CSSProperties;
  amount: number;
  onAmountChange: (newAmount: string) => void;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const InputEl = styled(MaskedInput)`
  height: 56px;
  color: ${colors.blueGray600};
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  @media (min-width: ${breakpoints.xs}) {
    font-size: 24px;
  }
  border: 1px solid ${colors.blueGray50};
  border-radius: 4px;

  padding: 14px 0 13px 44px;
`;

const defaultMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
};

export function MoneyInput(
  props: PropsWithChildren<MoneyInputProps>
): JSX.Element {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
  });
  return (
    <div {...props}>
      <Label
        htmlFor="totalAmount"
        className="d-block mb-1"
        text="Total amount"
      />
      <div style={{ position: 'relative' }}>
        <img
          style={{
            position: 'absolute',
            left: 12,
            top: '50%',
            transform: 'translateY(-50%)',
          }}
          src={icon}
          alt="Dollar"
        />
        <InputEl
          mask={currencyMask}
          className="w-100"
          id="totalAmount"
          type="text"
          value={props.amount}
          onChange={(e) =>
            props.onAmountChange(e.target.value.replace(/[, ]+/g, ''))
          }
        />
      </div>
    </div>
  );
}
