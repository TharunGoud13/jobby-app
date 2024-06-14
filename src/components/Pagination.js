import React from "react";
import "../App.css";

const Pagination = ({ data, handlePagination }) => {
  const paginationCount = [];

  for (let i = 1; i < (data.length + 1) / 10; i++) {
    paginationCount.push(Math.ceil(i));
  }
  return (
    <div className="pagination-wrapper">
      {paginationCount.map((item, index) => (
        <div key={index}>
          <p className="pagination-item" onClick={() => handlePagination(item)}>
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
