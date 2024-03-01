import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategory } from '../../store/products/productEffects';
import Products from '../products/Products';

const ShopByCategory = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { products, productLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductsByCategory(state?.category?._id));
  }, [dispatch]);

  return (
    <div className="shp-by-cat insta-an">
      <h1>{state?.category?.catName}</h1>
      <Products products={products} loading={productLoading} />
    </div>
  );
};

export default ShopByCategory;
