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
      id: '123',
      name: ' 1-2-3',
      children: [
        {
          id: 'abc',
          name: ' a-b-c'
        },
        {
          id: 'def',
          name: ' d-e-f'
        }
      ]
    },
    {
      id: '456',
      name: ' 4-5-6',
      children: [
        {
          id: 'xyz',
          name: ' x-y-z'
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
