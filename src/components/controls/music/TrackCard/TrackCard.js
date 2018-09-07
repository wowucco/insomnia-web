/**
 * Created by wowucco on 07.09.18.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './index.css';

class TrackCard extends Component {
  render() {
    const {
      name: track,
      artist: {
        name: artist
      },
      album: {
        title: album = '',
        image: [
          ,,{
            '#text': image = false
          } = {}
        ] = []
      } = {}
    } = this.props.track;

    return (
      <div className="track-card">
        <div className="track-image">
          {image && <img src={image}/>}
        </div>
        <div className="track-info">
          <p>{track}</p>
          <p>{album}</p>
          <p>{artist}</p>
          <Link to={`/music/track/${artist}/${album}`}>read more</Link>
        </div>
      </div>
    )
  }
}

export default TrackCard;