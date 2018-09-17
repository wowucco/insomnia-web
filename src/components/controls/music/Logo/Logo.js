/**
 * Created by wowucco on 04.09.18.
 */
import React, {Component} from 'react';

import './index.css';

class Logo extends Component {
  render() {
    const LOGO = 'insomnia';
    return (
      <div className="playrock-logo">
        {LOGO.toUpperCase()}
      </div>
    )
  }
}

export default Logo;