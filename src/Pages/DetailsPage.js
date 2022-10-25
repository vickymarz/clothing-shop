import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
import styles from '../css/details.module.css';
import ProductImage from '../app/components/ProductImage';

const DetailsPage = ({ cloth }) => {
  const { id } = useParams();
  const { state } = useLocation();

  let shirts = cloth.find((clothId) => parseInt(clothId.id, 10) === parseInt(id, 10));
  localStorage.setItem('products', JSON.stringify(state));
  shirts = JSON.parse(localStorage.getItem('products'));

  return (
    <div className="main">
      <div className={styles.shirts}>
        <ProductImage className={styles.image} product={shirts.product} brand={shirts.brand} />
        <ProductImage className={styles.image} product={shirts.product} brand={shirts.brand} />
        <ProductImage className={styles.image} product={shirts.product} brand={shirts.brand} />
      </div>
      DetailsPage
    </div>
  );
};

DetailsPage.propTypes = {
  cloth: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default DetailsPage;
