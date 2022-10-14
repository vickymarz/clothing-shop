import React from 'react';
import PropTypes from 'prop-types';

const ProductImage = ({ brand, product, className }) => (
  <div>
    <img src={product} alt={brand} className={className} />
  </div>
);

ProductImage.propTypes = {
  brand: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ProductImage.defaultProps = {
  className: '',
};

export default ProductImage;
