import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello World!</h1>;
// ReactDOM renders elements into the /public/index.html and into the root id(div)
ReactDOM.render(element, document.getElementById('root'));