import React, { useState } from 'react';
import { getImagebyid } from '../../utils/imagebuilder';

const SubCategoryToggle = ({ subcategories, callback }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (d) => {
    setSelected(d);
    callback(d);
  };

  return (
    <div className="sub-cat-toggle">
      {subcategories?.map((itm, idx) => (
        <div
          className={`sub-cat-tggl-itm${selected === itm?._id ? ' selected' : ''}`}
          key={idx}
          onClick={() => handleClick(itm?._id)}
        >
          <img
            src={getImagebyid(itm?.images[0])}
            alt={'instaMart-' + itm?.subCatName}
          />
          <h5>{itm?.subCatName}</h5>
        </div>
      ))}
    </div>
  );
};

export default SubCategoryToggle;
