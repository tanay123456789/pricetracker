import React, { useState } from 'react';
import styles from '../css/inputcomp.module.css';

const InputComp = ({ getValue }) => {
  const [keyword, setKeyword] = useState({ key: '' });

  const handleSearch = (e) => {
    setKeyword({ key: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(keyword.key);
    getValue(keyword.key);
    setKeyword({ key: '' });
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.head}>What are you looking for?</h3>
      <form action="submit" className={styles.frm}>
        <input
          type="text"
          name="search"
          value={keyword.key}
          onChange={handleSearch}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputComp;
