import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategory } from '../../store/products/productEffects';
import Products from '../products/Products';
import SubCategoryToggle from '../sub-category/SubCategoryToggle';

const ShopByCategory = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { products, productLoading } = useSelector((state) => state.product);
  const [filteredProduct, setFilteredProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProductsByCategory(state?.category?._id));
  }, [dispatch]);

  const handleSubCatSelect = (id) => {
    let prods = [...products];
    setFilteredProduct(prods?.filter((x) => x?.subCategory?._id === id));
  };

  return (
    <div className="shp-by-cat insta-an">
      <div className={`category-bg ${state?.category?.catName}`} />
      <h1>{state?.category?.catName}</h1>
      <SubCategoryToggle
        subcategories={state?.category?.subcategories}
        callback={handleSubCatSelect}
      />
      <Products
        products={filteredProduct ? filteredProduct : products}
        loading={productLoading}
      />
    </div>
  );
};

export default ShopByCategory;
