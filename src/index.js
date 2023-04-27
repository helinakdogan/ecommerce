import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //App is inside of Provider because we want to use redux for all pages, so that props store
  <Provider store={store}>
    <App />
  </Provider>
);


