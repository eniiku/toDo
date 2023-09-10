import { useState, useEffect } from 'react';
import fetchTasks from '../../data/api';
import TaskCard from '../TaskCard';

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
      <h3>My Tasks</h3>

      <ul>
        {tasks.slice(0, 9).map((task) => (
          <TaskCard key={task.id} taskInfo={task} />
        ))}
      </ul>
    </div>
  );
};

export default TasksContainer;
