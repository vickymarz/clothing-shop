import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  type, className, children, label, onClick,
}) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={className} aria-label={label} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOfType(['button', 'submit']).isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  label: '',
  onClick: null,
};

export default Button;
