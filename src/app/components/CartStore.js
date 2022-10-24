import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Counter from './Counter';
import Input from './Input';
import ProductDescriptions from './ProductDescriptions';
import ProductImage from './ProductImage';
import styles from '../../css/cartStore.module.css';

const CartStore = ({ cloth }) => {
  const inputRef = useRef();

  const productSize = cloth.map(({
    sizes, id, brand, amount, colors, product,
  }) => (
    <div key={id} className={styles.descriptions}>
      <div className={styles.productData}>
        <ProductDescriptions key={id} brand={brand} amount={amount} />
        <p className={styles.headings}>Size:</p>
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
        <p className={styles.headings}>color:</p>
        <div className={styles.productColor}>
          {
            colors.map((color) => (
              <>
                <span key={Math.random()}>
                  <Input type="color" value={color} className={styles.input} innerRef={inputRef} disabled />
                </span>
              </>
            ))
          }
        </div>
      </div>
      <div className={styles.imageCounter}>
        <Counter />
        <ProductImage brand={brand} product={product} className={styles.productImg} />
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
      <div className={styles.cost}>
        <span className={styles.total}>Total</span>
        <span className={styles.amount}>$200</span>
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
