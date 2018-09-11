import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './components/portfolio';
import './styles/styles.scss';

window.onbeforeunload = function() {window.scrollTo(0,0);}

ReactDOM.render(<Portfolio />, document.getElementById('react-root'));
