import { HiPlus, HiOutlineArchive } from 'react-icons/hi';

const TaskEmptyState = ({ onAddTask }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-gray-400 bg-white rounded-xl shadow-sm">
      <HiOutlineArchive className="text-4xl mb-4" />
      <p className="text-lg mb-2">Aucune tâche trouvée</p>
      <button 
        onClick={onAddTask}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
      >
        <HiPlus /> Créer une tâche
      </button>
    </div>
  );
};

export default TaskEmptyState;