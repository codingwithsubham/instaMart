import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyBag } from '../../store/cart/cartEffects';

const MyBag = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { cart, cartLoading } = useSelector((state) => state.cart);
  useEffect(() => {
    isAuthenticated && dispatch(getMyBag());
  }, [isAuthenticated, dispatch]);
  return (
    !cartLoading && (
      <div className="my-bag">
        <div className="count">{cart?.products?.length}</div>
        <div className="icon">
          <i className="material-icons">shopping_basket</i>
        </div>
      </div>
    )
  );
};

export default MyBag;
