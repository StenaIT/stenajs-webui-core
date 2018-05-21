import { CSSProperties } from 'react';
import * as React from 'react';

export type JustifyContentValue =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-around'
  | 'space-between';

export interface FlexBaseProps {
  flexDirection: 'row' | 'column';
}

export interface FlexBaseCommonProps {
  justifyContent?: JustifyContentValue;
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  alignSelf?: 'flex-start' | 'center' | 'flex-end';
  minWidth?: string;
  flexGrow?: number;
  width?: string;
  height?: string;
  minHeight?: string;
  backgroundColor?: string;
  paddingVertical?: string;
  paddingHorizontal?: string;
  border?: string;
  className?: string;
  hidden?: boolean;
  style?: CSSProperties;
  tabIndex?: number;
}

export class FlexBase extends React.Component<
  FlexBaseProps & FlexBaseCommonProps
> {
  render() {
    const {
      children,
      justifyContent,
      alignItems,
      alignSelf,
      flexGrow,
      width,
      minWidth,
      height,
      minHeight,
      backgroundColor,
      paddingVertical,
      paddingHorizontal,
      border,
      hidden,
      style,
      tabIndex,
      flexDirection,
    } = this.props;

    return (
      <div
        tabIndex={tabIndex}
        style={{
          display: hidden ? 'none' : 'flex',
          flexDirection,
          justifyContent,
          alignItems,
          alignSelf,
          flexGrow,
          width,
          minWidth: minWidth || width,
          height,
          minHeight,
          backgroundColor,
          border,
          paddingTop: paddingVertical,
          paddingBottom: paddingVertical,
          paddingLeft: paddingHorizontal,
          paddingRight: paddingHorizontal,
          ...style,
        }}
      >
        {children}
      </div>
    );
  }
}
