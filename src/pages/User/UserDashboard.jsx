import { useState } from 'react';
import { HiOutlineCalendar } from 'react-icons/hi';
import SideMenu from '../../components/layouts/SideMenu';
import TaskCharts from './dashboardComponents/TaskCharts';
import StatsSection from './dashboardComponents/StatsSection';
import { useEffect } from 'react';
import axios from 'axios'; // npm install axios



const UserDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    // Exemple avec Laravel API
    axios.get('http://localhost:8000/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Erreur lors du chargement des tâches', error));
 
 }, []);
  const stats = {
    total: tasks.length,
    pending: tasks.filter(t => t.status === 'pending').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    completed: tasks.filter(t => t.status === 'completed').length
  };

  const chartData = {
    distribution: {
      labels: ['Pending', 'In Progress', 'Completed'],
      datasets: [{
        data: [stats.pending, stats.inProgress, stats.completed],
        backgroundColor: ['rgb(124 58 237)', 'rgb(8 145 178)', ' rgb(132 204 22)']
      }]
    },
    priority: {
      labels: ['Low', 'Medium', 'High'],
      datasets: [{
        data: [
          tasks.filter(t => t.priority === 'low').length,
          tasks.filter(t => t.priority === 'medium').length,
          tasks.filter(t => t.priority === 'high').length
        ],
        backgroundColor: ['#10B981', '#F59E0B', '#EF4444']
      }]
    }
  };

  
  // Date actuelle formatée
      const currentDate = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
 const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideMenu expanded={expanded} setExpanded={setExpanded} />
      
      
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm p-4">
          <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Good Morning! </h1>
        <div className="flex items-center text-gray-500 mt-1">
          <HiOutlineCalendar className="mr-2" />
          <span>{formattedDate}</span>
        </div>
      </div>
        </header>

        <main className="p-6 space-y-6">
          <StatsSection stats={stats} />
          <TaskCharts 
            distributionData={chartData.distribution} 
            priorityData={chartData.priority} 
          />
         
        </main>

        
      </div>
    </div>
  );
};

export default UserDashboard;