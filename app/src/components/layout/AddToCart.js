import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToBag,
  removeFromBag,
} from '../../store/cart/cartEffects';

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const [filterData, setFilterData] = useState(
    cart?.products?.filter((x) => x._id == product?._id)
  );

  useEffect(() => {
    setFilterData(cart?.products?.filter((x) => x._id == product?._id));
  }, [cart]);

  return (
    <div className="col s5 m5 l5 add-to-cart-wrap">
      {filterData?.length ? (
        <div className="cart-controler">
          <button
            className="btn add-to-cart"
            onClick={() => dispatch(removeFromBag({ product }))}
          >
            <i className="material-icons notranslate">remove</i>
          </button>
          <div className="counter">{filterData?.length}</div>
          <button
            className="btn add-to-cart"
            onClick={() => dispatch(addToBag({ product }))}
          >
            <i className="material-icons notranslate">add</i>
          </button>
        </div>
      ) : (
        <button
          className="btn add-to-cart"
          onClick={() => dispatch(addToBag({ product }))}
        >
          <i className="material-icons notranslate">add</i>
        </button>
      )}
    </div>
  );
};

export default AddToCart;
