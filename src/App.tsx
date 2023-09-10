import React from 'react';
import Navbar from './components/ui/Navbar';
import Panel from './components/Panel';
import Actions from './components/ui/Actions';
import TasksContainer from './components/ui/TasksContainer';
import useActionStore from './useActionStore';

const App = () => {
  const { setAction } = useActionStore();

  return (
    <React.Fragment>
      <Navbar />
      <main className='padding-x'>
        {/* Introduction Header */}

        <section className='mt-8 md:mt-12 sm:flex justify-between items-start'>
          <div>
            <h1 className='font-inter font-semibold text-2xl leading-8 text-gray-900 md:font-work-sans md:text-3xl md:leading-[2.375rem]'>
              Good morning!
            </h1>

            <p className='text-alt-normal text-gray-600 mt-1'>
              You got some task to do.
            </p>
          </div>

          <button
            onClick={() => setAction('add')}
            className='hidden sm:flex items-center work-sans-sm gap-2 px-4 py-[0.62rem] rounded-lg bg-primary-blue text-white shadow-[0_1px_2px_0px_rgba(16,24,40,0.05)]'
          >
            <span>
              <img src='/plus.svg' alt='' />
            </span>

            <span>Create New Task</span>
          </button>
        </section>

        {/* TASKS / DATE PICKER GRID */}

        <section className='grid__main'>
          {/*  PANEL/ TASK COMPS*/}

          <div>
            <Panel />
            <TasksContainer />
          </div>

          {/* DATEPICKER COMP */}

          <div className='hidden border-l border-gray-200 md:block md:pl-6 md:ml-6'>
            <Actions />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default App;
