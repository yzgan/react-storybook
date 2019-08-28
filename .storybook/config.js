import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

function loadStories() {
  require("../stories/index")
}

configure(loadStories, module);

addDecorator(withInfo);
