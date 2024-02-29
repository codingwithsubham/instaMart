import React, { useEffect, useState } from 'react';
import FileUploader from '../../../components/common/FileUploader';
import Form from '../../../components/common/Form';
import { addProductData, getCategory, getSubCategory } from '../helper';
import { getCategories } from '../../../store/category/categoryEffects';
import { useDispatch, useSelector } from 'react-redux';
import SelectForm from '../../../components/common/SelectForm';
import { addNewProduct } from '../../../store/products/productEffects';

const AddProduct = ({ callback }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const [formData, setFormData] = useState(null);
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleFormData = (d) => {
    setFormData(d);
  };

  const handleCategoryData = (d) => {
    setCategory(d);
  };

  const handleSubCategoryData = (d) => {
    setSubCategory(d);
  };

  const handleImagesUrls = (urls) => {
    dispatch(
      addNewProduct({
        formData: formData,
        images: urls,
        category: category?.value,
        subCategory: subCategory?.value,
      })
    );
    callback(true);
  };

  return (
    <div className="add-cat-wrap insta-an">
      {!formData || !category || !subCategory ? (
        <div className="row">
          <div className="col s12 m6 l6">
            <Form data={addProductData} callBack={handleFormData} />
          </div>
          <div className="col s12 m6 l6">
            {categories?.length > 0 && (
              <SelectForm
                itm={getCategory(categories)}
                handleChange={handleCategoryData}
              />
            )}
            {categories?.length > 0 && category && (
              <SelectForm
                itm={getSubCategory(
                  categories?.find((x) => x._id === category?.value)
                    ?.subcategories
                )}
                handleChange={handleSubCategoryData}
              />
            )}
          </div>
        </div>
      ) : (
        <FileUploader callBack={handleImagesUrls} />
      )}
    </div>
  );
};

export default AddProduct;
