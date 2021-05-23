import React, { useState } from 'react';

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
    <div className="container">
      <form action="submit">
        <label htmlFor="search">Enter the keyword: </label>
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
