import { useState, useEffect } from 'react';
import TaskFilters from './MyTasksComponents/TaskFilters';
import TaskList from './MyTasksComponents/TaskList';
import TaskEmptyState from './MyTasksComponents/TaskEmptyState';
import TaskModal from './MyTasksComponents/TaskModal';


const MyTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [
      { 
        id: 1, 
        title: 'completer la partie frontend', 
        description: '',
        category: 'work', 
        priority: 'high', 
        status: 'in-progress', 
        dueDate: '2025-06-24' 
      },
      { 
        id: 2, 
        title: 'Courses alimentaires', 
        description: 'Lait, œufs, pain, fruits',
        category: 'personal', 
        priority: 'medium', 
        status: 'pending', 
        dueDate: '2025-03-25' 
      }
    ];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({ 
    title: '', 
    description: '',
    category: 'work', 
    priority: 'medium', 
    dueDate: '' 
  });
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'dueDate', direction: 'asc' });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => {
    setTasks([...tasks, {
      ...task,
      id: Date.now(),
      status: 'pending'
    }]);
    setIsModalOpen(false);
    setNewTask({ title: '', description: '', category: 'work', priority: 'medium', dueDate: '' });
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleStatus = (id) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' } 
        : task
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">My Tasks</h1>
        <p className="text-gray-600">Manage your daily activities</p>
      </header>

      <TaskFilters
        filter={filter}
        setFilter={setFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onAddTask={() => setIsModalOpen(true)}
      />

      {tasks.length > 0 ? (
        <TaskList
          tasks={tasks}
          filter={filter}
          searchQuery={searchQuery}
          sortConfig={sortConfig}
          onSort={setSortConfig}
          onDelete={handleDeleteTask}
          onToggleStatus={handleToggleStatus}
        />
      ) : (
        <TaskEmptyState onAddTask={() => setIsModalOpen(true)} />
      )}

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddTask}
        task={newTask}
        setTask={setNewTask}
      />
    </div>
  );
};

export default MyTasks;