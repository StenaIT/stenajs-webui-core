import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { object, withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { stenaWebUiCoreStyles } from '../../.storybook/theme/stylesheet';
import { ArrowBox } from '../../src/components/ui/box/ArrowBox';
import { Indent } from '../../src/components/ui/layout/Indent';
import { Spacing } from '../../src/components/ui/layout/Spacing';
import { DefaultText } from '../../src/components/ui/text';
import { StorybookCanvasWrapper } from '../utils/StorybookCanvasWrapper';

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const addArrowBoxStories = () => {
  storiesOf('Box/ArrowBox', module)
    .addDecorator(
      withInfo({
        styles: stenaWebUiCoreStyles,
        propTablesExclude: [DefaultText, Spacing, Indent],
        inline: true,
      }),
    )
    .addDecorator(withKnobs)
    .add(
      'standard',
      () => (
        <StorybookCanvasWrapper>
          <ArrowBox>
            <Spacing>
              <Indent>
                <DefaultText>
                  {object('title', { title: 'A nice arrow box' }).title}
                </DefaultText>
              </Indent>
            </Spacing>
          </ArrowBox>
        </StorybookCanvasWrapper>
      ),
      {
        notes: 'Hey! Am I working?',
      },
    )
    .add(
      'arrow left',
      () => (
        <StorybookCanvasWrapper>
          <ArrowBox direction={'left'}>
            <Spacing>
              <DefaultText>
                {object('title', { title: 'A nice arrow box' }).title}
              </DefaultText>
            </Spacing>
          </ArrowBox>
        </StorybookCanvasWrapper>
      ),
      {
        notes: 'Hey! Am I working?',
      },
    )
    .add(
      'arrow right',
      () => (
        <StorybookCanvasWrapper>
          <ArrowBox direction={'right'}>
            <Spacing>
              <DefaultText>
                {object('title', { title: 'A nice arrow box' }).title}
              </DefaultText>
            </Spacing>
          </ArrowBox>
        </StorybookCanvasWrapper>
      ),
      {
        notes: 'Hey! Am I working?',
      },
    )
    .add(
      'arrow down',
      () => (
        <StorybookCanvasWrapper>
          <ArrowBox direction={'down'}>
            <Spacing>
              <DefaultText>
                {object('title', { title: 'A nice arrow box' }).title}
              </DefaultText>
            </Spacing>
          </ArrowBox>
        </StorybookCanvasWrapper>
      ),
      {
        notes: 'Hey! Am I working?',
      },
    );
};
