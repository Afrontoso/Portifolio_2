import React from 'react';
import { Sun, Moon, Mail, Phone, Github, Linkedin, FileText } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Sidebar = () => {
  const { toggleTheme, theme, text } = useAppContext();

  return (
    <aside className="w-full lg:w-1/4 lg:sticky top-8 self-start">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-colors duration-300">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Victor Leandro</h1>
            <button onClick={toggleTheme} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        </div>
        <div className="flex justify-center mb-6">
             <img 
                src="https://avatars.githubusercontent.com/u/83599460?v=4" 
                alt="Victor Leandro" 
                className="w-32 h-32 rounded-full border-4 border-green-400 dark:border-green-500 shadow-md"
             />
        </div>
        <div className="text-center mb-6">
          <p className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-4 py-1 rounded-full inline-block text-sm font-medium">{text.role}</p>
        </div>
        <hr className="border-gray-200 dark:border-gray-700 my-6"/>
        <div className="space-y-4 text-sm">
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Mail size={18} className="mr-3 text-green-500" />
            <div>
                <p className="font-semibold text-gray-700 dark:text-gray-300">{text.contact.email}</p>
                <a href="mailto:victor2lra@gmail.com" className="hover:text-green-500 transition-colors">victor2lra@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Phone size={18} className="mr-3 text-green-500" />
            <div>
                <p className="font-semibold text-gray-700 dark:text-gray-300">{text.contact.phone}</p>
                <p>+55 61 98274-9810</p>
            </div>
          </div>
        </div>
        <hr className="border-gray-200 dark:border-gray-700 my-6"/>
        <div className="flex justify-center space-x-4">
            <a href="https://github.com/Afrontoso" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300">
                <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/victorleandro/" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300">
                <Linkedin size={24} />
            </a>
            <a href="#" className="p-2 text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300">
                <FileText size={24} />
            </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;