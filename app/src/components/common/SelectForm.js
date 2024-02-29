import React, { useState } from 'react';
import Select from 'react-select';

const SelectForm = ({ itm, handleChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="cstm-select-bx">
      <Select
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e);
          handleChange(e);
        }}
        options={itm?.options}
        placeholder={itm?.placeholder}
      />
    </div>
  );
};

export default SelectForm;
