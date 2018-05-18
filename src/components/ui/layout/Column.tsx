import * as React from 'react';
import { FlexBase, FlexBaseCommonProps } from './FlexBase';

export const Column = (props: FlexBaseCommonProps) => (
  <FlexBase {...props} flexDirection={'column'} />
);
