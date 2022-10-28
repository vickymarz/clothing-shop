import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type, value, className, innerRef, onChange,
}) => (
  <div>
    <input
      type={type}
      value={value}
      className={className}
      ref={innerRef}
      onChange={onChange}
      disabled={true || false}
    />
  </div>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.object]),
  onChange: PropTypes.func,
};

Input.defaultProps = {
  className: '',
  innerRef: null,
  onChange: null,
};

export default Input;
