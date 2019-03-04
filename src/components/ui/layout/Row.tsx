import * as React from 'react';
import { setDisplayName } from 'recompose';
import { FlexBase, FlexBaseCommonProps } from './FlexBase';

export const Row = setDisplayName<FlexBaseCommonProps>('Row')(
  (props: FlexBaseCommonProps) => <FlexBase {...props} flexDirection={'row'} />,
);
