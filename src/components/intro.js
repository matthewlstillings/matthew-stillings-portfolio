import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import SocialMedia from './social-media';

export default class Intro extends Component {
  state = {
    show: null
  };
  delayLoad = () => {
    let hasFade = document.getElementsByClassName('has-fade');
    for (var i = 0; hasFade.length > i; i++) {
      let element = hasFade[i];
      let timer = i;
      setTimeout(()=>{
        element.classList.add('loaded');
      }, i * 450)
    }
  }
  componentDidMount = () => {
    //this.delayLoad();
  }
  
  render() {
    return (
      <div className="intro-bar">
        <div className="intro-bar__container"> 

          <Fade bottom duration={1000} distance={"50px"}>
            <h1 className="intro-bar__hello has-fade">
              Hello,
            </h1>
          </Fade>

          <Fade bottom duration={1000} distance={"50px"} delay={400}>
            <p className="intro-bar__description has-fade">
            I'm Matthew Stillings,
            a <span className="emphasis is-green">Frontend Developer</span>/Biologist and
            recent Midwest transplant to New York City. 
            I've spent the last three years getting my Bachelor's in Biology 
            and the last year learning Frontend Development.
            </p>
          </Fade>

          <Fade bottom duration={800} distance={"50px"} delay={800}>
            <p className="intro-bar__description has-fade">
              I began to code to deal with stress from school. Starting with the basics, <span className="emphasis is-green">HTML5</span> / <span className="emphasis is-green">CSS3</span>. 
              Before I knew it I fell in love with coding and started breaking into <span className="emphasis is-green">Js </span> and <span className="emphasis is-green">Jquery 
              </span>. More recently I've been learning the framework <span className="emphasis is-green">React.js </span> using <span className="emphasis is-green">Node.js</span>, <span className="emphasis is-green">Yarn</span>, and <span className="emphasis is-green">Webpack.
               </span> I made the decision to finish out my degree in Biology but continue with my new 
              passion and build a career out of it.
            </p>
          </Fade>

          <Fade bottom duration={1000} distance={"50px"} delay={1200}>
            <p className="intro-bar__description has-fade">
              If you have the time, <span className="emphasis is-green">check out</span> some of my projects below.
            </p>
          </Fade>
        </div>
      </div>
    );
  }
}
