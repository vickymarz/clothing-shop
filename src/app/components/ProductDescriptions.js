import React from 'react';
import PropTypes from 'prop-types';

const ProductDescriptions = ({ brand, amount }) => (
  <div>
    <p>{brand}</p>
    <p>{amount}</p>
  </div>
);

ProductDescriptions.propTypes = {
  brand: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export default ProductDescriptions;
