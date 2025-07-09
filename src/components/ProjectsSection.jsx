import React from 'react';
import { useAppContext } from '../context/AppContext';
import { useGitHub } from '../hooks/useGitHub';

const ProjectCard = ({ project }) => (
    <a href={project.html_url} key={project.id} target="_blank" rel="noopener noreferrer" className="block bg-gray-100 dark:bg-gray-900 p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white truncate">{project.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 h-10">{project.description || 'Sem descrição disponível.'}</p>
        <div className="mt-4 flex items-center text-xs text-gray-500 dark:text-gray-500">
            <span className="flex items-center mr-4">
               <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                {project.stargazers_count}
            </span>
            <span className="flex items-center">
               <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 1.5a.75.75 0 01.75.75v1.511A4.48 4.48 0 0116.5 5.5c1.513 0 2.86.944 3.539 2.264a.75.75 0 01-1.278.772A3.01 3.01 0 0016.5 7.0c-1.162 0-2.186.62-2.75 1.5h-.012C13.125 10.03 12.064 11 10.5 11c-1.564 0-2.625-.97-3.238-2.5H7.25A2.75 2.75 0 014.5 7.0c-.965 0-1.82.47-2.37.122a.75.75 0 01-.75-1.298A4.48 4.48 0 014.5 3.5c1.513 0 2.86.944 3.539 2.264a.75.75 0 01-1.278.772A3.01 3.01 0 004.5 5.0c-1.162 0-2.186.62-2.75 1.5h-.012C1.125 8.03 0.064 9 0 9a.75.75 0 010-1.5c.002 0 .004 0 .006 0c.058 0 .118-.004.18-.013A3.001 3.001 0 012.5 5.0c.965 0 1.82.47 2.37.122a.75.75 0 01.75 1.298A4.48 4.48 0 016.5 8.5c-1.513 0-2.86-.944-3.539-2.264a.75.75 0 011.278-.772A3.01 3.01 0 006.5 4.0c1.162 0 2.186-.62 2.75-1.5h.012C9.875 .97 10.936 0 12.5 0a.75.75 0 01.75.75v1.5zM8.5 12a.75.75 0 01.75.75v1.511a4.48 4.48 0 013.711 1.789c.679 1.32.35 2.94-.739 3.699l-1.235.823a.75.75 0 01-.938-.938l1.235-.823c.59-.395.77-.978.43-1.44a3.01 3.01 0 00-2.462-1.2c-1.162 0-2.186.62-2.75 1.5h-.012C6.125 18.03 5.064 19 3.5 19c-1.564 0-2.625-.97-3.238-2.5H.25a.75.75 0 010-1.5h.012C.875 13.97 1.936 13 3.5 13c1.564 0 2.625.97 3.238 2.5h.012A2.75 2.75 0 019.5 14.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 01-.75-.75z" clipRule="evenodd"></path></svg>
                {project.forks_count}
            </span>
             {project.language && <span className="ml-auto text-xs font-medium">{project.language}</span>}
        </div>
    </a>
);

const ProjectsSection = () => {
  const { text } = useAppContext();
  const { projects, loading, error } = useGitHub('Afrontoso');

  return (
    <div className="p-4 animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{text.projects.title}</h2>
      <div className="w-16 h-1 bg-green-500 rounded-full mb-6"></div>
      
      {loading && <div className="text-center">Carregando projetos...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;