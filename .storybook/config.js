// addon-info
import { setDefaults } from '@storybook/addon-info';
import { addParameters, configure } from '@storybook/react';

function loadStories() {
    require('../stories/index.ts');
    // You can require as many stories as you need.
}

setDefaults({
  inline: true,
});

addParameters({
  options: {
    theme: {},
  },
});

configure(loadStories, module);
