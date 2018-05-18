import * as React from 'react';
import { GetTheme } from '../../theme/GetTheme';
import { TextBase, TextBaseSharedProps } from './TextBase';

export type TinyTextProps = TextBaseSharedProps;

export class TinyText extends React.PureComponent<TinyTextProps> {
  render() {
    return (
      <GetTheme>
        {theme => (
          <TextBase
            {...this.props}
            fontSize={theme.components.TinyText.fontSize}
            fontFamily={theme.components.TinyText.fontFamily}
          />
        )}
      </GetTheme>
    );
  }
}
