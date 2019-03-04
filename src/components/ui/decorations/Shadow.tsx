import * as React from 'react';
import styled from 'react-emotion';
import { setDisplayName } from 'recompose';

export const Shadow = setDisplayName('Shadow')(styled('div')`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 4px;
`);

export const __SHADOW = <div />;
