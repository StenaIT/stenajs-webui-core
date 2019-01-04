import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Background } from '../../src/components/ui/colors';
import { Indent, Spacing } from '../../src/components/ui/layout';
import { DefaultText } from '../../src/components/ui/text/DefaultText';

export const addBackgroundStories = () => {
  storiesOf('Colors/Background', module).add(
    'standard',
    withInfo()(() => (
      <Background color={'#7fc2ff'}>
        <Spacing>
          <Indent>
            <DefaultText>That is a nice background, right there!</DefaultText>
          </Indent>
        </Spacing>
      </Background>
    )),
  );
};
