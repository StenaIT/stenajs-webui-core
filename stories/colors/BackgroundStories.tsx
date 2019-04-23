import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { stenaWebUiCoreStyles } from '../../.storybook/theme/stylesheet';
import { Background } from '../../src/components/ui/colors';
import { Indent, Spacing } from '../../src/components/ui/layout';
import { DefaultText } from '../../src/components/ui/text/DefaultText';

export const addBackgroundStories = () => {
  storiesOf('Colors/Background', module)
    .addDecorator(
      withInfo({
        styles: stenaWebUiCoreStyles,
        propTablesExclude: [DefaultText, Spacing, Indent],
        inline: true,
      }),
    )
    .addDecorator(withKnobs)
    .add('standard', () => (
      <Background color={'#7fc2ff'}>
        <Spacing>
          <Indent>
            <DefaultText>That is a nice background, right there!</DefaultText>
          </Indent>
        </Spacing>
      </Background>
    ));
};
