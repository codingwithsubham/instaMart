import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/category/categoryEffects';
import { getImagebyid } from '../../utils/imagebuilder';
import { Link } from 'react-router-dom';

const Categories = () => {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="cat-holder">
      {categories?.map((itm, idx) => (
        <Link
          to={'/home/shop-by-category'}
          state={{ category: itm }}
          className="cat-itm-home"
          key={idx}
        >
          <img
            src={getImagebyid(itm?.images[0])}
            alt={'instaMart-' + itm?.catName}
          />
          <h5>{itm?.catName}</h5>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
