import React, {Component} from 'react';
import Intro from './intro';
import ContentContainer from './content-container';
import Footer from './footer';
import { SocialMedia } from './social-media';

export default class Portfolio extends React.Component {
  state = {
    linkDisplay: false
  }
  displayLinks = () => {
    this.setState(()=>({linkDisplay: true}));
  }
  render() {
    return (
      <div className="portfolio-page">
        <SocialMedia 
          linkDisplay={this.state.linkDisplay}
          displayLinks={this.displayLinks}
        />
        <Intro />
        <ContentContainer />
        <Footer />
      </div>
    )
  };
}

