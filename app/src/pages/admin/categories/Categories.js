import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../store/category/categoryEffects';
import AddNewCategory from './AddCategory';
import CategoryItem from './CategoryItem';

const Categories = () => {
  const [showAdd, setAddShow] = useState(false);
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const handleCatAdd = () => {
    setAddShow(false);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="cat-wrap insta-an">
      <div className="cat-head row">
        <div className="col s6 m6 l6">
          <h1 className='title'>Categories</h1>
        </div>
        <div className="col s6 m6 l6">
          <h1
            className={`${!showAdd ? 'grn' : 'rd'} right`}
            onClick={() => setAddShow(!showAdd)}
          >
            {!showAdd ? (
              <>
                Add New <i className="material-icons notranslate">add</i>
              </>
            ) : (
              <>
                Close <i className="material-icons notranslate">close</i>
              </>
            )}
          </h1>
        </div>
      </div>
      <div className="cat-body">
        {showAdd ? (
          <AddNewCategory callback={handleCatAdd} />
        ) : (
          <div className="cat-itm-lst">
            {categories?.map((itm, idx) => (
              <CategoryItem itm={itm} idx={idx} key={idx}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
