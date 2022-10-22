import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Counter from './Counter';
import Input from './Input';
import ProductDescriptions from './ProductDescriptions';
import ProductImage from './ProductImage';
import styles from '../../css/cartStore.module.css';

const CartStore = ({ cloth }) => {
  const productSize = cloth.map(({
    sizes, id, brand, amount,
  }) => (
    <div key={id} className={styles.descriptions}>
      <div className={styles.productData}>
        <ProductDescriptions key={id} brand={brand} amount={amount} />
        <p className={styles.sizeTitle}>Size:</p>
        <div className={styles.productSize}>
          {
            sizes.map((size) => (
              <>
                <span key={Math.random()}>
                  {size}
                </span>
              </>
            ))
          }
        </div>
      </div>
    </div>
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.cartTitle}>
        <span className={styles.heading}>My Bag</span>
        ,3 items
      </div>
      { productSize }
      <div>
        <h3>color:</h3>
        <span>
          <Input type="color" value="red" />
        </span>
        <span>
          <Input type="color" value="red" />
        </span>
        <span>
          <Input type="color" value="red" />
        </span>
      </div>
      <div className={styles.imageCounter}>
        <Counter />
        <ProductImage />
      </div>
      <div>
        <span>Total</span>
        <span>$200</span>
      </div>
      <div>
        <Button>
          VIEW BAG
        </Button>
        <Button>
          CHECK OUT
        </Button>
      </div>
    </div>
  );
};

CartStore.propTypes = {
  cloth: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};
export default CartStore;
