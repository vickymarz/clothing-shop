import React from 'react';
import PropTypes from 'prop-types';
import CategoryName from '../app/components/CategoryName';
import ClothList from '../app/components/ClothList';

const Kids = ({ cloth }) => (
  <main className="main">
    <CategoryName />
    <div className="clothList">
      <ClothList cloth={cloth} />
    </div>
  </main>
);

Kids.propTypes = {
  cloth: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default Kids;
