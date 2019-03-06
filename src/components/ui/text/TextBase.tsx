import styled from '@emotion/styled';
import { FontWeightProperty } from 'csstype';
import * as React from 'react';

export interface TextBaseProps {
  /** The font size of the text. */
  fontSize: string;
  /** The font family of the text. */
  fontFamily: string;
  /** The normal font weight of the text. */
  fontWeightNormal?: FontWeightProperty;
  /** The bold font weight of the text. */
  fontWeightBold: FontWeightProperty;
  /** The light font weight of the text. */
  fontWeightLight: FontWeightProperty;
}

export type TextBaseWeight = 'bold' | 'normal' | 'light';

export interface TextBaseSharedProps {
  /** The color family of the text. */
  color?: string;
  /** Disables wrapping of text. */
  nowrap?: boolean;
  /** Adds underline to text. */
  underline?: boolean;
  /**
   * Makes text bold.
   * @deprecated Use prop weight instead.
   */
  bold?: boolean;
  /** Font weight to use. */
  weight?: TextBaseWeight;
  /** Adds underline when mouse hovers over text. */
  hoverUnderline?: boolean;
  /** Makes text italic. */
  italic?: boolean;
  /** Disables the ability to select the text. */
  disableSelect?: boolean;
}

interface SpanWithHoverProps {
  hoverUnderline: boolean | undefined;
}

const SpanWithHover = styled.span<SpanWithHoverProps>`
  :hover {
    ${props => (props.hoverUnderline ? 'text-decoration: underline;' : '')};
  }
`;

export class TextBase extends React.PureComponent<
  TextBaseProps & TextBaseSharedProps
> {
  render() {
    const {
      fontSize,
      fontFamily,
      color,
      nowrap = false,
      underline,
      bold = false,
      hoverUnderline,
      italic,
      disableSelect,
      weight,
    } = this.props;
    return (
      <SpanWithHover
        hoverUnderline={hoverUnderline}
        style={{
          fontSize,
          fontStyle: italic ? 'italic' : undefined,
          color,
          fontFamily,
          whiteSpace: nowrap ? 'nowrap' : undefined,
          textDecoration: underline ? 'underline' : undefined,
          fontWeight: bold ? 'bold' : getWeight(weight, this.props),
          userSelect: disableSelect ? 'none' : undefined,
        }}
      >
        {this.props.children}
      </SpanWithHover>
    );
  }
}

const getWeight = (
  weight: TextBaseWeight | undefined,
  props: TextBaseProps,
): FontWeightProperty | undefined => {
  switch (weight) {
    case 'bold':
      return props.fontWeightBold;
    case 'light':
      return props.fontWeightLight;
    default:
      return props.fontWeightNormal;
  }
};
