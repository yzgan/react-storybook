import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import 'antd/dist/antd.css';

function loadStories() {
  require("../stories/index")
}

configure(loadStories, module);

addDecorator(withInfo);
