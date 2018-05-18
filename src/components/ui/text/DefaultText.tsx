import * as React from 'react';
import { GetTheme } from '../../theme/GetTheme';
import { TextBase, TextBaseSharedProps } from './TextBase';

export type DefaultTextProps = TextBaseSharedProps;

export class DefaultText extends React.PureComponent<DefaultTextProps> {
  render() {
    return (
      <GetTheme>
        {theme => (
          <TextBase
            {...this.props}
            fontSize={theme.components.DefaultText.fontSize}
            fontFamily={theme.components.DefaultText.fontFamily}
          />
        )}
      </GetTheme>
    );
  }
}
