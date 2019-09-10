import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col
} from 'antd';
import SurveyMeter from './SurveyMeter';

const SurveyModalResults = ({ data, surveyMeterProps }) => {
  const { textResponses, statistic } = data;

  if (data && textResponses && statistic) {
    return (
      <div id="survey-modal-results" style={{ padding: 20 }}>
        <Row>
          <Col span={12}>
            result 1
            <SurveyMeter {...surveyMeterProps} />
          </Col>
          <Col span={12}>
            result 2
          </Col>
        </Row>
      </div>
    );
  }
  return (<div>No Survey Result Data Available</div>);
};


SurveyModalResults.propTypes = {
  data: PropTypes.object,
  surveyMeterProps: PropTypes.object.isRequired
};

export default SurveyModalResults;
