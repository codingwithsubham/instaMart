import React from 'react';
import { getImagebyid } from '../../../utils/imagebuilder';
import { Link } from 'react-router-dom';

const CategoryItem = ({ itm, idx }) => {
  return (
    <div className="cat-itm row" key={idx}>
      <div className="col s4 m4 l4">
        <img
          src={getImagebyid(itm?.images[0])}
          alt={'insta-mart-' + itm?.catName}
        />
      </div>
      <div className="col s7 m7 l7">
        <h1>{itm?.catName}</h1>
        <p>{itm?.catDesc}</p>
        <div className="actions">
          <Link className='grn'>
            <i className="material-icons notranslate">edit</i> Edit
          </Link>
          <Link className='rd'>
            <i className="material-icons notranslate">delete</i> Delete
          </Link>
          <Link to={`/sub-categories/${itm?._id}`} state={{ category: itm }} className='bl'>
            View <i className="material-icons notranslate">keyboard_arrow_right</i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
