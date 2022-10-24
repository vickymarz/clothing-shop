import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  type, className, children, label,
}) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={className} aria-label={label}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOfType(['button', 'submit']).isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  label: '',
};

export default Button;
