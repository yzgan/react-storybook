import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import {
  Card,
  Row,
  Col
} from 'antd';
import GaugeMeter from './GaugeMeter';
import TrendIndicator from './TrendIndicator';

const SurveyWidget = (props) => {
  const { title, data } = props;
  const { csat, nps } = data[data.length - 1];
  const csatTrendData = data.map((element) => (element.csat.value));
  const npsTrendData = data.map((element) => (element.nps.value));

  return (
    <Card title={title}>
      <Row>
        <Col sm={24} md={12}>
          <Row>
            <Col span={24} style={{ height: 250 }}>
              <GaugeMeter name="CSAT" val={csat.value} min={1} max={5} breakpoints={[2, 4]} height={400} />
            </Col>
            <Col span={24} align="middle">
              { csat.date && <p>As of {moment(csat.date).format('DD MMM YYYY')}</p> }
            </Col>
            <Col span={24} align="middle" style={{ position: 'relative', bottom: 80, left: 40 }}>
              <TrendIndicator data={csatTrendData}></TrendIndicator>
            </Col>
          </Row>
        </Col>
        <Col sm={24} md={12}>
          <Row>
            <Col span={24} style={{ height: 250 }}>
              <GaugeMeter name="NPS" val={nps.value} min={0} max={10} breakpoints={[2, 8]} height={400} />
            </Col>
            <Col span={24} align="middle">
              { nps.date && <p>As of {moment(nps.date).format('DD MMM YYYY')}</p> }
            </Col>
            <Col span={24} align="middle" style={{ position: 'relative', bottom: 80, left: 40 }}>
              <TrendIndicator data={npsTrendData}></TrendIndicator>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

SurveyWidget.propTypes = {
  title: propTypes.string,
  data: propTypes.array
};

export default SurveyWidget;
