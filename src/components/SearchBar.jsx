import React, { useState } from "react";

function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
       <button type="submit" className="search-button">
        Search
      </button>
      <style>
        {`
          .search-bar {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 20px;
            
          }
          
          .search-input {
            padding: 17px;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-right: 10px;
            width: 300px;
            font-size:1.5rem;
          }
          
          .search-button {
            padding: 8px 12px;
            background-color: #333;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            padding: 17px; 
            font-size:1.5rem;
          }

          .search-button:hover {
            background-color: #ccc;
            color: #333;
          }
          
        `}
      </style>

    </div>
  );
}

export default SearchBar;
