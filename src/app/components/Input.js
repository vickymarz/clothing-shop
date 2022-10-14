import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, value }) => (
  <div>
    <input type={type} value={value} />
  </div>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
