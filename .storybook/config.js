// addon-info
import { setDefaults } from '@storybook/addon-info';
import { configure } from '@storybook/react';

function loadStories() {
    require('../stories/index.js');
    // You can require as many stories as you need.
}

setDefaults({
  inline: true,
});

configure(loadStories, module);