import propTypes from "prop-types";

const Pagination = ({ totalPage, handleClick, currentPage }) => {
  const pageNumbers = Array.from(
    { length: totalPage },
    (_, index) => index + 1
  );
  const next = () => {
    if (currentPage === totalPage) return;

    handleClick(currentPage + 1);
  };

  const prev = () => {
    if (currentPage === 1) return;

    handleClick(currentPage - 1);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={currentPage == 1}
      >
        <i class="fal fa-arrow-left h-4 w-4"></i>
      </button>
      <div className="flex items-center gap-2">
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handleClick(page)}
            variant={currentPage == page ? "filled" : "text"}
            className={currentPage == page ? "gray" : ""}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={currentPage == totalPage}
      >
        <i class="fal fa-arrow-right h-4 w-4"></i>
      </button>
    </div>
  );
};

Pagination.propTypes = {
  totalPage: propTypes.any,
  handleClick: propTypes.any,
  currentPage: propTypes.any,
};

export default Pagination;
