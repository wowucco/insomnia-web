/**
 * Created by wowucco on 31.08.18.
 */
import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from '../../screens/Home';
import Playrock from '../../screens/music/Home';
import NotFound from '../../screens/NotFound';

const Main = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/music" component={Playrock} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default Main;