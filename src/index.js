import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Menu from './Menu'

const doClose = () => {
  console.log('closing');
}

const cats =
  [
    {
      id: 'f001',
      name: ' Fruit',
      children: [
        {
          id: 'apple1',
          name: ' Apple'
        },
        {
          id: 'pear1',
          name: 'Pear'
        },
        {
          id: 'banana1',
          name: 'Banana'
        },
        {
          id: 'peach1',
          name: 'Peach'
        }
      ]
    },
    {
      id: 'family1',
      name: 'Family',
      children: [
        {
          id: 'javed1',
          name: 'Javed John'
        },
        {
          id: 'farah1',
          name: 'Farah Christine'
        },
        {
          id: 'nazia1',
          name: 'Nazia1'
        }
      ]
    }
  ];

const test = {
  a: 1,
  b: 2
}

ReactDOM.render(<Menu categories={cats} {...test} onClose={doClose}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
