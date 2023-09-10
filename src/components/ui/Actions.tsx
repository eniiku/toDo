import { useState } from 'react';
import { ClassNames, DayPicker } from 'react-day-picker';
import styles from 'react-day-picker/dist/style.module.css';

import useTodoStore from '../../useTodoStore';
import useActionStore from '../../useActionStore';

const Actions = () => {
  const { addTodo, removeTodo, editTodo, selectedTodo } = useTodoStore();
  const { action, setAction } = useActionStore();
  const [selected, setSelected] = useState<Date>();
  const [newTodo, setNewTodo] = useState({
    id: 0,
    userId: 0,
    title: '',
    completed: false,
  });

  const handleAddTodo = () => {
    if (newTodo.title.trim() !== '') {
      // Add the new todo to the store
      addTodo(newTodo);

      // Clear the input field
      setNewTodo({
        id: 0,
        userId: 0,
        title: '',
        completed: false,
      });

      // Set the action to null after adding
      setAction(null);
    }
  };

  const handleRemoveTodo = () => {
    if (selectedTodo) {
      removeTodo(selectedTodo.id);
    }

    setAction(null);
  };

  const classNames: ClassNames = {
    ...styles,
    // root: 'custom-root',
  };

  return (
    <div
      className='w-full shadow-[0_8px_8px_-4px_rgba(16,24,40,0.03),0_20px_24px_-4px_rgba(16,24,40,0.08)]
      rounded-lg border border-[#f2f4f7]'
    >
      {
        // Sets Date picker as default tab / fallback
        action === null && (
          <DayPicker
            mode='single'
            selected={selected}
            classNames={classNames}
            onSelect={setSelected}
            showOutsideDays
          />
        )
      }

      {
        /* Add task tab - triggers when addTask is active */
        action === 'add' && (
          <div className='p-6'>
            <div className='flex items-center justify-between'>
              <h1 className='font-semibold text-gray-900 font-work-sans text-[1.125rem] leading-[1.75rem]'>
                Add Task
              </h1>

              <button onClick={() => setAction(null)}>
                <img src='/public/close.svg' alt='' />
              </button>
            </div>

            <textarea
              value={newTodo.title}
              onChange={(e) =>
                setNewTodo({ ...newTodo, title: e.target.value })
              }
              className='form-input my-4 rounded-lg py-3 px-[0.875rem] border border-gray-300 bg-gray-50
            shadow-[0_1px_2px_0_rgba(16,24,40,_0.05)] h-[8.75rem] w-full resize-none font-work-sans leading-6'
            ></textarea>

            <div>
              <div className='flex items-center justify-evenly work-sans-sm font-semibold'>
                <button
                  className='flex items-center gap-2 px-4 py-[0.63rem] rounded-lg border border-gray-300
            shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]'
                >
                  <span>
                    <img src='/public/calender.svg' alt='' />
                  </span>
                  Today
                </button>

                <button
                  className='flex items-center gap-2 px-4 py-[0.63rem] rounded-lg border border-gray-300
            shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]'
                >
                  <span>
                    <img src='/public/clock.svg' alt='' />
                  </span>
                  00.00
                </button>

                <button
                  className='flex items-center gap-2 px-4 py-[0.63rem] rounded-lg border border-gray-300
            shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]'
                >
                  <span>
                    <img src='/public/clock.svg' alt='' />
                  </span>
                  00.00
                </button>
              </div>

              <div className='mt-4 mb-8 flex items-center justify-between'>
                <p className='font-inter font-medium text-[#667085]'>
                  <span>
                    <img
                      src='/public/bell.svg'
                      alt=''
                      className='mr-2 inline-block'
                    />
                  </span>
                  10 Minutes before
                </p>

                <img src='/public/close.svg' alt='' className='float-right' />
              </div>
            </div>

            <div className='flex gap-3 justify-between items-center'>
              <button
                onClick={() => setAction(null)}
                className='w-[10.4375rem] px-4 py-[0.62rem] rounded-lg border border-gray-300
            shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] font-inter font-semibold text-gray-700'
              >
                Cancel
              </button>

              {/* Adds new Todo to Global todo list */}
              <button
                onClick={handleAddTodo}
                className='w-[10.4375rem] px-4 py-[0.62rem] rounded-lg bg-primary-blue border border-primary-blue 
            text-white work-sans-sm font-semibold shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]'
              >
                Add
              </button>
            </div>
          </div>
        )
      }

      {
        // Preview task tab - triggers when todo item is clicked
        action === 'preview' && (
          <div className='px-6 py-5'>
            <div>
              <h1 className='text-[1.125rem] text-[#272727] font-bold first-letter:capitalize'>
                {selectedTodo?.title}
              </h1>

              <div className='my-8 font-work-sans leading-[120%]'>
                <h4 className='flex items-center gap-2'>
                  <span>
                    <img src='/public/calender.svg' alt='' className='fill' />
                  </span>
                  20th January, 2023
                </h4>

                <h4 className='flex items-center gap-2 mt-2'>
                  <span>
                    <img src='/public/clock.svg' alt='' />
                  </span>
                  8:00AM - 10:00AM
                </h4>
              </div>
            </div>

            <div className='flex gap-3 justify-between items-center'>
              <button
                onClick={handleRemoveTodo}
                className='w-[10.4375rem] px-4 py-[0.62rem] rounded-lg border border-gray-300
            shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] font-inter font-semibold text-gray-700'
              >
                Delete
              </button>

              {/* Adds new Todo to Global todo list */}
              <button
                onClick={() => setAction('edit')}
                className='w-[10.4375rem] px-4 py-[0.62rem] rounded-lg bg-primary-blue border border-primary-blue 
            text-white work-sans-sm font-semibold shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]'
              >
                Edit
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Actions;
