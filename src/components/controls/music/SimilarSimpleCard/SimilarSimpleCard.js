/**
 * Created by wowucco on 17.09.18.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './index.css';

class SimilarSimpleCard extends Component {
  render() {
    const {name, image} = this.props;
    return (
      <div className="similar-simple-card">
      <Link to={`/music/band/${name}`}>

          <img src={image} alt={name}/>
          <p>{name}</p>

      </Link>
      </div>
    )
  }
}

export default SimilarSimpleCard;