import * as React from 'react';
import { Clickable, ClickableProps } from './Clickable';

export const ClickableSwitcher: React.FC<ClickableProps> = props => {
  if (props.onClick || props.onDblClick) {
    return <Clickable {...props} />;
  }
  if (props.children) {
    return <>{props.children}</>;
  }
  return null;
};
