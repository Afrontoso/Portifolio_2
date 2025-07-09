import React, { useState } from 'react';
import { Briefcase, User, Code } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('about');
  const { toggleLanguage, language, text } = useAppContext();

  const navItems = [
    { id: 'about', label: text.nav.about, icon: <User size={16} /> },
    { id: 'projects', label: text.nav.projects, icon: <Briefcase size={16} /> },
    { id: 'skills', label: text.nav.skills, icon: <Code size={16} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'about': return <AboutSection />;
      case 'projects': return <ProjectsSection />;
      case 'skills': return <SkillsSection />;
      default: return <AboutSection />;
    }
  };

  return (
    <main className="w-full lg:w-3/4">
      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg transition-colors duration-300">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <nav className="bg-gray-100 dark:bg-gray-900 p-1.5 rounded-full flex items-center space-x-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full flex items-center gap-2 transition-colors duration-300 ${
                  activeTab === item.id 
                  ? 'bg-green-500 text-white shadow' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
          <button onClick={toggleLanguage} className="mt-4 sm:mt-0 p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
            <img 
              src={language === 'pt' ? 'https://flagcdn.com/br.svg' : 'https://flagcdn.com/us.svg'}
              alt={language === 'pt' ? 'Bandeira do Brasil' : 'USA Flag'}
              className="w-8 h-8 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
            />
          </button>
        </header>
        <div className="min-h-[60vh]">
          {renderContent()}
        </div>
      </div>
    </main>
  );
};

export default MainContent;