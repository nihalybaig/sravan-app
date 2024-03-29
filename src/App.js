import React from 'react';
import './App.css';
import Home from './components/Home';
import ResultPage from './components/ResultPage';
import store from './react/store.js';
import { Provider } from "react-redux";
import { Router, Route } from 'react-router-dom';
import history from './history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/result-page" component={ResultPage} />
      </div>
    </Router>
    </Provider>
  );
}

export default App;