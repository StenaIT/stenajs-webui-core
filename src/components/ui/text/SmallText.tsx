import * as React from 'react';
import { GetTheme } from '../../theme/GetTheme';
import { TextBase, TextBaseSharedProps } from './TextBase';

export type SmallTextProps = TextBaseSharedProps;

export class SmallText extends React.PureComponent<SmallTextProps> {
  render() {
    return (
      <GetTheme>
        {theme => (
          <TextBase
            {...this.props}
            fontSize={theme.components.SmallText.fontSize}
            fontFamily={theme.components.SmallText.fontFamily}
          />
        )}
      </GetTheme>
    );
  }
}
