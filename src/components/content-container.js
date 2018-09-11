import React, {Component} from 'react';
import ProjectsContainer from './projects-container';


class ContentContainer extends Component {
  render() {
    return (
      <div className="content-container">
        <ProjectsContainer />
      </div>
    );
  }
}
export default ContentContainer;