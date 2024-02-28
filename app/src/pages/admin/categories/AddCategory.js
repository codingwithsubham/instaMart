import React, { useState } from 'react';
import FileUploader from '../../../components/common/FileUploader';
import Form from '../../../components/common/Form';
import { addCatData } from '../helper';
import { addNewCategory } from '../../../store/category/categoryEffects';
import { useDispatch } from 'react-redux';

const AddNewCategory = ({ callback }) => {
  const dispatch = useDispatch();
  const [formData, setFoemData] = useState(null);

  const handleFormData = (d) => {
    setFoemData(d);
  };

  const handleImagesUrls = (urls) => {
    dispatch(addNewCategory({ formData, images: urls }));
    callback(true);
  };

  return (
    <div className="add-cat-wrap insta-an">
      {!formData ? (
        <Form data={addCatData} callBack={handleFormData} />
      ) : (
        <FileUploader callBack={handleImagesUrls} />
      )}
    </div>
  );
};

export default AddNewCategory;