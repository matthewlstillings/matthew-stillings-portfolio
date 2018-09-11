import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

export default class Projects extends Component {
  state = {
    width: 0,
    expanded: false,
    displayInfo: false
  };
  expandProjectInfo = () => {
    this.setState((prevState)=>({expanded: !prevState.expanded }));
  }
  onTarget = (name) => {
    this.setState((prevState) => ({displayInfo: true}));
    this.props.onIsolate(name)
  }
  onClose = () => {
    this.props.closeProject()
    this.setState((prevState)=>({displayInfo: false }));
  }
  componentDidMount = () => {
    this.updateWindowDimensions();
  }
  componentDidUpdate = () => {
    window.addEventListener('resize', this.updateWindowDimensions);
    
  };
  updateWindowDimensions = () => {
    this.setState((prevState) => ({ width: window.innerWidth}));
    
  };
  render() {
    return (
      <Fade bottom delay={200} duration={600} distance={"55px"}>
        <div className="project" id={this.props.name}>
          <img src={'./images/' + this.props.img + '.png'} className={"project__image " + (this.state.displayInfo ? " is-targeted" : "")}/> 
            <div className={
              "project__info " + (this.state.expanded ? "is-showing" : "") + 
              (this.state.displayInfo ? " display-info" : "")
            }>
            <h1 className="project__info__name">{this.props.name}</h1>
              <p className="project__info__description">{this.props.description}</p>
              <a href={this.props.link} className="project__info__link" target="_blank"><p className="project__info__link--text">See more...</p></a>
            </div>
        </div>
      </Fade>
    )
  }
}

