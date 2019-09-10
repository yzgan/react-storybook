import React, { useState } from 'react';
import propTypes from 'prop-types';
import {
  Card,
} from 'antd';
import SurveyModal from './SurveyModal';
import SurveyMeter from './SurveyMeter';

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

  const surveyMeterProps = {
    date,
    sat,
    net,
    satTrendData,
    netTrendData
  };

  return (
    <Card title={title}>
      <div onClick={showModal} onKeyDown={showModal} role="button" tabIndex="-1">
        <SurveyMeter {...surveyMeterProps} />
      </div>
      <SurveyModal
        title="Customer Satisfactory Survey"
        availableSurveyCategories={data.surveyManagement.options.availableSurveyCategories}
        availableSurveyTypes={data.surveyManagement.options.availableSurveyTypes}
        surveyCategoryStateHook={[surveyCategory, setSurveyCategory]}
        surveyTypeStateHook={[surveyType, setSurveyType]}
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        data={data}
        surveyMeterProps={surveyMeterProps}
      />
    </Card>
  );
};

SurveyWidget.propTypes = {
  title: propTypes.string,
  data: propTypes.object
};

export default SurveyWidget;
