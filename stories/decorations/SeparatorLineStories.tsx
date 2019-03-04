import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Background } from '../../src/components/ui/colors';
import { BoxShadow } from '../../src/components/ui/decorations/BoxShadow';
import { SeparatorLine } from '../../src/components/ui/decorations/SeparatorLine';
import { Indent, Spacing } from '../../src/components/ui/layout';
import { LargeText } from '../../src/components/ui/text';
import { DefaultText } from '../../src/components/ui/text/DefaultText';

export const addSeparatorLineStories = () => {
  storiesOf('Decorators/SeparatorLine', module)
    .addDecorator(withInfo({ propTablesExclude: [DefaultText] }))
    .add('default', () => (
      <div style={{ width: '300px' }}>
        <BoxShadow>
          <Background color={'#ffff'}>
            <Spacing>
              <Indent>
                <LargeText>Some title</LargeText>
              </Indent>
            </Spacing>
            <SeparatorLine />
            <Spacing>
              <Indent>
                <DefaultText>Some content.</DefaultText>
              </Indent>
            </Spacing>
          </Background>
        </BoxShadow>
      </div>
    ));
};
