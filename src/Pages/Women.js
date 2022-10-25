import React from 'react';
import PropTypes from 'prop-types';

import CategoryName from '../app/components/CategoryName';
import ClothLists from '../app/components/ClothLists';

const Women = ({ cloth }) => (
  <main className="main">
    <CategoryName />
    <div className="clothList">
      <ClothLists cloth={cloth} />
    </div>
  </main>
);

Women.propTypes = {
  cloth: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default Women;
