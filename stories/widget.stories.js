import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Row,
  Col
} from 'antd';
import { SurveyWidget, SurveyWidget2, GaugeMeter } from '../app/components/SurveyManagement';

const widgetGaugeStories = storiesOf('Widget/Gauge', module)
  .add('SAT', () => (
    <GaugeMeter
      name="SAT"
      min={0}
      max={6}
      breakpoints={[2, 4]}
      val={5}
    >
    </GaugeMeter>
  ))
  .add('NET', () => (
    <GaugeMeter
      name="NET"
      min={0}
      max={10}
      breakpoints={[4, 8]}
      val={10}
    >
    </GaugeMeter>
  ));

const dataNull = [
  {
    sat: { value: null, date: null },
    net: { value: null, date: null }
  }
];

const data = [
  {
    sat: { value: 2, date: new Date().toISOString() },
    net: { value: 10, date: new Date().toISOString() }
  }
];

const dataMultiple = [
  {
    sat: { value: 2, date: new Date().toISOString() },
    net: { value: 10, date: new Date().toISOString() }
  },
  {
    sat: { value: 4, date: new Date().toISOString() },
    net: { value: 8, date: new Date().toISOString() }
  }
];

const surveyStories = storiesOf('Survey', module)
  .add('No data', () => (
    <Row type="flex" justify="space-around" style={{ padding: 30 }}>
      <Col span={24}>
        <SurveyWidget title="Overall Survey" data={dataNull}></SurveyWidget>
      </Col>
    </Row>
  ))
  .add('with single response', () => (
    <Row type="flex" justify="space-around" style={{ padding: 30 }}>
      <Col span={24}>
        <SurveyWidget title="Overall Survey" data={data}></SurveyWidget>
      </Col>
    </Row>
  ))
  .add('with multiple responses - 1', () => (
    <Row type="flex" justify="space-around" style={{ padding: 30 }}>
      <Col span={24}>
        <SurveyWidget title="Overall Survey" data={dataMultiple}></SurveyWidget>
      </Col>
    </Row>
  ))
  .add('with multiple responses - 2', () => (
    <Row type="flex" justify="space-around" style={{ padding: 30 }}>
      <Col span={24}>
        <SurveyWidget2 title="Overall Survey" data={dataMultiple}></SurveyWidget2>
      </Col>
    </Row>
  ));

export default {
  surveyStories,
  widgetGaugeStories
};
