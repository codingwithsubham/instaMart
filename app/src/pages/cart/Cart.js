import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Products from '../products/Products';
import { uniq } from '../../common/functions';

const Cart = () => {
  const { cart, cartLoading } = useSelector((state) => state.cart);
  const [itms, setItms] = useState(null);

  useEffect(() => {
    if (cart) {
      let unique = [... uniq(cart?.products)];
      setItms(unique);
    }
  }, [cart]);

  return (
    <div className="my-cart">
      <h1 style={{marginBottom: '10px'}}>My Bag</h1>
      <Products products={itms} loading={cartLoading}/>
      <br/>
      <button className='waves-effect waves-light btn fw'>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
