import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Main from './pages/Main'
import NewsList from './pages/NewsList'
import NotFound from './pages/NotFound'
import Wrap from './pages/Wrapper'

const App = (props) => {
  return (
      <Router {...props}>
        <Route component={Wrap}>
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/:type' component={NewsList}/>
                <Route path='*'  component={NotFound}/>
            </Switch>
        </Route>
      </Router>
  );
}

export default App;
