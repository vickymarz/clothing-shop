import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
import styles from '../css/details.module.css';
import ProductImage from '../app/components/ProductImage';
import Input from '../app/components/Input';
import Button from '../app/components/Button';

const DetailsPage = ({ cloth }) => {
  const { id } = useParams();
  const { state } = useLocation();

  let shirts = cloth.find((clothId) => parseInt(clothId.id, 10) === parseInt(id, 10));
  localStorage.setItem('products', JSON.stringify(state));
  shirts = JSON.parse(localStorage.getItem('products'));

  return (
    <div className="main">
      <div className={styles.detailsContainer}>
        <div className={styles.shirts}>
          <ProductImage className={styles.image} product={shirts.product} brand={shirts.brand} />
          <ProductImage className={styles.image} product={shirts.product} brand={shirts.brand} />
          <ProductImage className={styles.image} product={shirts.product} brand={shirts.brand} />
        </div>
        <div className={styles.descriptions}>
          <ProductImage
            className={styles.imageDescription}
            product={shirts.product}
            brand={shirts.brand}
          />
          <div className={styles.productData}>
            <p className={styles.name}>{shirts.brand}</p>
            <p className={styles.headings}>SIZE:</p>
            <div className={styles.productSize}>
              {
                shirts.sizes.map((size) => (
                  <span key={Math.random()} className={styles.headings}>
                    {size}
                  </span>
                ))
              }
            </div>
            <p className={styles.headings}>COLOR:</p>
            <div className={styles.productColor}>
              {
                shirts.colors.map((color) => (
                  <>
                    <span key={Math.random()}>
                      <Input type="color" value={color} className={styles.input} disabled />
                    </span>
                  </>
                ))
              }
            </div>
            <p className={styles.headings}>PRICE:</p>
            <p className={styles.amount}>{shirts.amount}</p>
            <div className={styles.buttonWrapper}>
              <Button className={`${styles.checkout} ${styles.button}`}>
                ADD TO CART
              </Button>
            </div>
            <p className={styles.text}>
              Find stunning women&apos;s cocktail dresses and party dresses. Stand out in lace
              and metallic cocktail dresses and party
              dresses from all your favorite brands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

DetailsPage.propTypes = {
  cloth: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default DetailsPage;
