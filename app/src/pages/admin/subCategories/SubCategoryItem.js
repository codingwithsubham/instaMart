import React from 'react';
import { getImagebyid } from '../../../utils/imagebuilder';
import { Link } from 'react-router-dom';

const SubCategoryItem = ({ itm, idx }) => {
  return (
    <div className="cat-itm row" key={idx}>
      <div className="col s4 m4 l4">
        <img
          src={getImagebyid(itm?.images[0])}
          alt={'insta-mart-' + itm?.subCatName}
        />
      </div>
      <div className="col s7 m7 l7">
        <h1>{itm?.subCatName}</h1>
        <p>{itm?.subCatDesc}</p>
        <div className="actions">
            <Link className='grn'><i className='material-icons'>edit</i> Edit</Link>
            <Link className='rd'><i className='material-icons'>delete</i> Delete</Link>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryItem;
