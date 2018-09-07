/**
 * Created by wowucco on 07.09.18.
 */
import React, {Component} from 'react';

import './index.css';

class TrackSimpleCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(artist, track) {
    if (this.props.onClick) {
      this.props.onClick(artist, track);
    }
  }

  render() {
    const {name: track, artist: {name: artist}, image: [,,,{'#text':url}]} = this.props.info;

    return (
      <div className="track-simple-card" onClick={() => this.handleClick(artist, track)}>
        <img src={url} alt={track}/>
        <span>{track}</span>
        <span>{artist}</span>
      </div>
    )
  }
}

export default TrackSimpleCard;