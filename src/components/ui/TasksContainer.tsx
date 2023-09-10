import { useState, useEffect } from 'react';

import useTodoStore from '../../store';
import TaskCard from '../TaskCard';

interface TodoItem {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const TasksContainer = () => {
  const { todos, fetchTodos } = useTodoStore();
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedItems, setDisplayedItems] = useState<TodoItem[]>([]);

  const totalPages = Math.ceil(todos.length / itemsPerPage);

  useEffect(() => {
    fetchTodos(); // Fetch Todo data when the component mounts
  }, []);

  useEffect(() => {
    // Update displayed items whenever the current page or todos change
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedItems(todos.slice(startIndex, endIndex));
  }, [currentPage, todos]);

  // Calculate which page numbers to display
  let pageNumbers = [];

  /* handles how ellipses are shown based
     on page number */
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
    <div>
      <h3 className='font-gray-900 font-work-sans font-semibold leading-6'>
        My Tasks
      </h3>

      <ul className='mt-4 mb-8'>
        {displayedItems.map((task) => (
          <TaskCard key={task.id} taskInfo={task} />
        ))}
      </ul>

      {/* Pagination */}
      <div className='hidden md:flex items-center justify-between work-sans-sm pt-5 border-t border-t-gray-200'>
        {
          // Navigates to previous page onclick
          // Btn is disabled on the first page
        }

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

        {
          // Navigates to next page onclick
          // Btn is disabled on the last page
        }

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className='font-semibold text-gray-600 flex items-center gap-2'
        >
          <span>Next</span>

          <img src='/arrow-right.svg' alt='' />
        </button>
      </div>
    </div>
  );
};

export default TasksContainer;
