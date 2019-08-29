import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

const growthRate = (data) => {
  if (data.length <= 1) {
    return null;
  }

  const [prevData, currentData] = data;
  return currentData - prevData;
};

const growthRatePrefix = (rate) => (rate > 0 ? '+' : '');

const TrendIndicator = ({ data }) => (
  <p>
    {growthRatePrefix(growthRate(data))}
    {growthRate(data)}
    <span> </span>
    {growthRate(data) === 0 && <Icon type="minus" />}
    {growthRate(data) > 0 && <Icon type="up" style={{ color: 'green' }} />}
    {growthRate(data) < 0 && <Icon type="down" style={{ color: 'red' }} />}
  </p>
);

TrendIndicator.propTypes = {
  data: PropTypes.array.isRequired
};

export default TrendIndicator;
