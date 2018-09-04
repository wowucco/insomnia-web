/**
 * Created by wowucco on 04.09.18.
 */
import React, {Component} from 'react';

import './index.css';

class ArtistsList extends Component {
  render() {
    const {isFetching = true, artists: {artist: list = [], '@attr': attr = {}}} = this.props.list;
    console.log(isFetching);
    console.log(list);
    console.log(attr);
    return (
      <div className="playrock-artists-list">

      </div>
    )
  }
}

export default ArtistsList;