/**
 * Created by wowucco on 31.08.18.
 */
import React, {Component} from 'react';
import {Route} from "react-router-dom";

import NotFound from '../../../screens/NotFound';
import './index.css';
import Header from "../../../controls/music/Header/Header";

class Home extends Component {
  render() {
    return (
      <div id="playrock">
        <Header/>
        <Route path="/music/test" component={NotFound}/>
      </div>
    )
  }
}

export default Home;