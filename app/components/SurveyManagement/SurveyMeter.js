import React from 'react';
// import PropTypes from 'prop-types'
import moment from 'moment';
import {
  Row,
  Col
} from 'antd';
import TrendIndicator from './TrendIndicator';
import GaugeMeter from './GaugeMeter';

const SurveyMeter = ({
  date, sat, net, satTrendData, netTrendData
}) => (
  <Row>
    <Col sm={24} md={12}>
      <Row>
        <Col span={24} style={{ height: 250 }}>
          <GaugeMeter name="SAT" val={sat} min={1} max={5} breakpoints={[2, 4]} height={400} />
        </Col>
        <Col span={24} align="middle">
          { date && <p>As of {moment(date).format('DD MMM YYYY')}</p> }
        </Col>
        <Col span={24} align="middle" style={{ position: 'relative', bottom: 80, left: 40 }}>
          <TrendIndicator data={satTrendData}></TrendIndicator>
        </Col>
      </Row>
    </Col>
    <Col sm={24} md={12}>
      <Row>
        <Col span={24} style={{ height: 250 }}>
          <GaugeMeter name="NET" val={net} min={0} max={10} breakpoints={[2, 8]} height={400} />
        </Col>
        <Col span={24} align="middle">
          { date && <p>As of {moment(date).format('DD MMM YYYY')}</p> }
        </Col>
        <Col span={24} align="middle" style={{ position: 'relative', bottom: 80, left: 40 }}>
          <TrendIndicator data={netTrendData}></TrendIndicator>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default SurveyMeter;
