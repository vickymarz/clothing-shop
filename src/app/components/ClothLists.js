import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductDescriptions from './ProductDescriptions';
import cart from '../../assets/images/motor.png';
import ProductImage from './ProductImage';
import Button from './Button';

const ClothLists = ({ cloth }) => {
  const clothList = cloth.map(({
    id, brand, amount, product,
  }) => (
    <Link to={`/details/${id}`} key={id} className="cloths">
      <ProductImage product={product} className="productImg" />
      <ProductDescriptions brand={brand} amount={amount} />
      <Button type="button" className="hoverButton">
        <img src={cart} alt="cart" />
      </Button>
    </Link>
  ));

  return (
    <>{clothList}</>
  );
};

ClothLists.propTypes = {
  cloth: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default ClothLists;
