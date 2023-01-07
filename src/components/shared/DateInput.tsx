import React, { useState, PropsWithChildren, useMemo } from 'react';

import { Label } from './Label';

import chevronLeft from '../../assets/icons/chevron-left.svg';
import chevronRight from '../../assets/icons/chevron-right.svg';
import { colors } from './variables';
import { getMonthText, getYear } from '../../utils/date';

interface DateInputProps {
  text?: string;
  style?: React.CSSProperties;
  reachDate: Date;
  onDateChange: (date: Date) => void;
}

export function DateInput(
  props: PropsWithChildren<DateInputProps>
): JSX.Element {
  const currentMonth = useMemo(() => {
    return getMonthText(props.reachDate);
  }, [props.reachDate]);

  const currentYear = useMemo(
    () => getYear(props.reachDate),
    [props.reachDate]
  );

  const goNextMonth = () => {
    const newDate = new Date(props.reachDate);
    newDate.setMonth(props.reachDate.getMonth() + 1);

    props.onDateChange(newDate);
  };

  const goPreviousMonth = () => {
    const newDate = new Date(props.reachDate);
    newDate.setMonth(props.reachDate.getMonth() - 1);

    // dont update if date is in the past
    if (+new Date() > +newDate) {
      return;
    }

    props.onDateChange(newDate);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'ArrowLeft') {
      goPreviousMonth();
    } else if (e.code === 'ArrowRight') {
      goNextMonth();
    }
  };

  return (
    <div {...props}>
      <Label
        htmlFor="reachGoalBy"
        className="d-block mb-1"
        text="Reach goal by"
      />
      <div onKeyDown={onKeyDown} tabIndex={0} style={{ position: 'relative' }}>
        <input
          onClick={goPreviousMonth}
          type="image"
          style={{
            position: 'absolute',
            left: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
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
            zIndex: 1,
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
            <p style={{ fontWeight: 600 }}>{currentMonth}</p>
            <p style={{ fontWeight: 400, color: colors.blueGray400 }}>
              {currentYear}
            </p>
          </div>
        </div>
        <input
          onClick={goNextMonth}
          type="image"
          style={{
            position: 'absolute',
            right: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
          }}
          src={chevronRight}
          alt="chevron-right"
        />
      </div>
    </div>
  );
}
