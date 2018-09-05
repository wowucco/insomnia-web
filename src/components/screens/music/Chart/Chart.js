/**
 * Created by wowucco on 04.09.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getTopArtists, getTopTracks} from '../../../../redux/reducers/chart';
import {getArtistInfo} from '../../../../redux/reducers/artist';
import './index.css';
import ArtistsList from "../../../controls/music/ArtistsList/ArtistsList";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.handleArtistInfo = this.handleArtistInfo.bind(this);
  }

  handleArtistInfo(name) {
    this.props.dispatch(getArtistInfo(name));
  }

  componentDidMount() {
    this.props.dispatch(getTopArtists());
    this.props.dispatch(getTopTracks());
  }

  render() {
    const {artists, tracks, artist} = this.props;
    return (
      <div id="chart-page">
        <ArtistsList list={artists} artistInfo={this.handleArtistInfo} artist={artist} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {chart:{charts: {artists, tracks}}, artist} = state;
  return {
    artists: artists,
    tracks: tracks,
    artist: artist
  }
}

export default connect(mapStateToProps)(Chart);