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
  const {
    textResponses, date
  } = data.surveyManagement.surveys;
  const satTrendData = textResponses.map((element) => (element.sat));
  const netTrendData = textResponses.map((element) => (element.net));
  const { sat: prevSat, net: prevNet } = textResponses[textResponses.length - 2];
  const { sat: currentSat, net: currentNet } = textResponses[textResponses.length - 1];

  return (
    <Card title={title}>
      <Row>
        <Col sm={24} md={6}>
          <Row>
            <Col span={24} style={{ height: 250 }}>
              <GaugeMeter name="Prev SAT" val={prevSat} min={1} max={5} breakpoints={[2, 4]} height={400} />
            </Col>
            <Col span={24} align="middle">
              { date && <p>As of {moment(date).format('DD MMM YYYY')}</p> }
            </Col>
          </Row>
        </Col>
        <Col sm={24} md={6}>
          <Row>
            <Col span={24} style={{ height: 250 }}>
              <GaugeMeter name="Current SAT" val={currentSat} min={1} max={5} breakpoints={[2, 4]} height={400} />
            </Col>
            <Col span={24} align="middle">
              { date && <p>As of {moment(date).format('DD MMM YYYY')}</p> }
            </Col>
            <Col span={24} align="middle" style={{ position: 'relative', bottom: 85, left: 40 }}>
              <TrendIndicator data={satTrendData}></TrendIndicator>
            </Col>
          </Row>
        </Col>
        <Col sm={24} md={6}>
          <Row>
            <Col span={24} style={{ height: 250 }}>
              <GaugeMeter name="Prev NET" val={prevNet} min={0} max={10} breakpoints={[2, 8]} height={400} />
            </Col>
            <Col span={24} align="middle">
              { date && <p>As of {moment(date).format('DD MMM YYYY')}</p> }
            </Col>
          </Row>
        </Col>
        <Col sm={24} md={6}>
          <Row>
            <Col span={24} style={{ height: 250 }}>
              <GaugeMeter name="Current NET" val={currentNet} min={0} max={10} breakpoints={[2, 8]} height={400} />
            </Col>
            <Col span={24} align="middle">
              { date && <p>As of {moment(date).format('DD MMM YYYY')}</p> }
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
