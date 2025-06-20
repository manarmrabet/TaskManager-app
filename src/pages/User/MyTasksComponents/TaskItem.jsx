import { HiOutlineTrash, HiCheckCircle, HiClock } from 'react-icons/hi';

const TaskItem = ({ task, onDelete, onToggleStatus }) => {
  const priorityClasses = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800'
  };

  const statusClasses = {
    completed: 'bg-green-100 text-green-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    pending: 'bg-gray-100 text-gray-800'
  };

  const categoryLabels = {
    work: 'Travail',
    personal: 'Personnel',
    other: 'Autre'
  };

  return (
    <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-gray-50 text-sm">
      <div className="col-span-3 font-medium text-gray-800">{task.title}</div>
      <div className="col-span-3 text-gray-600">{task.description}</div>
      <div className="col-span-1 text-gray-600">{categoryLabels[task.category]}</div>
      <div className="col-span-1">
        <span className={`px-2 py-1 rounded-full text-xs ${priorityClasses[task.priority]}`}>
          {task.priority === 'high' ? 'Haute' : task.priority === 'medium' ? 'Moyenne' : 'Basse'}
        </span>
      </div>
      <div className="col-span-1">
        <span className={`px-2 py-1 rounded-full text-xs ${statusClasses[task.status]}`}>
          {task.status === 'completed' ? 'Terminé' : task.status === 'in-progress' ? 'En cours' : 'En attente'}
        </span>
      </div>
      <div className="col-span-2 text-gray-500">
        {new Date(task.dueDate).toLocaleDateString('fr-FR')}
      </div>
      <div className="col-span-1 flex justify-end gap-2">
        <button 
          onClick={() => onToggleStatus(task.id)}
          className="text-gray-400 hover:text-indigo-600 p-1"
          title="Changer le statut"
        >
          {task.status === 'completed' ? <HiCheckCircle className="text-green-500" /> : <HiClock />}
        </button>
        <button 
          onClick={() => onDelete(task.id)}
          className="text-gray-400 hover:text-red-600 p-1"
          title="Supprimer"
        >
          <HiOutlineTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;