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
  } 