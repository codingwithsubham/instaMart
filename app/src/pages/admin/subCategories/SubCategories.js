import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubCategories } from '../../../store/category/categoryEffects';
import AddSubCategory from './AddSubCategory';
import { useLocation } from 'react-router-dom';
import SubCategoryItem from './SubCategoryItem';

const SubCategories = () => {
  const [showAdd, setAddShow] = useState(false);
  const { subCategories, categoryLoading } = useSelector(
    (state) => state.category
  );
  const { state } = useLocation();
  const dispatch = useDispatch();

  const handleCatAdd = () => {
    setAddShow(false);
  };

  useEffect(() => {
    dispatch(getSubCategories(state?.category?._id));
  }, [dispatch]);

  return (
    <div className="cat-wrap insta-an">
      <div className="cat-head row">
        <div className="col s8 m8 l8">
          <h1 className="title">{state?.category?.catName}</h1>
        </div>
        <div className="col s4 m4 l4">
          <h1
            className={`${!showAdd ? 'grn' : 'rd'} right`}
            onClick={() => setAddShow(!showAdd)}
          >
            {!showAdd ? (
              <>
                New <i className="material-icons">add</i>
              </>
            ) : (
              <>
                Close <i className="material-icons">close</i>
              </>
            )}
          </h1>
        </div>
      </div>
      {state?.category && !categoryLoading && (
        <div className="cat-body">
          {showAdd ? (
            <AddSubCategory
              callback={handleCatAdd}
              category={state?.category?._id}
            />
          ) : (
            <div className="cat-itm-lst">
              {subCategories?.map((itm, idx) => (
                <SubCategoryItem itm={itm} idx={idx} key={idx} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SubCategories;
