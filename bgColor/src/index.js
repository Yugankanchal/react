import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const username = 'yugank anchal'

const anotherUser = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'welcome to google ', username
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  anotherUser
);
