import * as React from 'react';
import './TextBase.css';

export interface TextBaseProps {
  /** The font size of the text. */
  fontSize: string;
  /** The font family of the text. */
  fontFamily: string;
}

export interface TextBaseSharedProps {
  /** The color family of the text. */
  color?: string;
  /** Disables wrapping of text. */
  nowrap?: boolean;
  /** Adds underline to text. */
  underline?: boolean;
  /** Makes text bold. */
  bold?: boolean;
  /** Adds underline when mouse hovers over text. */
  hoverUnderline?: boolean;
  /** Makes text italic. */
  italic?: boolean;
  /** Disables the ability to select the text. */
  disableSelect?: boolean;
}

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
    } = this.props;
    return (
      <span
        className={hoverUnderline ? 'hover-text-underline' : undefined}
        style={{
          fontSize,
          fontStyle: italic ? 'italic' : undefined,
          color,
          fontFamily,
          whiteSpace: nowrap ? 'nowrap' : undefined,
          textDecoration: underline ? 'underline' : undefined,
          fontWeight: bold ? 'bold' : undefined,
          userSelect: disableSelect ? 'none' : undefined,
        }}
      >
        {this.props.children}
      </span>
    );
  }
}
