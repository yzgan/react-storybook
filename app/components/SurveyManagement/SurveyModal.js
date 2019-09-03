import React from 'react';
import Proptypes from 'prop-types';
import {
  Modal,
  Row,
  Col,
  Radio
} from 'antd';


const SurveyModal = (props) => {
  const {
    title,
    visible,
    handleOk,
    handleCancel,
    surveyCategoryStateHook,
    surveyTypeStateHook,
    availableSurveyCategories,
    availableSurveyTypes,
    width
  } = props;

  const [category, setCategory] = surveyCategoryStateHook;
  const [type, setType] = surveyTypeStateHook;

  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width={width}
    >
      <Row>
        <Col span={4}>
          Survey Category:
        </Col>
        <Col>
          <Radio.Group onChange={handleCategoryChange} value={category}>
            {
              availableSurveyCategories.map(
                (categoryName) => <Radio key={categoryName} value={categoryName}>{categoryName}</Radio>
              )
            }
          </Radio.Group>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          Survey Type:
        </Col>
        <Col>
          <Radio.Group onChange={handleTypeChange} value={type}>
            {
              availableSurveyTypes.map(
                (typeName) => <Radio key={typeName} value={typeName}>{typeName}</Radio>
              )
            }
          </Radio.Group>
        </Col>
      </Row>
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
  width: Proptypes.number
};

SurveyModal.defaultProps = {
  title: 'Please Set Modal Title',
  width: 1000
};

export default SurveyModal;
