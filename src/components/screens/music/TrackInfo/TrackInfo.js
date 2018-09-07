/**
 * Created by wowucco on 07.09.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import './index.css';

class TrackInfo extends Component {
  render() {
    const {match: {params: {artist, track}}} = this.props;
    console.log(artist);
    console.log(track);

    return (
      <div id="artist-page">
        Track info
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(TrackInfo);