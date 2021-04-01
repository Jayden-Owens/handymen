import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import NavBar from './components/shared/NavBar';
import Handymens from './components/handymens/Handymens';
import Reviews from './components/shared/Reviews';
import Services from './components/services/Services';
import Comments from './components/comments/Comments';

const App = () => (
  <>
    <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/handymen" component={Handymens}/>
        <Route exact path="/reviews" component={Reviews}/>
        <Route exact path="/handymen/:id/services" component={Services} />
        <Route exact path="/services/:id/comments" component={Comments} />
        <Route component={NoMatch}/>
      </Switch>
  </>
)

export default App;
