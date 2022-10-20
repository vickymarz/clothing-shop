import React from 'react';
import PropTypes from 'prop-types';
import cart from '../../assets/images/cart.png';
import CartStore from './CartStore';

const styles = {
  position: 'relative',
};

const Cart = ({ cloth }) => (
  <div style={styles}>
    <img src={cart} alt="cart" />
    <CartStore cloth={cloth} />
  </div>
);

Cart.propTypes = {
  cloth: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default Cart;
