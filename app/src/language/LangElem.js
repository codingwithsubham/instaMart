import React, { useState } from 'react';
import { langs, setDeviceLang } from './lang';

const LangElem = ({ className }) => {
  const defltLang = localStorage.getItem('lang');
  const [lang, setLang] = useState(defltLang ? defltLang : '');
  const handleChange = (e) => {
    setLang(e.target.value);
    setDeviceLang(e.target.value);
    window.location.reload();
  };
  return (
    <div className={`lang-wrap ${className}`}>
      <div className="input-field select-box">
        <select
          onChange={(e) => handleChange(e)}
          name={'lang'}
          value={lang}
        >
          {Object.keys(langs)?.map((itm, idx) => (
            <option value={itm} key={idx}>
              {langs[itm]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LangElem;
