import { useAutoAnimate } from '@formkit/auto-animate/react';
import TaskItem from './TaskItem';
import { HiOutlineSwitchVertical } from 'react-icons/hi';

const TaskList = ({ 
  tasks, 
  filter, 
  searchQuery, 
  sortConfig, 
  onSort, 
  onDelete, 
  onToggleStatus 
}) => {
  const [listRef] = useAutoAnimate();

  const filteredTasks = tasks.filter(task => {
    // Filtre par catégorie/statut/priorité
    const matchesFilter = filter === 'all' || 
                         task.category === filter || 
                         task.status === filter || 
                         task.priority === filter;
    
    // Filtre par recherche
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         task.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    onSort({ key, direction });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-100 items-center bg-gray-50 text-sm text-gray-500">
        <div 
          className="col-span-3 font-medium cursor-pointer flex items-center"
          onClick={() => requestSort('title')}
        >
          Task <HiOutlineSwitchVertical className="ml-1 text-gray-400" />
        </div>
        <div className="col-span-3 font-medium">Description</div>
        <div 
          className="col-span-1 font-medium cursor-pointer flex items-center"
          onClick={() => requestSort('category')}
        >
          Category <HiOutlineSwitchVertical className="ml-1 text-gray-400" />
        </div>
        <div 
          className="col-span-1 font-medium cursor-pointer flex items-center"
          onClick={() => requestSort('priority')}
        >
          Priority <HiOutlineSwitchVertical className="ml-1 text-gray-400" />
        </div>
        <div 
          className="col-span-1 font-medium cursor-pointer flex items-center"
          onClick={() => requestSort('status')}
        >
          Status <HiOutlineSwitchVertical className="ml-1 text-gray-400" />
        </div>
        <div 
          className="col-span-2 font-medium cursor-pointer flex items-center"
          onClick={() => requestSort('dueDate')}
        >
          Due date <HiOutlineSwitchVertical className="ml-1 text-gray-400" />
        </div>
        <div className="col-span-1 font-medium">Actions</div>
      </div>

      <div ref={listRef} className="divide-y divide-gray-100">
        {sortedTasks.length > 0 ? (
          sortedTasks.map(task => (
            <TaskItem 
              key={task.id}
              task={task}
              onDelete={onDelete}
              onToggleStatus={onToggleStatus}
            />
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            Aucune tâche ne correspond aux critères
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;