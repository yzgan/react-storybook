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
  const { sat, net } = data[data.length - 1];
  const satTrendData = data.map((element) => (element.sat.value));
  const netTrendData = data.map((element) => (element.net.value));

  return (
    <Card title={title}>
      <Row>
        <Col sm={24} md={12}>
          <Row>
            <Col span={24} style={{ height: 250 }}>
              <GaugeMeter name="SAT" val={sat.value} min={1} max={5} breakpoints={[2, 4]} height={400} />
            </Col>
            <Col span={24} align="middle">
              { sat.date && <p>As of {moment(sat.date).format('DD MMM YYYY')}</p> }
            </Col>
            <Col span={24} align="middle" style={{ position: 'relative', bottom: 80, left: 40 }}>
              <TrendIndicator data={satTrendData}></TrendIndicator>
            </Col>
          </Row>
        </Col>
        <Col sm={24} md={12}>
          <Row>
            <Col span={24} style={{ height: 250 }}>
              <GaugeMeter name="NET" val={net.value} min={0} max={10} breakpoints={[2, 8]} height={400} />
            </Col>
            <Col span={24} align="middle">
              { net.date && <p>As of {moment(net.date).format('DD MMM YYYY')}</p> }
            </Col>
            <Col span={24} align="middle" style={{ position: 'relative', bottom: 80, left: 40 }}>
              <TrendIndicator data={netTrendData}></TrendIndicator>
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
