import React from 'react';
import PropTypes from 'prop-types';

const ProductDescriptions = ({ brand, amount }) => (
  <>
    <p>{brand}</p>
    <span>{amount}</span>
  </>
);

ProductDescriptions.propTypes = {
  brand: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export default ProductDescriptions;
