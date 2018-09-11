import React, {Component} from 'react';
import projectsData from '../projects/projects-data';
import Projects from './projects'

export default class ProjectsContainer extends Component {
  render() {
    
    return (
      <div className="mobile-projects">
        <h1 className="projects__title has-fade">Projects</h1>
        {projectsData.length > 0 && <div className="mobile-projects__container"> 
                {    
                    
                    projectsData.map((project)=> 
                        <Projects
                          key = {project.name}
                          name = {project.name}
                          img = {project.img}
                          description = {project.description}
                          link = {project.link}
                          
                        />
                    )               
                }
            
       </div>}
      </div>
    );
  }
}
