import React from 'react';
import { storiesOf } from '@storybook/react';
import GaugeMeter from '../app/components/GaugeMeter';

const buttonStories = storiesOf('Widget/Gauge', module)
  .add('CSAT', () => (
    <GaugeMeter
      name="CSAT"
      min={0}
      max={6}
      breakpoints={[2, 4]}
      val={5}
    >
    </GaugeMeter>
  ))
  .add('NPS', () => (
    <GaugeMeter
      name="NPS"
      min={0}
      max={10}
      breakpoints={[4, 8]}
      val={10}
    >
    </GaugeMeter>
  ));

export default buttonStories;
