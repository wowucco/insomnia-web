/**
 * Created by wowucco on 06.09.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import './index.css';

class ArtistInfo extends Component {
  render() {
    return (
      <div id="artist-page">
        test
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(ArtistInfo);