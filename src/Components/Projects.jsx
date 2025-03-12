import PortfolioImage from '../assets/img/portfolio.png';
import MariaImage from '../assets/img/maria.png';
import EcomImage from '../assets/img/ecom.png';
import SetaImage from '../assets/seta.png';
import CloseIcon from "../assets/close.png";

import { useState } from 'react';

export const Projects = () => {
  const projectData = [
    {
      id: 1,
      name: "Maria",
      image: MariaImage,
      link: "https://github.com/tamysteimbch/maria",
      description: "Um site para professores onde é possivel organizar suas turmas, provas e questões. Participei do desenvolvimento Front-end desse projeto de TCC, na criação das telas utilizando Html, Css e Javascript. Realizei os commits das branches no GitHub e organizava as pendências e conclusões das tarefas no Trello.",
      technologies: ["JavaScript", "Trello", "GitHub"]
    },
    {
      id: 2,
      name: "EcomJs",
      image: EcomImage,
      link: "https://github.com/eimatheusinho/EcomJS",
      description: "Plataforma de e-commerce desenvolvida em JavaScript e com integração de pagamentos. Projeto curso Javascript EBAC.",
      technologies: ["React", "Vite", "Firebase"]
    },
    {
      id: 3,
      name: "Portfólio",
      image: PortfolioImage,
      link: "https://github.com/eimatheusinho/eimatheusinho.github.io",
      description: "Meu portfólio pessoal desenvolvido com React e Tailwind CSS.",
      technologies: ["React", "Tailwind CSS", "Vite"]
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="Projetos" className='w-full bg-[#201f1f] py-20 scroll-mt-10'>
      <div className='max-w-5xl mx-auto px-6 md:px-16'>
        <div className='text-white text-center md:text-left mb-12 md:gap-20 px-6 md:px-10'>
          <h1 className='text-4xl font-bold mb-4'>Projetos</h1>
          <p className='text-lg text-white/80'>Aqui você pode ver meus projetos, habilidades e experiências.</p>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {projectData.map((project) => (
            <div
              key={project.id}
              className='bg-[#292828] p-6 rounded-xl shadow-lg text-white cursor-pointer hover:scale-105 transition-transform'
              onClick={() => openModal(project)}
            >
              <img src={project.image} alt={project.name} className='w-full h-40 object-cover rounded-lg mb-4' />
              
              <h2 className='text-xl font-semibold mb-2'>{project.name}</h2>

              <div className='flex flex-wrap gap-2 mb-4'>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='text-xs bg-[#3a3a3a] text-gray-200 px-2 py-1 rounded-lg border border-gray-500'>
                    {tech}
                  </span>
                ))}
              </div>

              <div className='flex items-center justify-between'>
                <button
                onClick={(e) => {
                e.stopPropagation(); 
                window.open(project.link, '_blank'); 
                }} className='py-2 px-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition cursor-pointer'>
                  <img src={SetaImage} alt="Download" className='w-auto h-5 object-contain' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 z-50">
    <div className="bg-[#292828] p-7 rounded-xl text-white max-w-xl w-full relative my-6"> 
      
      <button className="font-bold absolute top-0.5 right-0.5 text-xl text-gray-400 hover:text-white p-1" onClick={closeModal}>
        <img src={CloseIcon} alt="Fechar" className="h-6 w-6 cursor-pointer" />
      </button>

      <img src={selectedProject.image} alt={selectedProject.name} className="w-full max-h-[400px] object-contain rounded-lg mb-4 mx-auto" />
      
      <h2 className="text-2xl font-bold mb-2">{selectedProject.name}</h2>
      <p className="text-gray-300 mb-4">{selectedProject.description}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        {selectedProject.technologies.map((tech, index) => (
          <span key={index} className='text-xs bg-[#3a3a3a] text-gray-200 px-2 py-1 rounded-lg border border-gray-500'>
            {tech}
          </span>
        ))}
      </div>

      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
        <button className="py-2 px-4 font-bold cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition w-full">
          Acessar Projeto
        </button>
      </a>
    </div>
  </div>
)}
    </section>
  );
};

export default Projects;
