import { motion } from 'framer-motion';
import { HiOutlineBriefcase, HiOutlineHome, HiOutlineArchive } from 'react-icons/hi';

const TaskModal = ({ isOpen, onClose, onSubmit, task, setTask }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">New Task</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title*</label>
            <input
              type="text"
              value={task.title}
              onChange={(e) => setTask({...task, title: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={task.description}
              onChange={(e) => setTask({...task, description: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
              rows="3"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                value={task.category}
                onChange={(e) => setTask({...task, category: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
              >
                <option value="work">
                  <HiOutlineBriefcase className="inline mr-2" /> Work
                </option>
                <option value="personal">
                  <HiOutlineHome className="inline mr-2" /> Personal
                </option>
                <option value="other">
                  <HiOutlineArchive className="inline mr-2" /> Other
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Priority</label>
              <select
                value={task.priority}
                onChange={(e) => setTask({...task, priority: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
              >
                <option value="low">low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Deadline</label>
            <input
              type="date"
              value={task.dueDate}
              onChange={(e) => setTask({...task, dueDate: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Create
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default TaskModal;