/**
 * Created by wowucco on 04.09.18.
 */
import React, {Component} from 'react';
import {Route} from "react-router-dom";

import Home from '../../../screens/music/Home';
import Chart from '../../../screens/music/Chart';
import ArtistInfo from '../../../screens/music/ArtistInfo';
import AlbumInfo from '../../../screens/music/AlbumInfo';
import TrackInfo from '../../../screens/music/TrackInfo';
import './index.css';
import Header from "../Header";

class Music extends Component {
  render() {
    return (
      <div id="playrock">
        <Header/>
        <Route exact path="/music" component={Home}/>
        <Route path="/music/chart" component={Chart}/>
        <Route path="/music/band/:artist" component={ArtistInfo}/>
        <Route path="/music/album/:artist/:album" component={AlbumInfo}/>
        <Route path="/music/track/:artist/:track" component={TrackInfo}/>
      </div>
    )
  }
}

export default Music;