import React from 'react';
import { useAppContext } from '../context/AppContext';

const skills = [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
];

const SkillCard = ({ skill }) => (
    <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl flex flex-col items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <img src={skill.icon} alt={skill.name} className="h-12 w-12 mb-3"/>
        <p className="font-semibold text-sm text-gray-700 dark:text-gray-300">{skill.name}</p>
    </div>
);

const SkillsSection = () => {
  const { text } = useAppContext();
  return (
    <div className="p-4 animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{text.skills.title}</h2>
      <div className="w-16 h-1 bg-green-500 rounded-full mb-6"></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {skills.map(skill => <SkillCard key={skill.name} skill={skill} />)}
      </div>
    </div>
  );
};

export default SkillsSection;