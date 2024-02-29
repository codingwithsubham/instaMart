import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../store/products/productEffects';
import AddProduct from './AddProduct';
import ProductItem from './ProductItem';

const Products = () => {
  const [showAdd, setAddShow] = useState(false);
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleProdAdd = () => {
    setAddShow(false);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="cat-wrap insta-an">
      <div className="cat-head row">
        <div className="col s6 m6 l6">
          <h1 className='title'>Products</h1>
        </div>
        <div className="col s6 m6 l6">
          <h1
            className={`${!showAdd ? 'grn' : 'rd'} right`}
            onClick={() => setAddShow(!showAdd)}
          >
            {!showAdd ? (
              <>
                Add New <i className="material-icons">add</i>
              </>
            ) : (
              <>
                Close <i className="material-icons">close</i>
              </>
            )}
          </h1>
        </div>
      </div>
      <div className="cat-body">
        {showAdd ? (
          <AddProduct callback={handleProdAdd} />
        ) : (
          <div className="cat-itm-lst">
            {products?.map((itm, idx) => (
              <ProductItem itm={itm} idx={idx} key={idx}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
