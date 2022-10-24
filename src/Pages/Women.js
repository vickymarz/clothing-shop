import React from 'react';
import PropTypes from 'prop-types';
import CategoryName from '../app/components/CategoryName';
import ProductDescriptions from '../app/components/ProductDescriptions';
import ProductImage from '../app/components/ProductImage';

const Women = ({ cloth }) => {
  const clothList = cloth.map(({
    id, brand, amount, product,
  }) => (
    <div key={id} className="cloths">
      <ProductImage product={product} className="productImg" />
      <ProductDescriptions brand={brand} amount={amount} />
    </div>
  ));

  return (
    <main className="main">
      <CategoryName />
      <div className="clothList">{clothList}</div>
    </main>
  );
};

Women.propTypes = {
  cloth: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default Women;
