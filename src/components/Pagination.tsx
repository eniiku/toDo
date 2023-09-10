import { useState } from 'react';

interface Props {
  data: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }[];
}

const Pagination = (props: Props) => {
  const { data } = props;

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate which page numbers to display
  let pageNumbers = [];

  if (currentPage <= 4) {
    pageNumbers = [1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages];
  } else if (currentPage >= totalPages - 3) {
    pageNumbers = [
      1,
      '...',
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  } else {
    pageNumbers = [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = data.slice(startIndex, endIndex);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='hidden md:flex items-center justify-between work-sans-sm pt-5 border-t border-t-gray-200'>
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className='font-semibold text-gray-600 flex items-center gap-2'
      >
        <img src='/arrow-left.svg' alt='' />

        <span>Previous</span>
      </button>

      <div className='flex-grow justify-center flex items-center gap-[0.12rem]'>
        {pageNumbers.map((pageNumber, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(pageNumber as number)}
            className={`${
              pageNumber === currentPage
                ? 'text-gray-800 rounded-full bg-gray-50'
                : 'text-gray-600'
            } font-medium w-10 h-10 hover:bg-gray-50`}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className='font-semibold text-gray-600 flex items-center gap-2'
      >
        <span>Next</span>

        <img src='/arrow-right.svg' alt='' />
      </button>
    </div>
  );
};

export default Pagination;
