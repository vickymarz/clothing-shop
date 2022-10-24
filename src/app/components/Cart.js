import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cart from '../../assets/images/cart.png';
import CartStore from './CartStore';
import styles from '../../css/cart.module.css';

const Cart = ({ cloth }) => {
  const style = {
    position: 'relative',
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartPopup = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div style={style}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isCartOpen}
        className={styles.button}
        onClick={handleCartPopup}
      >
        <img
          src={cart}
          alt="cart"
        />
      </button>
      <div className={isCartOpen ? styles.open : styles.close}>
        <CartStore cloth={cloth} />
      </div>
    </div>
  );
};

Cart.propTypes = {
  cloth: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default Cart;
