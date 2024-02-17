import React from "react";
import ResponsivePagination from "react-responsive-pagination";

export const Pagination = (props) => {
  const { currentPage, setCurrentPage, totalPages } = props;

  return (
    <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
    />
  );
};
