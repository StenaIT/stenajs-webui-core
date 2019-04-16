import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Background } from '../../src/components/ui/colors';
import { Indent, Spacing } from '../../src/components/ui/layout';
import { DefaultText } from '../../src/components/ui/text/DefaultText';
import { stenaWebUiCoreStyles } from '../../src/util/theme/stylesheet';
import { withKnobs } from '@storybook/addon-knobs';

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
