import { HiOutlineTrendingUp, HiOutlineTrendingDown } from 'react-icons/hi';
import { 
  HiOutlineClipboardList,
  HiOutlineClock,
  
  HiOutlineCheckCircle 
} from 'react-icons/hi';

const StatsCards = ({ 
  title, 
  value, 
  bgColor = 'bg-gray-50', 
  textColor = 'text-gray-600',
  borderColor = 'border-gray-200'
}) => {
  // Correspondance des icônes
  const iconMap = {
    'Total Tasks': <HiOutlineClipboardList className="w-5 h-5" />,
    'Pending Tasks': <HiOutlineClock className="w-5 h-5" />,
    'In Progress': <HiOutlineTrendingUp className="w-5 h-5" />,
    'Completed Tasks': <HiOutlineCheckCircle className="w-5 h-5" />
  };

  return (
    <div className={`p-6 rounded-lg border ${bgColor} ${borderColor} shadow-sm transition-all hover:shadow-md`}>
      <div className="flex justify-between items-start">
        <div>
          <p className={`text-sm font-medium ${textColor}`}>{title}</p>
          <p className={`mt-1 text-2xl font-bold ${textColor}`}>{value}</p>
        </div>
        <span className={`p-2 rounded-lg ${bgColor.replace('50', '100')} ${textColor}`}>
          {iconMap[title]}
        </span>
      </div>
    </div>
  );
};



const StatCard = ({ title, value, trend, trendValue }) => {
  const TrendIcon = trend === 'up' ? HiOutlineTrendingUp : HiOutlineTrendingDown;
  const trendColor = trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-gray-500';

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
      {trendValue && (
        <div className={`mt-2 flex items-center text-sm ${trendColor}`}>
          <TrendIcon className="mr-1" />
          <span>{trendValue}</span>
        </div>
      )}
    </div>
  );
};

export default StatsCards;