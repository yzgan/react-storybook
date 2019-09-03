import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Icon,
  Card
} from 'antd';

const NoSurveyRecord = ({ title }) => (
  <Card title={title}>
    <Row style={{ padding: 50 }}>
      <Col span={24} align="middle">
        <Icon type="info-circle" style={{ fontSize: 200, color: '#CD5C5C', marginBottom: 40 }} />
        <p>
            No Survey Record found for Overall Customer Satisfactory Survey.
        </p>
      </Col>
    </Row>
  </Card>
);

NoSurveyRecord.defaultProps = {
  title: 'please input title'
};

NoSurveyRecord.propTypes = {
  title: PropTypes.string
};

export default NoSurveyRecord;
