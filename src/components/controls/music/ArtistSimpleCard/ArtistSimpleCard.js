/**
 * Created by wowucco on 04.09.18.
 */
import React, {Component} from 'react';

import './index.css';

class ArtistSimpleCard extends Component {
  render() {
    const {name, image: [,,,{'#text':url}]} = this.props.info;

    return (
      <div className="simple-card">
        <img src={url} alt={name}/>
        {name}
      </div>
    )
  }
}

export default ArtistSimpleCard;