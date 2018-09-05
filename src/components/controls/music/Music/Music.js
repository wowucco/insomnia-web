/**
 * Created by wowucco on 04.09.18.
 */
import React, {Component} from 'react';
import {Route} from "react-router-dom";

import Home from '../../../screens/music/Home';
import Chart from '../../../screens/music/Chart';
import './index.css';
import Header from "../Header";

class Music extends Component {
  render() {
    return (
      <div id="playrock">
        <Header/>
        <Route exact path="/music" component={Home}/>
        <Route path="/music/chart" component={Chart}/>
      </div>
    )
  }
}

export default Music;