import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const maxPageNumbers = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
  let endPage = startPage + maxPageNumbers - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxPageNumbers + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex items-center space-x-3 justify-center">
      {/* Previous Page Button */}
      <li
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        className="w-9 h-9 flex items-center justify-center cursor-pointer rounded border border-gray-300 hover:border-red-400 transition-all duration-200 group">
        <span className="text-white group-hover:text-red-600 transition-colors">
          &lt;
        </span>
      </li>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <li
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-9 h-9 flex items-center justify-center rounded cursor-pointer transition-all duration-200 ${
            currentPage === page
              ? "bg-gradient-to-b from-red-600 to-red-700 text-white shadow-md shadow-red-400 border border-red-700 transform scale-105"
              : "border border-gray-300 bg-white text-gray-700 hover:bg-red-50 hover:border-red-500 hover:text-red-600"
          }`}>
          {page}
        </li>
      ))}

      {/* Next Page Button */}
      <li
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        className="w-9 h-9 flex items-center justify-center cursor-pointer rounded border border-gray-300 hover:border-red-400 transition-all duration-200 group">
        <span className="text-white group-hover:text-red-600 transition-colors">
          &gt;
        </span>
      </li>
    </ul>
  );
};

export default Pagination;
