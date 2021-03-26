import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import NavBar from './components/shared/NavBar';
import HandyMens from './components/handymens/Handymens'

const App = () => (
  <>
    <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/handymens" component={HandyMens}/>
        <Route component={NoMatch}/>
      </Switch>
  </>
)

export default App;
