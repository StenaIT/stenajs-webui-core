import * as React from 'react';
import styled from '@emotion/styled';
import { setDisplayName } from 'recompose';

export const BOX_SHADOW = 'rgba(0, 0, 0, 0.15) 0 2px 4px 0';

export const BoxShadow = setDisplayName('BoxShadow')(styled('div')`
  box-shadow: ${BOX_SHADOW};
`);

export const __C_BOX_SHADOW = <div />;
