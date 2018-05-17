import * as React from 'react';
import { GetTheme } from '../../theme/GetTheme';

export interface DefaultTextProps {
  color?: string;
  nowrap?: boolean;
  underline?: boolean;
  bold?: boolean;
  hoverUnderline?: boolean;
  italic?: boolean;
  disableSelect?: boolean;
}

export class DefaultText extends React.PureComponent<DefaultTextProps> {
  render() {
    const {
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
              fontSize: theme.fontSizes.normal,
              fontStyle: italic ? 'italic' : undefined,
              color,
              fontFamily: theme.fonts.primary,
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
