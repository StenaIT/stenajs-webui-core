import { ReactNode } from 'react';
import * as React from 'react';
import { FlexBase, FlexBaseCommonProps } from './FlexBase';

export const Row = (props: FlexBaseCommonProps & { children?: ReactNode }) => (
  <FlexBase {...props} flexDirection={'row'} />
);
