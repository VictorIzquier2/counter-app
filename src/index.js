import React from 'react';
import ReactDom from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './assets/css/index.css';

const divRoot = document.querySelector('#root');

ReactDom.render(<PrimeraApp />, divRoot);