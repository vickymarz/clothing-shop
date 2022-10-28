import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductDescriptions from './ProductDescriptions';
import cart from '../../assets/images/motor.png';
import ProductImage from './ProductImage';
import Button from './Button';

const ClothList = ({ cloth }) => {
  const clothLists = cloth.map(({
    id, brand, amount, product, sizes, colors,
  }) => (
    <div key={id}>
      <Link
        to={`/details/${id}`}
        state={{
          id, brand, amount, product, sizes, colors,
        }}
        className="cloths"
      >
        <ProductImage product={product} brand={brand} className="productImg" />
        <ProductDescriptions brand={brand} amount={amount} />
        <Button type="button" className="hoverButton">
          <img src={cart} alt="cart" />
        </Button>
      </Link>
    </div>
  ));
  return (
    <>{clothLists}</>
  );
};

ClothList.propTypes = {
  cloth: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default ClothList;
