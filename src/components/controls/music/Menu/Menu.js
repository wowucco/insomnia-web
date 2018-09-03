/**
 * Created by wowucco on 03.09.18.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './index.css';


class Menu extends Component {
  render() {
    return (
      <div>
        <div id="playrock-toggle-btn"></div>
        <div id="playrock-toggle-menu">
          <div>IMG</div>
          <Link to="/music/test">Charts</Link>
          <Link to="">Charts</Link>
          <Link to="">Charts</Link>
          <Link to="">Charts</Link>
          <Link to="">Charts</Link>

        </div>
      </div>

    )
  }
}

export default Menu;