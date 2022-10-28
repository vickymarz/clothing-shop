import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../app/components/Counter';
import Input from '../app/components/Input';
import ProductDescriptions from '../app/components/ProductDescriptions';
import ProductImage from '../app/components/ProductImage';
import styles from '../css/cartStore.module.css';
import style from '../css/cartPage.module.css';
import Button from '../app/components/Button';

const CartPage = ({ cloth }) => {
  const productSize = cloth.map(({
    sizes, id, brand, amount, colors, product,
  }) => (
    <div key={id} className={styles.cart}>
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
                  <Input type="color" value={color} className={styles.input} disabled />
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
    <div className="main">
      { productSize }
      <div className={style.audit}>
        <p>
          Tax 21%
          <span>$42.00</span>
        </p>
        <p>
          Quantity
          <span>3</span>
        </p>
        <p>
          Total
          <span>$200</span>
        </p>
        <div className={styles.buttonWrapper}>
          <Button className={`${styles.checkout} ${styles.button}`}>
            ORDER
          </Button>
        </div>
      </div>
    </div>
  );
};

CartPage.propTypes = {
  cloth: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};
export default CartPage;
