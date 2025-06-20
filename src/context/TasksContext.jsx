import { createContext, useContext, useState } from 'react';

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete dashboard', priority: 'high', status: 'in-progress', dueDate: '2025-03-26' },
    { id: 2, title: 'Team meeting', priority: 'medium', status: 'pending', dueDate: '2025-03-25' },
    { id: 3, title: 'Grocery shopping', priority: 'low', status: 'completed', dueDate: '2025-03-24' },
  ]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export  const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
};
