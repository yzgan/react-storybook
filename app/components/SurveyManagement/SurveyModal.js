import React from 'react';
import Proptypes from 'prop-types';
import {
  Modal,
} from 'antd';
import SurveyModalOptions from './SurveyModalOptions';
import SurveyModalResults from './SurveyModalResults';

const SurveyModal = (props) => {
  const {
    title,
    visible,
    handleOk,
    handleCancel,
    width,
    data
  } = props;

  return (
    <Modal title={title} visible={visible} onOk={handleOk} onCancel={handleCancel} footer={null} width={width}>
      <SurveyModalOptions {...props} />
      <SurveyModalResults data={data.surveyManagement.surveys} />
    </Modal>
  );
};

SurveyModal.propTypes = {
  title: Proptypes.string,
  availableSurveyCategories: Proptypes.array.isRequired,
  availableSurveyTypes: Proptypes.array.isRequired,
  visible: Proptypes.bool.isRequired,
  handleOk: Proptypes.func.isRequired,
  handleCancel: Proptypes.func.isRequired,
  surveyCategoryStateHook: Proptypes.array.isRequired,
  surveyTypeStateHook: Proptypes.array.isRequired,
  width: Proptypes.number,
  data: Proptypes.object
};

SurveyModal.defaultProps = {
  title: 'Please Set Modal Title',
  width: 1000
};

export default SurveyModal;
