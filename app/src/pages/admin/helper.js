export const addCatData = {
  btnText: 'Next',
  inputs: [
    {
      name: 'catName',
      label: 'Category Name',
      icon: 'art_track',
      type: 'text',
      value: '',
    },
    {
      name: 'catDesc',
      label: 'Category Description',
      icon: 'art_track',
      type: 'text',
      value: '',
    },
  ],
};

export const addSubCatData = {
  btnText: 'Next',
  inputs: [
    {
      name: 'subCatName',
      label: 'Sub Category Name',
      icon: 'art_track',
      type: 'text',
      value: '',
    },
    {
      name: 'subCatDesc',
      label: 'Sub Category Description',
      icon: 'art_track',
      type: 'text',
      value: '',
    },
  ],
};

export const addProductData = {
  btnText: 'Next',
  inputs: [
    {
      name: 'prodName',
      label: 'Product Name',
      icon: 'art_track',
      type: 'text',
      value: '',
    },
    {
      name: 'qty',
      label: 'Product Quantity',
      icon: 'art_track',
      type: 'text',
      value: '',
    },
    {
      name: 'mrp',
      label: 'MRP Price',
      icon: 'art_track',
      type: 'number',
      value: '',
    },
    {
      name: 'sellPrice',
      label: 'Offer Price',
      icon: 'art_track',
      type: 'number',
      value: '',
    },
  ],
};

export const getCategory = (category) => {
  let options = [];
  category?.map((itm) => options.push({ value: itm?._id, label: itm?.catName }));
  return {
    name: 'category',
    placeholder: 'Category Name',
    icon: 'art_track',
    type: 'select',
    options: options,
  };
};

export const getSubCategory = (sub) => {
  let options = [];
  sub?.map((itm) => options.push({ value: itm?._id, label: itm?.subCatName }));
  return {
    name: 'category',
    placeholder: 'Sub Category Name',
    icon: 'art_track',
    type: 'select',
    options: options,
  };
};
