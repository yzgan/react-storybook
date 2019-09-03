import React, { useState } from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import {
  Card,
  Row,
  Col
} from 'antd';
import GaugeMeter from './GaugeMeter';
import TrendIndicator from './TrendIndicator';
import SurveyModal from './SurveyModal';

const SurveyWidget = (props) => {
  const { title, data } = props;
  const {
    sat, net, textResponses, date
  } = data.surveyManagement.surveys;
  const satTrendData = textResponses.map((element) => (element.sat));
  const netTrendData = textResponses.map((element) => (element.net));

  // TODO: use react redux store for state management.
  const [visible, setVisible] = useState(false);
  const [surveyCategory, setSurveyCategory] = useState('non-gaming');
  const [surveyType, setSurveyType] = useState('');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Card title={title}>
      <Row onClick={showModal}>
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
      <SurveyModal
        title="Customer Satisfactory Survey"
        availableSurveyCategories={data.surveyManagement.options.availableSurveyCategories}
        availableSurveyTypes={data.surveyManagement.options.availableSurveyTypes}
        surveyCategoryStateHook={[surveyCategory, setSurveyCategory]}
        surveyTypeStateHook={[surveyType, setSurveyType]}
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </Card>
  );
};

SurveyWidget.propTypes = {
  title: propTypes.string,
  data: propTypes.object
};

export default SurveyWidget;
