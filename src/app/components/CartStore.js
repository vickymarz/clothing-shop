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
    <>
      <ProductDescriptions key={id} brand={brand} amount={amount} />
      {
    sizes.map((size) => (
      <>
        <div key={Math.random()}>
          <span>{size}</span>
        </div>
      </>
    ))
  }
    </>
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.cartTitle}>
        <span className={styles.heading}>My Bag</span>
        ,3 items
      </div>
      <div className={styles.description}>
        <div className={styles.containerTexts}>
          <div className={styles.productData}>
            { productSize }
          </div>
          <div>
            <p>color:</p>
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
        </div>
        <div className={styles.imageCounter}>
          <Counter />
          <ProductImage />
        </div>
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
