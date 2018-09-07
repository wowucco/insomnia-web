/**
 * Created by wowucco on 04.09.18.
 */
import React, {Component} from 'react';

import './index.css';

class ArtistSimpleCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    if (this.props.onClick) {
      this.props.onClick(name);
    }
  }

  render() {
    const {name, image: [,,,{'#text':url}]} = this.props.info;

    return (
      <div className="artist-simple-card" onClick={() => this.handleClick(name)}>
        <img src={url} alt={name}/>
        <span>{name}</span>
      </div>
    )
  }
}

export default ArtistSimpleCard;