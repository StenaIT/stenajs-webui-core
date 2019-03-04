import * as React from 'react';
import { setDisplayName } from 'recompose';
import { FlexBase, FlexBaseCommonProps } from './FlexBase';

export const Column = setDisplayName<FlexBaseCommonProps>('Column')(
  (props: FlexBaseCommonProps) => (
    <FlexBase {...props} flexDirection={'column'} />
  ),
);
