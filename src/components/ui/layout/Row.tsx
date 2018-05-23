import * as React from 'react';
import { FlexBase, FlexBaseCommonProps } from './FlexBase';

export const Row = (props: FlexBaseCommonProps) => (
  <FlexBase {...props} flexDirection={'row'} />
);
