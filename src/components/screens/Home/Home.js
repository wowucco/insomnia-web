/**
 * Created by wowucco on 31.08.18.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './index.scss';

class Home extends Component {
  render() {
    return (
      <div>
        Home
        <ul>
          <li><Link to="/music">Music</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/test">Bad Url</Link></li>
        </ul>
      </div>
    )
  }
}

export default Home;