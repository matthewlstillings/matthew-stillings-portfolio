import React, {Component} from 'react';
import projectsData from '../projects/projects-data';
import Projects from './projects'

export default class LargeProjectsContainer extends Component {
  state = {
    projects: projectsData
  }
  
  onIsolate = (projectToFocus) => {
    this.setState((prevState) => ({
      projects: prevState.projects.filter((project) => projectToFocus == project.name)
    }));
  }
  closeProject = () => {
    this.setState((prevState) => ({ projects: projectsData}) );
    console.log('Apple');
  }
  componentDidUpdate = () => {
    console.log(this.state.projects);
    console.log(projectsData);
  }
  render() {
    
    return (
      <div className="large-projects">
        {projectsData.length > 0 && <div className="large-projects__container"> 
        
                {
                   
                    this.state.projects.map((project)=> 
                        
                        <Projects
                          key = {project.name}
                          name = {project.name}
                          img = {project.img}
                          description = {project.description}
                          link = {project.link}
                          onIsolate = {this.onIsolate}
                          closeProject = {this.closeProject}
                        />
                    )            
                }
            
       </div>}
      </div>
    );
  }
}