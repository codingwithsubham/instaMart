import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubCategoriesReturn } from '../../store/category/categoryEffects';
import { getImagebyid } from '../../utils/imagebuilder';

const Subcategory = ({ category, count }) => {
  const clrs = ['bg-grn', 'bg-wt', 'bg-rd', 'bg-wt', 'bg-orng', 'bg-wt', 'bg-bl'];
  const [subCat, setSubCat] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubCategoriesReturn(category?._id)).then((d) => setSubCat(d));
  }, []);

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
