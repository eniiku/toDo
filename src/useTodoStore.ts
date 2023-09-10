import { create } from 'zustand';

interface TodoItem {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

// Define the store and its initial state
interface TodoStore {
  todos: TodoItem[];
  fetchTodos: () => Promise<void>;
  removeTodo: (id: number) => void;
  addTodo: (todo: TodoItem) => void;
  editTodo: (id: number, updatedTodo: Partial<TodoItem>) => void;
  selectedTodo: TodoItem | null;
  setSelectedTodo: (todo: TodoItem | null) => void; // Add setSelectedTodo function
}

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],

  selectedTodo: null,

  // Function to fetch data for todos
  fetchTodos: async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const todos = await response.json();
      set({ todos });
    } catch (error) {
      console.error(error);
    }
  },

  // Function to add a new todo item
  addTodo: (newTodo: TodoItem) =>
    set((state) => ({
      todos: [newTodo, ...state.todos],
    })),

  editTodo: (id: number, updatedTodo: Partial<TodoItem>) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      ),
    })),

  // Function to remove a todo item by ID
  removeTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  setSelectedTodo: (todo) => set({ selectedTodo: todo }), // Action to set selectedTodo
}));

export default useTodoStore;
