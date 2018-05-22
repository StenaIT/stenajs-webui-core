import * as React from 'react';
import { CSSProperties } from 'react';
import { compose } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

export interface BorderProps {
  /** The width of the border. */
  width?: number;
  /** The color of the border. */
  color?: string;
  /** Sets flex on style. */
  flex?: number;
  /** The border radius of the border. */
  borderRadius?: string;
  /** The top left border radius of the border. */
  borderTopLeftRadius?: string;
  /** The top right border radius of the border. */
  borderTopRightRadius?: string;
  /** The bottom left border radius of the border. */
  borderBottomLeftRadius?: string;
  /** The bottom right border radius of the border. */
  borderBottomRightRadius?: string;
  /** Custom style of the div that has the border. */
  style?: CSSProperties;
  /** Add border to the top. */
  top?: boolean;
  /** Add border to the bottom. */
  bottom?: boolean;
  /** Add border to the left. */
  left?: boolean;
  /** Add border to the right. */
  right?: boolean;
  /** Sets overflow of the border div. */
  overflow?: 'auto' | 'hidden' | 'scroll' | 'visible';
}

export class BorderComponent extends React.Component<
  BorderProps & WithThemeProps
> {
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
      theme,
    } = this.props;
    const isAny = top || bottom || left || right;
    const all = !isAny;

    return (
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
          ...(borderBottomLeftRadius ? { borderBottomLeftRadius } : undefined),
          ...(borderBottomRightRadius
            ? { borderBottomRightRadius }
            : undefined),
          ...(borderRadius ? { borderRadius } : undefined),
          ...style,
        }}
      >
        {children}
      </div>
    );
  }
}

export const Border = compose<BorderProps & WithThemeProps, BorderProps>(
  withTheme,
)(BorderComponent);
