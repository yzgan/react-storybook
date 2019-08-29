import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Row,
  Col
} from 'antd';
import { SurveyWidget, GaugeMeter } from '../app/components/SurveyManagement';

const widgetGaugeStories = storiesOf('Widget/Gauge', module)
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

const dataNull = [
  {
    csat: { value: null, date: null },
    nps: { value: null, date: null }
  }
];

const data = [
  {
    csat: { value: 2, date: new Date().toISOString() },
    nps: { value: 10, date: new Date().toISOString() }
  }
];

const dataMultiple = [
  {
    csat: { value: 2, date: new Date().toISOString() },
    nps: { value: 10, date: new Date().toISOString() }
  },
  {
    csat: { value: 4, date: new Date().toISOString() },
    nps: { value: 8, date: new Date().toISOString() }
  }
];

const surveyStories = storiesOf('Survey', module)
  .add('No data', () => (
    <Row type="flex" justify="space-around" style={{ padding: 30 }}>
      <Col span={24}>
        <SurveyWidget title="Overall RWS Customer Satisfaction Survey" data={dataNull}></SurveyWidget>
      </Col>
    </Row>
  ))
  .add('with single response', () => (
    <Row type="flex" justify="space-around" style={{ padding: 30 }}>
      <Col span={24}>
        <SurveyWidget title="Overall RWS Customer Satisfaction Survey" data={data}></SurveyWidget>
      </Col>
    </Row>
  ))
  .add('with multiple responses', () => (
    <Row type="flex" justify="space-around" style={{ padding: 30 }}>
      <Col span={24}>
        <SurveyWidget title="Overall RWS Customer Satisfaction Survey" data={dataMultiple}></SurveyWidget>
      </Col>
    </Row>
  ));

export default {
  surveyStories,
  widgetGaugeStories
};
