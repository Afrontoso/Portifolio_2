import { useState, useEffect } from 'react';

export const useGitHub = (username) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
        if (!response.ok) {
          throw new Error('Failed to fetch projects from GitHub');
        }
        const data = await response.json();
        
        // Filtra os projetos que contêm o tópico "portfolio"
        const portfolioProjects = data.filter(project => 
          project.topics && project.topics.includes('portfolio')
        );

        setProjects(portfolioProjects); // Define o estado com os projetos filtrados
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchProjects();
    }
  }, [username]);

  return { projects, loading, error };
};