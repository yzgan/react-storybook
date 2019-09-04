import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Dropdown, Radio, Button, Menu
} from 'antd';

const SurveyModalOptions = (props) => {
  const {
    surveyCategoryStateHook,
    surveyTypeStateHook,
    availableSurveyCategories,
    availableSurveyTypes
  } = props;

  const [category, setCategory] = surveyCategoryStateHook;
  const [type, setType] = surveyTypeStateHook;

  const handleCategoryChange = (event) => setCategory(event.target.value);

  const typeMenu = (types) => (
    <Menu>
      {
        types.map((availableType) => (
          <Menu.Item key={availableType} onClick={() => setType(availableType)}>
            <a>{availableType}</a>
          </Menu.Item>
        ))
      }
    </Menu>
  );

  return (
    <div id="survey-modal-options">
      <Row style={{ padding: 4 }}>
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
      <Row style={{ padding: 4 }}>
        <Col span={4}>
          Survey Type:
        </Col>
        <Col>
          <Dropdown overlay={typeMenu(availableSurveyTypes)}>
            <Button>{type || '-'}</Button>
          </Dropdown>
        </Col>
      </Row>
    </div>
  );
};

SurveyModalOptions.propTypes = {
  surveyCategoryStateHook: PropTypes.array.isRequired,
  surveyTypeStateHook: PropTypes.array.isRequired,
  availableSurveyCategories: PropTypes.array.isRequired,
  availableSurveyTypes: PropTypes.array.isRequired,
};

export default SurveyModalOptions;
