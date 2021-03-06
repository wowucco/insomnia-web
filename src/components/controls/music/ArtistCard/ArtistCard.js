/**
 * Created by wowucco on 05.09.18.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './index.css';

class ArtistCard extends Component {
  render() {
    const {name, bio: {summary}, image: [,,, {'#text': image}]} = this.props.artist;
    return (
      <div className="artist-card">
        <div className="artist-image">
          <img src={image}/>
        </div>
        <div className="artist-info">
          <p>{name}</p>
          <span>{summary.replace(/<a[\w+\W+]{2,}<\/a>/gm, ' ') + '...'}</span>
          <Link to={`/music/band/${name}`}>read more</Link>
        </div>
      </div>
    )
  }
}

export default ArtistCard;