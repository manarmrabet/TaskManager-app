import { HiPlus, HiOutlineSearch } from 'react-icons/hi';
import { HiOutlineBriefcase, HiOutlineHome, HiOutlineArchive } from 'react-icons/hi';

const TaskFilters = ({ 
  filter, 
  setFilter, 
  onAddTask 
}) => {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          
        
        </div>
        <button
          onClick={onAddTask}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors"
        >
          <HiPlus /> New Task
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-lg text-sm ${filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-white'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('work')}
          className={`px-3 py-1.5 rounded-lg text-sm flex items-center ${filter === 'work' ? 'bg-indigo-600 text-white' : 'bg-white'}`}
        >
          <HiOutlineBriefcase className="mr-1" /> Work
        </button>
        <button
          onClick={() => setFilter('personal')}
          className={`px-3 py-1.5 rounded-lg text-sm flex items-center ${filter === 'personal' ? 'bg-indigo-600 text-white' : 'bg-white'}`}
        >
          <HiOutlineHome className="mr-1" /> Personal
        </button>
        <button
          onClick={() => setFilter('other')}
          className={`px-3 py-1.5 rounded-lg text-sm flex items-center ${filter === 'other' ? 'bg-indigo-600 text-white' : 'bg-white'}`}
        >
          <HiOutlineArchive className="mr-1" /> Other
        </button>
      </div>
    </div>
  );
};

export default TaskFilters;