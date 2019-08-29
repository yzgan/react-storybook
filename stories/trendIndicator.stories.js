import React from 'react';
import { storiesOf } from '@storybook/react';
import TrendIndicator from '../app/components/SurveyManagement/TrendIndicator';

const trendIndicatorStories = storiesOf('Trend Indicator', module)
  .add('👍', () => (
    <TrendIndicator data={[0, 5]}></TrendIndicator>
  ))
  .add('➖', () => (
    <TrendIndicator data={[4, 4]}></TrendIndicator>
  ))
  .add('👎', () => (
    <TrendIndicator data={[5, 4]}></TrendIndicator>
  ));

export default trendIndicatorStories;
