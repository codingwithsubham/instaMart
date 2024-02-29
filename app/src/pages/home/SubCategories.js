import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { getImagebyid } from '../../utils/imagebuilder';

const Subcategory = ({ category, count }) => {
  const clrs = [
    'bg-grn',
    'bg-wt',
    'bg-rd',
    'bg-wt',
    'bg-orng',
    'bg-wt',
    'bg-bl',
  ];
  const [subCat] = useState(category?.subcategories);

  return (
    <div className={`bg ${clrs[count]}`}>
      <h1>{category?.catName}</h1>
      <div className="cat-holder">
        {subCat?.map((itm, idx) => (
          <div className="cat-itm-home" key={idx}>
            <img
              src={getImagebyid(itm?.images[0])}
              alt={'instaMart-' + itm?.subCatName}
            />
            <h5>{itm?.subCatName}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

const SubCategories = () => {
  const { categories } = useSelector((state) => state.category);

  return (
    <Fragment>
      {categories?.map((itm, idx) => (
        <Subcategory category={itm} key={idx} count={idx} />
      ))}
    </Fragment>
  );
};

export default SubCategories;
