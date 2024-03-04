import React from 'react';
import Loader from '../../components/layout/Loader';
import { getImagebyid } from '../../utils/imagebuilder';

const ProductItem = ({ itm }) => {
  return (
    <div className="cat-itm row">
      <div className="col s3 m3 l3 img-center">
        <img
          className="shop-prdct"
          src={getImagebyid(itm?.images[0])}
          alt={'insta-mart-' + itm?.catName}
        />
        <div className="img-lbl">{itm?.qty}</div>
      </div>
      <div className="shp-prdct col s8 m8 l8">
        <h1>{itm?.prodName}</h1>
        <div className="row prdct-btm">
          <div className="col s7 m7 l7">
            {itm?.sellPrice && <p className="offer-price">₹{itm?.sellPrice}</p>}
            <p className="nrml-price">
              <b>₹{itm?.mrp}</b>
              &nbsp;
              {parseInt(
                ((parseInt(itm?.mrp) - parseInt(itm?.sellPrice)) * 100) /
                  parseInt(itm?.mrp)
              )}
              % OFF
            </p>
          </div>
          <div className="col s5 m5 l5 add-to-cart-wrap">
            <button className="btn add-to-cart notranslate">
              <i className="material-icons notranslate">add</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = ({ products, loading }) => {
  return loading ? (
    <Loader />
  ) : (
    <div className="prdcts-wrap">
      {products?.map((itm, idx) => (
        <ProductItem itm={itm} key={idx} />
      ))}
    </div>
  );
};

export default Products;
