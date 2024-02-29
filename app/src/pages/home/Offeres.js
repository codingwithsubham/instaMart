import React from 'react';

const Offeres = () => {
  return (
    <div className="offers-holder">
      <div className="offers-itm grn">
        <div className="content">
          <div className="heading">Up to 30% off!</div>
          <div className="desc">Enjoy our big offers everyday</div>
          <div className="offr-action">
            Shop now <i className="material-icons">keyboard_arrow_right</i>
          </div>
        </div>
        <div className="img">
          <img
            src={require('../../static/offers/1.png')}
            alt="instaMart exciting offers"
          />
        </div>
      </div>
      <div className="offers-itm rd">
        <div className="content">
          <div className="heading">Up to 30% off!</div>
          <div className="desc">Enjoy our big offers everyday</div>
          <div className="offr-action">
            Shop now <i className="material-icons">keyboard_arrow_right</i>
          </div>
        </div>
        <div className="img">
          <img
            src={require('../../static/offers/1.png')}
            alt="instaMart exciting offers"
          />
        </div>
      </div>
      <div className="offers-itm orng">
        <div className="content">
          <div className="heading">Up to 30% off!</div>
          <div className="desc">Enjoy our big offers everyday</div>
          <div className="offr-action">
            Shop now <i className="material-icons">keyboard_arrow_right</i>
          </div>
        </div>
        <div className="img">
          <img
            src={require('../../static/offers/1.png')}
            alt="instaMart exciting offers"
          />
        </div>
      </div>
    </div>
  );
};

export default Offeres;
