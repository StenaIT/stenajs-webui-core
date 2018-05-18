import * as React from 'react';
import { GetTheme } from '../../theme/GetTheme';
import { TextBase, TextBaseSharedProps } from './TextBase';

export type HeaderTextProps = TextBaseSharedProps;

export class HeaderText extends React.PureComponent<HeaderTextProps> {
  render() {
    return (
      <GetTheme>
        {theme => (
          <TextBase
            {...this.props}
            fontSize={theme.components.HeaderText.fontSize}
            fontFamily={theme.components.HeaderText.fontFamily}
          />
        )}
      </GetTheme>
    );
  }
}
