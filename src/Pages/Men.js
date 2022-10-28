import React from 'react';
import PropTypes from 'prop-types';
import CategoryName from '../app/components/CategoryName';
import ClothList from '../app/components/ClothList';

const Men = ({ cloth }) => (
  <main className="main">
    <CategoryName />
    <div className="clothList">
      <ClothList cloth={cloth} />
    </div>
  </main>
);

Men.propTypes = {
  cloth: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default Men;
