import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

// Initialisation REQUISE avant d'utiliser les graphiques
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const TaskCharts = ({ distributionData, priorityData }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartCard title="Task Distribution">
        <Pie data={distributionData} options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom' } }
              }}/>
      </ChartCard>
      <ChartCard title="Task Priority Levels">
        <Bar data={priorityData} options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } },
                plugins: { legend: { display: false } }
              }} />
      </ChartCard>
    </div>
  );
};

const ChartCard = ({ title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <div className="h-64">{children}</div>
  </div>
);

export default TaskCharts;