import * as React from 'react';
import { setDisplayName } from 'recompose';
import { Space } from '../layout';

export type Position = 'top-left' | 'top-right' | 'left-top' | 'left-bottom';

export interface LabelProps {
  /** Children that should be displayed next to label */
  children: React.ReactNode;
  /** Component for label */
  label: React.ReactNode;
  /** Sets distance from label to children */
  num?: number;
  /** Sets position on label */
  position?: Position;
}

type FlexDirection = 'row' | 'column';

const getDirection = (position: Position): FlexDirection => {
  if (position === 'top-left' || position === 'top-right') {
    return 'column';
  }
  return 'row';
};

type Aligning = 'flex-start' | 'center' | 'flex-end';

const getAligning = (position: Position): Aligning => {
  if (position === 'left-top' || position === 'top-left') {
    return 'flex-start';
  } else if (position === 'left-bottom' || position === 'top-right') {
    return 'flex-end';
  }
  return 'flex-start';
};

export const Label = setDisplayName<LabelProps>('Label')(
  ({ children, label, num, position = 'top-left' }: LabelProps) => {
    return (
      <div
        style={{
          display: 'inline-flex',
          flexDirection: getDirection(position),
        }}
      >
        <div style={{ alignSelf: getAligning(position) }}>{label}</div>
        <Space num={num} />
        <div>{children}</div>
      </div>
    );
  },
);
