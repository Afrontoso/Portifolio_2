import React from 'react';
import { useAppContext } from '../context/AppContext';

const AboutSection = () => {
  const { text } = useAppContext();
  return (
    <div className="p-4 animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{text.about.title}</h2>
      <div className="w-16 h-1 bg-green-500 rounded-full mb-6"></div>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {text.about.description}
      </p>
    </div>
  );
};

export default AboutSection;