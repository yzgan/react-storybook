import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Row,
  Col
} from 'antd';
import {
  SurveyWidget,
  SurveyWidget2,
  GaugeMeter,
  NoSurveyRecord
} from '../app/components/SurveyManagement';

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

const data = {
  surveyManagement: {
    options: {
      availableSurveyCategories: ['gaming', 'non-gaming'],
      availableSurveyTypes: ['durian event', 'mangosteen event']
    },
    surveys: {
      category: 'gaming',
      type: 'durian event',
      date: '2019-09-03T02:30:52.022Z',
      sat: 3,
      net: 8,
      textResponses: [
        {
          responseId: 1, sat: 5, net: 10, sentimentalScore: 7, date: '2019-09-03T02:30:52.022Z', content: 'Sangat menikmati pelayannya baik ramah dan bersahabat'
        }
      ],
      statistic: {
        fromDate: '2016-09-03T02:30:52.022Z',
        toDate: '2019-09-03T02:30:52.022Z',
        records: [
          {
            responseId: 1, sat: 5, net: 10, sentimentalScore: 8, date: '2018-01-03T02:30:52.022Z', content: 'Sangat menikmati pelayannya baik ramah dan bersahabat'
          }
        ],
      }
    }
  }
};

const dataMultiple = {
  surveyManagement: {
    options: {
      availableSurveyCategories: ['gaming', 'non-gaming'],
      availableSurveyTypes: ['durian event', 'mangosteen event']
    },
    surveys: {
      category: 'gaming',
      type: 'durian event',
      date: '2019-09-03T02:30:52.022Z',
      sat: 3,
      net: 8,
      textResponses: [
        {
          responseId: 1, sat: 5, net: 10, sentimentalScore: 7, date: '2019-09-03T02:30:52.022Z', content: 'Sangat menikmati pelayannya baik ramah dan bersahabat'
        },
        {
          responseId: 2, sat: 3, net: 8, sentimentalScore: 5, date: '2019-09-03T02:30:52.022Z', content: 'good services'
        },
      ],
      statistic: {
        fromDate: '2016-09-03T02:30:52.022Z',
        toDate: '2019-09-03T02:30:52.022Z',
        records: [
          {
            responseId: 1, sat: 5, net: 10, sentimentalScore: 8, date: '2018-01-03T02:30:52.022Z', content: 'Sangat menikmati pelayannya baik ramah dan bersahabat'
          },
          {
            responseId: 2, sat: 3, net: 8, sentimentalScore: 5, date: '2019-09-03T02:30:52.022Z', content: 'good services'
          },
        ],
      }
    }
  }
};

const dataNull = {
  surveyManagement: {
    options: {
      availableSurveyCategories: ['gaming', 'non-gaming'],
      availableSurveyTypes: ['durian event', 'mangosteen event']
    },
    surveys: {
      category: 'gaming',
      type: 'durian event',
      date: null,
      sat: null,
      net: null,
      textResponses: [],
      statistic: {
        fromDate: '2016-09-03T02:30:52.022Z',
        toDate: '2019-09-03T02:30:52.022Z',
        records: [],
      }
    }
  }
};

const surveyStories = storiesOf('Survey', module)
  .add('No Survey Record', () => (
    <Row type="flex" justify="space-around" style={{ padding: 30 }}>
      <Col span={24}>
        <NoSurveyRecord title="Overall Survey" />
      </Col>
    </Row>
  ))
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
