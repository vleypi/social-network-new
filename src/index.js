import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './state/state'

export const renderTree = (state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.state} store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(renderTree);
reportWebVitals();
renderTree(store.state)