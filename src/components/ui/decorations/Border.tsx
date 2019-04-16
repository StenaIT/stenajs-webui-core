import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import { withTheme, WithThemeProps } from '../../util/enhancers/WithTheme';

export type BorderStyle =
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'groove'
  | 'hidden'
  | 'inset'
  | 'none'
  | 'outset'
  | 'ridge'
  | 'solid';

export interface BorderProps {
  /** The border style of the border. Ex: '1px solid black' */
  border?: string;
  /** The border-style of the border. 'solid' for example. */
  borderStyle?: BorderStyle;
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
  style?: React.CSSProperties;
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
  /** Class name on the border div */
  className?: string;
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
      borderStyle = 'solid',
      style,
      top,
      bottom,
      left,
      right,
      overflow,
      theme,
      className,
      border,
    } = this.props;
    const isAny = top || bottom || left || right;
    const all = !isAny;

    return (
      <div
        style={{
          border,
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
          borderTopStyle: all || top ? borderStyle : undefined,
          borderBottomStyle: all || bottom ? borderStyle : undefined,
          borderLeftStyle: all || left ? borderStyle : undefined,
          borderRightStyle: all || right ? borderStyle : undefined,
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
        className={className}
      >
        {children}
      </div>
    );
  }
}

export const Border = setDisplayName<BorderProps>('Border')(
  compose<BorderProps & WithThemeProps, BorderProps>(withTheme)(
    BorderComponent,
  ),
);
