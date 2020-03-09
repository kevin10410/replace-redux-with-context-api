import React, { useContext } from 'react';
import { ProductsContext } from '../context/ContextProducts';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';

const Favorites = props => {
  const { products } = useContext(ProductsContext);
  const favoriteProducts = products
    .filter(p => p.isFavorite);

  return (
    favoriteProducts.length <= 0
      ? <p className="placeholder">Got no favorites yet!</p>
      : <ul className="products-list">
          {favoriteProducts.map(prod => (
            <FavoriteItem
              key={prod.id}
              id={prod.id}
              title={prod.title}
              description={prod.description}
            />
          ))}
        </ul>
  );
};

export default Favorites;
