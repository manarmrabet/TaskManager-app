import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  const [currentIllustration, setCurrentIllustration] = useState(0);
  
  const illustrations = [
    // Illustration 1 - Tableau de tâches
    <svg className="w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="400" height="300" rx="10" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="2"/>
      <rect x="80" y="90" width="340" height="50" rx="5" fill="white" stroke="#A5B4FC" strokeWidth="1.5"/>
      <rect x="80" y="160" width="340" height="50" rx="5" fill="white" stroke="#A5B4FC" strokeWidth="1.5"/>
      <rect x="80" y="230" width="340" height="50" rx="5" fill="white" stroke="#A5B4FC" strokeWidth="1.5"/>
      <circle cx="100" cy="115" r="8" fill="#4F46E5"/>
      <circle cx="100" cy="185" r="8" fill="#10B981"/>
      <circle cx="100" cy="255" r="8" fill="#F59E0B"/>
    </svg>,
    
    // Illustration 2 - Calendrier
    <svg className="w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="70" y="70" width="360" height="280" rx="10" fill="#ECFDF5" stroke="#10B981" strokeWidth="2"/>
      <rect x="70" y="70" width="360" height="60" rx="10" fill="#10B981"/>
      <rect x="90" y="150" width="80" height="60" rx="5" fill="white" stroke="#6EE7B7" strokeWidth="1.5"/>
      <rect x="190" y="150" width="80" height="60" rx="5" fill="white" stroke="#6EE7B7" strokeWidth="1.5"/>
      <rect x="290" y="150" width="80" height="60" rx="5" fill="white" stroke="#6EE7B7" strokeWidth="1.5"/>
      <rect x="90" y="230" width="80" height="60" rx="5" fill="#A7F3D0"/>
      <rect x="190" y="230" width="80" height="60" rx="5" fill="white" stroke="#6EE7B7" strokeWidth="1.5"/>
      <rect x="290" y="230" width="80" height="60" rx="5" fill="white" stroke="#6EE7B7" strokeWidth="1.5"/>
    </svg>,
    
    // Illustration 3 - Statistiques
    <svg className="w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="150" width="60" height="200" rx="5" fill="#4F46E5"/>
      <rect x="140" y="200" width="60" height="150" rx="5" fill="#10B981"/>
      <rect x="230" y="100" width="60" height="250" rx="5" fill="#F59E0B"/>
      <rect x="320" y="250" width="60" height="100" rx="5" fill="#6366F1"/>
      <line x1="40" y1="350" x2="400" y2="350" stroke="#9CA3AF" strokeWidth="2"/>
      <line x1="40" y1="350" x2="40" y2="50" stroke="#9CA3AF" strokeWidth="2"/>
    </svg>
  ];

  // Animation du carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIllustration((prev) => (prev + 1) % illustrations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-indigo-600 flex items-center">
          
          {/* app name */}
        </div>
        <div className="flex space-x-4">
          <Link 
            to="/login" 
            className="px-4 py-2 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Connexion
          </Link>
          <Link 
            to="/signup" 
            className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            S'inscrire
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Gérez vos tâches <span className="text-indigo-600">simplement</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Organisez votre travail et votre vie avec notre application de gestion de tâches intuitive. 
            Boostez votre productivité dès aujourd'hui.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/signup" 
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Commencer 
            </Link>
            <Link 
              to="/features" 
              className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Voir les fonctionnalités
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <div className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden bg-white shadow-xl flex items-center justify-center p-8">
            {illustrations.map((illustration, index) => (
              <div 
                key={index}
                className={`absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-1000 ${index === currentIllustration ? 'opacity-100' : 'opacity-0'}`}
              >
                {illustration}
              </div>
            ))}
          </div>
          <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-indigo-200 rounded-xl -z-10"></div>
          <div className="absolute -top-5 -right-5 w-20 h-20 bg-yellow-200 rounded-full -z-10"></div>
        </div>
      </div>

      {/* Features Preview */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Pourquoi choisir notre application ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="#4F46E5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                ),
                title: 'Productivité',
                description: 'Augmentez votre efficacité avec nos outils intelligents'
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="#10B981" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                  </svg>
                ),
                title: 'Personnalisation',
                description: 'Adaptez l\'interface à vos préférences'
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="#F59E0B" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                ),
                title: 'Gain de temps',
                description: 'Automatisez vos workflows répétitifs'
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;