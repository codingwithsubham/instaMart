import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyBag } from '../../store/cart/cartEffects';
import { Link, useLocation } from 'react-router-dom';

const MyBag = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { isAuthenticated } = useSelector((state) => state.auth);
  const { cart, cartLoading } = useSelector((state) => state.cart);

  useEffect(() => {
    isAuthenticated && dispatch(getMyBag());
  }, [isAuthenticated, dispatch]);

  return (
    isAuthenticated &&
    !cartLoading &&
    pathname !==
      '/cart' && (
        <Link to="/cart" className="my-bag">
          <div className="count">{cart?.products?.length}</div>
          <div className="icon">
            <i className="material-icons">shopping_basket</i>
          </div>
        </Link>
      )
  );
};

export default MyBag;
