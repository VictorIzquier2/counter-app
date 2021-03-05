import React from 'react';
import ReactDom from 'react-dom';
//import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';
import './assets/css/index.css';

const divRoot = document.querySelector('#root');

//ReactDom.render(<CounterApp value={0}/>, divRoot);
ReactDom.render(<PrimeraApp saludo='Hola, soy Victor' />, divRoot);