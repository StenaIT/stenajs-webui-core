import { setDefaults, withInfo } from '@storybook/addon-info';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { StenaTheme } from './stena-theme';
import { typography } from "./base";

function loadStories() {
    require('../stories/index.ts');
    // You can require as many stories as you need.
}

setDefaults({
  inline: true,
});

addParameters({
  options: {
    theme: StenaTheme,
  },
});

configure(loadStories, module);
