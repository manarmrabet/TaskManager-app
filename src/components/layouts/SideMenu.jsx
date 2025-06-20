import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineViewGrid, HiOutlineClipboardCheck,HiOutlineClock,HiOutlineCheckCircle,HiOutlineCog,HiOutlineLogout} from 'react-icons/hi';

const SideMenu = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);

  const navItems = [
    { 
      name: 'Dashboard', 
      icon: <HiOutlineViewGrid className="w-5 h-5" />, 
      path: '/user/dashboard' 
    },
    { 
      name: 'Tasks', 
      icon: <HiOutlineClipboardCheck className="w-5 h-5" />, 
      path: '/user/tasks'
    },
    { 
      name: 'In progress', 
      icon: <HiOutlineClock className="w-5 h-5" />, 
      path: '/tasks/in-progress'
    },
    { 
      name: 'Completed', 
      icon: <HiOutlineCheckCircle className="w-5 h-5" />, 
      path: '/tasks/completed'
    },
    { 
      name: 'Settings', 
      icon: <HiOutlineCog className="w-5 h-5" />, 
      path: '/settings' 
    }
  ];

  return (
    <div className={`flex flex-col h-screen bg-white ${expanded ? 'w-64' : 'w-20'} transition-all duration-300 ease-in-out shadow-lg`}>
      
      {/* Header avec bouton de réduction */}
      <div className={`flex items-center ${expanded ? 'justify-between' : 'justify-center'} p-4 border-b border-gray-200`}>
        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-200 w-full">
            <div className="flex items-center">
              <img 
                className="w-8 h-8 rounded-full" 
                src="https://ui-avatars.com/api/?name=User&background=4f46e5&color=fff" 
                alt="User" 
              />
              <div className="ml-3">
                <p className="text-sm font-medium">fullname</p>
              </div>
            </div>
          </div>
        )}
        <button 
          onClick={() => setExpanded(!expanded)}
          className="p-1 rounded-lg hover:bg-gray-100"
        >
          {expanded ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          )}
        </button>
      </div>

      {/* Menu de navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center ${expanded ? 'px-4 py-3' : 'justify-center py-3'} rounded-lg mx-2 
                  ${location.pathname === item.path 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'hover:bg-gray-100 text-gray-700'
                  }`}
              >
                <span className="relative">
                  {item.icon}
                  {item.badge && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </span>
                {expanded && (
                  <span className="ml-3 font-medium">{item.name}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <button
          className={`flex items-center w-full ${expanded ? 'px-4 py-2' : 'justify-center p-2'} hover:bg-gray-100 rounded-lg`}
        >
          <HiOutlineLogout className="w-5 h-5" />
          {expanded && <span className="ml-3">Disconnect</span>}
        </button>
      </div>
    </div>
  );
};

export default SideMenu;