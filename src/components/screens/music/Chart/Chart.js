/**
 * Created by wowucco on 04.09.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getTopArtists, getTopTracks} from '../../../../redux/reducers/chart';
import {getArtistInfo} from '../../../../redux/reducers/artist';
import {getTrackInfo} from '../../../../redux/reducers/track';
import './index.css';
import ArtistsList from "../../../controls/music/ArtistsList";
import TracksList from "../../../controls/music/TracksList";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.handleArtistInfo = this.handleArtistInfo.bind(this);
    this.handleTrackInfo = this.handleTrackInfo.bind(this);
  }

  handleArtistInfo(name) {
    this.props.dispatch(getArtistInfo(name));
  }

  handleTrackInfo(name) {
    this.props.dispatch(getTrackInfo(name));
  }

  componentWillMount() {
    this.props.dispatch(getTopArtists());
    this.props.dispatch(getTopTracks());
  }

  render() {
    const {artists, tracks, artist, track} = this.props;

    return (
      <div id="chart-page">
        <ArtistsList list={artists} artistInfo={this.handleArtistInfo} artist={artist} />
        <TracksList list={tracks} artistInfo={this.handleTrackInfo} track={track} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {chart:{charts: {artists, tracks}}, artist, track} = state;
  return {
    artists: artists,
    tracks: tracks,
    artist: artist,
    track: track
  }
}

export default connect(mapStateToProps)(Chart);