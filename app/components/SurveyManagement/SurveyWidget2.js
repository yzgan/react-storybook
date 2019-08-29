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

const SurveyWidget2 = (props) => {
  const { title, data } = props;
  const [prevData, currentData] = data;
  const satTrendData = data.map((element) => (element.sat.value));
  const netTrendData = data.map((element) => (element.net.value));

  return (
    <Card title={title}>
      <Row>
        <Col sm={24} md={6}>
          <Row>
            <Col span={24} style={{ height: 250 }}>
              <GaugeMeter name="Prev SAT" val={prevData.sat.value} min={1} max={5} breakpoints={[2, 4]} height={400} />
            </Col>
            <Col span={24} align="middle">
              { prevData.sat.date && <p>As of {moment(prevData.sat.date).format('DD MMM YYYY')}</p> }
            </Col>
          </Row>
        </Col>
        <Col sm={24} md={6}>
          <Row>
            <Col span={24} style={{ height: 250 }}>
              <GaugeMeter name="Current SAT" val={currentData.sat.value} min={1} max={5} breakpoints={[2, 4]} height={400} />
            </Col>
            <Col span={24} align="middle">
              { currentData.sat.date && <p>As of {moment(currentData.sat.date).format('DD MMM YYYY')}</p> }
            </Col>
            <Col span={24} align="middle" style={{ position: 'relative', bottom: 85, left: 40 }}>
              <TrendIndicator data={satTrendData}></TrendIndicator>
            </Col>
          </Row>
        </Col>
        <Col sm={24} md={6}>
          <Row>
            <Col span={24} style={{ height: 250 }}>
              <GaugeMeter name="Prev NET" val={prevData.net.value} min={0} max={10} breakpoints={[2, 8]} height={400} />
            </Col>
            <Col span={24} align="middle">
              { prevData.net.date && <p>As of {moment(prevData.net.date).format('DD MMM YYYY')}</p> }
            </Col>
          </Row>
        </Col>
        <Col sm={24} md={6}>
          <Row>
            <Col span={24} style={{ height: 250 }}>
              <GaugeMeter name="Current NET" val={currentData.net.value} min={0} max={10} breakpoints={[2, 8]} height={400} />
            </Col>
            <Col span={24} align="middle">
              { currentData.net.date && <p>As of {moment(currentData.net.date).format('DD MMM YYYY')}</p> }
            </Col>
            <Col span={24} align="middle" style={{ position: 'relative', bottom: 85, left: 40 }}>
              <TrendIndicator data={netTrendData}></TrendIndicator>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

SurveyWidget2.propTypes = {
  title: propTypes.string,
  data: propTypes.array
};

export default SurveyWidget2;
