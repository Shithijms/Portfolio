import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from './ui/Link';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Banking World Project",
    description: "A full-featured banking platform where the account is maintained",
    image: "https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg",
    tags: ["Python", "OOP"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Shithijms/banking_world_project"
  },
  {
    id: 2,
    title: "HR ChatBot",
    description: "A collaborative bot that communicates without the intervention of the HR and clarifies the queries and requests of the team",
    image: "https://images.pexels.com/photos/8566458/pexels-photo-8566458.jpeg",
    tags: ["React", "Langchain", "Python", "FastAPI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Shithijms/HR-chatbot"
  },
  {
    id: 3,
    title: "Django CRM",
    description: "An application that managaes the customer relationship and provides a platform for the customers to interact with the company",
    image: "https://images.pexels.com/photos/7689734/pexels-photo-7689734.jpeg",
    tags: ["Python", "Django"],
    githubUrl: "https://github.com"
  },
   {
     id: 4,
     title: "SpaceShip Game",
     description: "A fun and interactive spaceship two player game built with pure python",
     image: "https://images.pexels.com/photos/7476134/pexels-photo-7476134.jpeg",
     tags: ["Python", "Pygame"],
     liveUrl: "https://example.com",
     githubUrl: "https://github.com/Shithijms/spaceship-game"
  }
  // {
  //   id: 5,
  //   title: "Real-time Chat Application",
  //   description: "A scalable chat application with features like group chats, direct messaging, and file sharing.",
  //   image: "https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   tags: ["WebSockets", "React", "Node.js", "Redis"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com"
  // },
  //{
  //   id: 6,
  //   title: "Weather Dashboard",
  //   description: "A weather application that provides current conditions and forecasts. Includes location detection and interactive maps.",
  //   image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   tags: ["JavaScript", "APIs", "CSS", "HTML"],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com"
  // }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
    <div className="relative overflow-hidden h-48">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4">
        <div className="flex space-x-3">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-gray-900 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
              aria-label="View live project"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-gray-900 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
              aria-label="View source code"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <Link 
        href={project.liveUrl || project.githubUrl || "#"} 
        className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
        target="_blank"
      >
        View Details <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'React', 'Node.js', 'Mobile', 'Python', 'UI/UX'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => 
          tag.toLowerCase().includes(filter.toLowerCase())
        )
      );

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Here are some of the projects I've worked on. Each project represents different challenges and learning experiences.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="https://github.com" 
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            target="_blank"
          >
            View More Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;