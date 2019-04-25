import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { stenaWebUiCoreStyles } from '../../.storybook/theme/stylesheet';
import { Box } from '../../src/components/ui/layout';
import { Indent } from '../../src/components/ui/layout/Indent';
import { Spacing } from '../../src/components/ui/layout/Spacing';
import { DefaultText } from '../../src/components/ui/text';

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const addBoxStories = () => {
  storiesOf('Box/Box', module)
    .addDecorator(
      withInfo({
        styles: stenaWebUiCoreStyles,
        propTablesExclude: [DefaultText, Spacing, Indent],
        inline: true,
      }),
    )
    .add('standard', () => (
      <Box>
        <div>hello</div>
        <div>world</div>
      </Box>
    ))
    .add('row', () => (
      <Box row>
        <div>hello</div>
        <div>world</div>
      </Box>
    ))
    .add('row with justifyContent', () => (
      <Box row justifyContent={'flex-end'}>
        <div>hello</div>
        <div>world</div>
      </Box>
    ))
    .add('background color', () => (
      <Box
        background={'linear-gradient(to right, #e66465, #9198e5)'}
        indent
        spacing
      >
        <div>hello</div>
        <div>world</div>
      </Box>
    ))
    .add('flex grow children', () => (
      <Box row>
        <Box background="#DFCD59" indent spacing>
          hello
        </Box>
        <Box background="#D9419C" flex={1} indent spacing>
          hello
        </Box>
        <Box background="#219CA6" flex={2} indent spacing>
          hello
        </Box>
        <Box background="#23858C" indent spacing>
          world
        </Box>
      </Box>
    ));
};
