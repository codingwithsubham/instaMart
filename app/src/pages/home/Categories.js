import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/category/categoryEffects';
import { getImagebyid } from '../../utils/imagebuilder';

const Categories = () => {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="cat-holder">
      {categories?.map((itm, idx) => (
        <div className="cat-itm-home" key={idx}>
          <img
            src={getImagebyid(itm?.images[0])}
            alt={'instaMart-' + itm?.catName}
          />
          <h5>{itm?.catName}</h5>
        </div>
      ))}
    </div>
  );
};

export default Categories;
