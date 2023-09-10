import { useState } from 'react';
import useActionStore from '../useActionStore';
import useTodoStore from '../useTodoStore';

// Define the prop type
interface Props {
  taskInfo: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
}

const TaskCard = (props: Props) => {
  const { taskInfo } = props;

  const { setSelectedTodo, selectedTodo } = useTodoStore();
  const { setAction } = useActionStore();
  const [isCompleted, setIsCompleted] = useState(taskInfo.completed);

  const handleSelectTodo = () => {
    setSelectedTodo(taskInfo);
    setAction('preview');
  };

  return (
    <li
      key={taskInfo.id}
      onClick={handleSelectTodo}
      className={`flex items-center justify-between py-4 px-6 work-sans-sm border-b border-gray-200 bg-gray-50 mb-4
        hover:bg-[#EAEDFE] transition-colors duration-200 ease-in-out delay-75 ${
          taskInfo === selectedTodo ? 'bg-[#EADEFE]' : ''
        }`}
    >
      <div className='flex items-center gap-3'>
        <button>
          <input
            type='checkbox'
            name=''
            id={`task_${taskInfo.id}`}
            className='form-checkbox w-[1.25rem] h-[1.25rem] rounded-[0.375rem] bg-white border-gray-300'
            aria-label='Click to check off completed task'
            onChange={() => setIsCompleted((prev) => !prev)}
            checked={isCompleted ? true : false}
          />
        </button>

        <div>
          <h5
            className={`${
              isCompleted ? 'line-through text-[#D0D5DD]' : 'text-gray-900'
            } font-medium first-letter:capitalize`}
          >
            {taskInfo.title}
          </h5>

          <p
            className={`${
              isCompleted ? 'line-through text-[#D0D5DD]' : 'text-gray-600'
            } mt-1`}
          >
            10.30am - 11.30am
          </p>
        </div>
      </div>

      <p className='text-gray-600'>Today</p>
    </li>
  );
};

export default TaskCard;
