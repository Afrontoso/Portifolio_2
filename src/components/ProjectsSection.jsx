import React from 'react';
import { useAppContext } from '../context/AppContext';
import { useGitHub } from '../hooks/useGitHub';
import { Github, ExternalLink, Download } from 'lucide-react';
import { projectImageMap } from '../assets/projectImages';

// --- Como adicionar informações aos repositórios do GitHub ---
// Para que um projeto apareça aqui, adicione o tópico "portfolio" a ele no GitHub.
// Para definir o STATUS: adicione o tópico "finished" (para finalizado) ou "in-development" (para em desenvolvimento).
// Para adicionar uma DESCRIÇÃO: Na página do seu repositório, clique no ícone de engrenagem "Edit" ao lado de "About".
// Para adicionar um SITE (HOMEPAGE): Na página do seu repositório, vá para "Settings" e preencha o campo "Website".
// Para mostrar o botão de DOWNLOAD: Adicione o tópico "android-app" ao seu repositório no GitHub.

const ProjectCard = ({ project }) => {
  const { text } = useAppContext();
  const imageUrl = projectImageMap && projectImageMap[project.name];

  const getStatus = () => {
    if (project.topics.includes('finished')) {
      return <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-emerald-600 bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-300">Finalizado</span>;
    }
    if (project.topics.includes('in-development')) {
      return <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-amber-600 bg-amber-200 dark:bg-amber-900 dark:text-amber-300">Em Dsv.</span>;
    }
    return null;
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`Imagem do projeto ${project.name}`} 
            className="w-full h-full object-cover" 
          />
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700"></div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-2">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white truncate flex-shrink">{project.name}</h3>
            {getStatus()}
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow mb-6 h-10">
          {project.description || "Este projeto ainda não tem uma descrição. Adicione uma no GitHub para que apareça aqui!"}
        </p>
        <div className="mt-auto flex flex-col sm:flex-row items-center gap-3">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Github size={18} />
            GitHub
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ExternalLink size={18} />
              Ver Site
            </a>
          )}
          {project.topics.includes('android-app') && !project.homepage && (
             <a
              href={project.html_url + '/releases'} // Link de exemplo para a página de releases
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Baixar
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


const ProjectsSection = () => {
  const { text } = useAppContext();
  const { projects, loading, error } = useGitHub('Afrontoso');

  return (
    <div className="p-4 animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{text.projects.title}</h2>
      <div className="w-16 h-1 bg-green-500 rounded-full mb-6"></div>
      
      {loading && <div className="text-center py-10">Carregando projetos...</div>}
      {error && <div className="text-center text-red-500 py-10">{error}</div>}
      
      {!loading && !error && projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
      ) : (
        !loading && <p className="text-center text-gray-500 py-10">Nenhum projeto com a tag "portfolio" foi encontrado.</p>
      )}
    </div>
  );
};

export default ProjectsSection;