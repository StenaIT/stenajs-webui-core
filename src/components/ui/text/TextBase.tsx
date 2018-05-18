import * as React from 'react';
import { GetTheme } from '../../theme/GetTheme';
import './TextBase.css';

export interface TextBaseProps {
  fontSize: string;
  fontFamily: string;
}

export interface TextBaseSharedProps {
  color?: string;
  nowrap?: boolean;
  underline?: boolean;
  bold?: boolean;
  hoverUnderline?: boolean;
  italic?: boolean;
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
      <GetTheme>
        {theme => (
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
        )}
      </GetTheme>
    );
  }
}
