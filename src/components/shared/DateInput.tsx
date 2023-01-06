import React, { PropsWithChildren } from 'react';

import { Label } from './Label';

import chevronLeft from '../../assets/icons/chevron-left.svg';
import chevronRight from '../../assets/icons/chevron-right.svg';
import { colors } from './variables';

interface DateInputProps {
  text?: string;
  style?: React.CSSProperties;
}

export function DateInput(
  props: PropsWithChildren<DateInputProps>
): JSX.Element {
  return (
    <div {...props}>
      <Label
        htmlFor="reachGoalBy"
        className="d-block mb-1"
        text="Reach goal by"
      />
      <div style={{ position: 'relative' }}>
        <img
          style={{
            position: 'absolute',
            left: 12,
            top: '50%',
            transform: 'translateY(-50%)',
          }}
          src={chevronLeft}
          alt="chevron-left"
        />
        <div
          className="w-100"
          style={{
            height: 56,
            /* $blueGray50 */

            border: '1px solid #E9EEF2',
            borderRadius: 4,
            position: 'relative',
          }}
        >
          <div
            style={{
              width: 76,
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',

              /* LG / paragraph--semibold */

              fontFamily: 'Work Sans',
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '150%',
              color: colors.blueGray900,
            }}
            className="text-center"
          >
            <p style={{ fontWeight: 600 }}>October</p>
            <p style={{ fontWeight: 400, color: colors.blueGray400 }}>2021</p>
          </div>
        </div>
        <img
          style={{
            position: 'absolute',
            right: 12,
            top: '50%',
            transform: 'translateY(-50%)',
          }}
          src={chevronRight}
          alt="chevron-right"
        />
      </div>
    </div>
  );
}
