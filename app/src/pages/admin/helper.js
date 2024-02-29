import { translate } from '../../language/lang';

export const addCatData = {
  btnText: translate('Next'),
  inputs: [
    {
      name: 'catName',
      label: translate('Category Name'),
      icon: 'art_track',
      type: 'text',
      value: '',
    },
    {
      name: 'catDesc',
      label: translate('Category Description'),
      icon: 'art_track',
      type: 'text',
      value: '',
    },
  ],
};

export const addSubCatData = {
  btnText: translate('Next'),
  inputs: [
    {
      name: 'subCatName',
      label: translate('Sub Category Name'),
      icon: 'art_track',
      type: 'text',
      value: '',
    },
    {
      name: 'subCatDesc',
      label: translate('Sub Category Description'),
      icon: 'art_track',
      type: 'text',
      value: '',
    },
  ],
};

export const addProductData = {
  btnText: translate('Next'),
  inputs: [
    {
      name: 'prodName',
      label: translate('Product Name'),
      icon: 'art_track',
      type: 'text',
      value: '',
    },
    {
      name: 'qty',
      label: translate('Product Quantity'),
      icon: 'art_track',
      type: 'text',
      value: '',
    },
    {
      name: 'mrp',
      label: translate('MRP Price'),
      icon: 'art_track',
      type: 'number',
      value: '',
    },
    {
      name: 'sellPrice',
      label: translate('Offer Price'),
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
    placeholder: translate('Category Name'),
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
    placeholder: translate('Sub Category Name'),
    icon: 'art_track',
    type: 'select',
    options: options,
  };
};
