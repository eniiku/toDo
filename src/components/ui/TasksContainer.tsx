import { useState, useEffect } from 'react';
import fetchTasks from '../../data/api';
import TaskCard from '../TaskCard';
import Pagination from '../Pagination';

const TasksContainer = () => {
  const [tasks, setTasks] = useState<
    { userId: number; id: number; title: string; completed: boolean }[]
  >([]);

  // Fetch tasks data from api
  useEffect(() => {
    (async () => {
      try {
        const fetchedTasks = await fetchTasks();
        setTasks(fetchedTasks);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <h3 className='font-gray-900 font-work-sans font-semibold leading-6'>
        My Tasks
      </h3>

      <ul className='mt-4 mb-8'>
        {tasks.slice(0, 9).map((task) => (
          <TaskCard key={task.id} taskInfo={task} />
        ))}
      </ul>

      <Pagination data={tasks} />
    </div>
  );
};

export default TasksContainer;
