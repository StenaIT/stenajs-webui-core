import * as React from 'react';
import { CSSProperties } from 'react';
import { GetTheme } from '../../theme/GetTheme';

export interface BorderProps {
  width?: number;
  color?: string;
  flex?: number;
  borderRadius?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  style?: CSSProperties;
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  overflow?: 'auto' | 'hidden' | 'scroll' | 'visible';
}

export class Border extends React.Component<BorderProps> {
  render() {
    const {
      children,
      width = '1px',
      color,
      flex,
      borderRadius,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      style,
      top,
      bottom,
      left,
      right,
      overflow,
    } = this.props;
    const isAny = top || bottom || left || right;
    const all = !isAny;

    return (
      <GetTheme>
        {theme => (
          <div
            style={{
              borderTopWidth: all || top ? width : undefined,
              borderBottomWidth: all || bottom ? width : undefined,
              borderLeftWidth: all || left ? width : undefined,
              borderRightWidth: all || right ? width : undefined,
              borderTopColor:
                all || top ? color || theme.colors.primaryText : undefined,
              borderBottomColor:
                all || bottom ? color || theme.colors.primaryText : undefined,
              borderLeftColor:
                all || left ? color || theme.colors.primaryText : undefined,
              borderRightColor:
                all || right ? color || theme.colors.primaryText : undefined,
              borderTopStyle: all || top ? 'solid' : undefined,
              borderBottomStyle: all || bottom ? 'solid' : undefined,
              borderLeftStyle: all || left ? 'solid' : undefined,
              borderRightStyle: all || right ? 'solid' : undefined,
              height: 'fit-content',
              flex,
              overflow,
              ...(borderTopLeftRadius ? { borderTopLeftRadius } : undefined),
              ...(borderTopRightRadius ? { borderTopRightRadius } : undefined),
              ...(borderBottomLeftRadius
                ? { borderBottomLeftRadius }
                : undefined),
              ...(borderBottomRightRadius
                ? { borderBottomRightRadius }
                : undefined),
              ...(borderRadius ? { borderRadius } : undefined),
              ...style,
            }}
          >
            {children}
          </div>
        )}
      </GetTheme>
    );
  }
}
