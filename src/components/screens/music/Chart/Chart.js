/**
 * Created by wowucco on 04.09.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getTopArtists, getTopTracks} from '../../../../redux/reducers/chart';
import './index.css';
import ArtistsList from "../../../controls/music/ArtistsList/ArtistsList";

class Chart extends Component {

  componentDidMount() {
    this.props.dispatch(getTopArtists());
    this.props.dispatch(getTopTracks());
  }

  render() {
    const {artists, tracks} = this.props;
    return (
      <div id="chart-page">
        <ArtistsList list={artists} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {artists, tracks} = state.chart.charts;
  return {
    artists: artists,
    tracks: tracks
  }
}

export default connect(mapStateToProps)(Chart);
//export default Chart;