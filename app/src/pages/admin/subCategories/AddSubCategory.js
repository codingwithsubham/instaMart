import React, { useState } from 'react';
import FileUploader from '../../../components/common/FileUploader';
import Form from '../../../components/common/Form';
import { addSubCatData } from '../helper';
import { addNewSubCategory } from '../../../store/category/categoryEffects';
import { useDispatch } from 'react-redux';

const AddSubCategory = ({ callback, category }) => {
  const dispatch = useDispatch();
  const [formData, setFoemData] = useState(null);

  console.log(category);

  const handleFormData = (d) => {
    setFoemData(d);
  };

  const handleImagesUrls = (urls) => {
    dispatch(addNewSubCategory({ formData, images: urls, category }));
    callback(true);
  };

  return (
    <div className="add-cat-wrap insta-an">
      {!formData ? (
        <Form data={addSubCatData} callBack={handleFormData} />
      ) : (
        <FileUploader callBack={handleImagesUrls} />
      )}
    </div>
  )
};

export default AddSubCategory;