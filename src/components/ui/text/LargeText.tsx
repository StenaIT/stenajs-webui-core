import * as React from 'react';
import { GetTheme } from '../../theme/GetTheme';
import { TextBase, TextBaseSharedProps } from './TextBase';

export type LargeTextProps = TextBaseSharedProps;

export class LargeText extends React.PureComponent<LargeTextProps> {
  render() {
    return (
      <GetTheme>
        {theme => (
          <TextBase
            {...this.props}
            fontSize={theme.components.LargeText.fontSize}
            fontFamily={theme.components.LargeText.fontFamily}
          />
        )}
      </GetTheme>
    );
  }
}
