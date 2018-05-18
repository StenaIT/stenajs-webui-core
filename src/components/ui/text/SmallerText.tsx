import * as React from 'react';
import { GetTheme } from '../../theme/GetTheme';
import { TextBase, TextBaseSharedProps } from './TextBase';

export type SmallerTextProps = TextBaseSharedProps;

export class SmallerText extends React.PureComponent<SmallerTextProps> {
  render() {
    return (
      <GetTheme>
        {theme => (
          <TextBase
            {...this.props}
            fontSize={theme.components.SmallerText.fontSize}
            fontFamily={theme.components.SmallerText.fontFamily}
          />
        )}
      </GetTheme>
    );
  }
}
