import React, { useState } from 'react';
import '../components/css/Projects.css';
import project1 from '../components/images/project1.png';
import project2 from '../components/images/project2.jpg';
import project3 from '../components/images/project3.jpg';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: "Modern Architecture", img: project1, description: "A creative take on modern spaces." },
    { id: 2, title: "Creative Spaces", img: project2, description: "Beautiful designs for co-working areas." },
    { id: 3, title: "Brand Identity", img: project3, description: "Innovative branding solutions." },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container_project">
        <h2>Latest Work</h2>
        <div className="project_gallery">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="project_item"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div className="modal_content" onClick={e => e.stopPropagation()}>
            <img src={selectedProject.img} alt={selectedProject.title} />
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <button className="btn" onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;