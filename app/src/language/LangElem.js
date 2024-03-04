import React from 'react';

const LangElem = ({ className }) => {
  return (
    <div className={`lang-wrap ${className}`}>
      <div id="google_translate_element"></div>
    </div>
  );
};

export default LangElem;
