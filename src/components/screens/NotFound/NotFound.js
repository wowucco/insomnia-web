/**
 * Created by wowucco on 31.08.18.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import wait from './not-found.jpg';
import './index.scss';

class NotFound extends Component {
  render() {
    return (
      <div className='container' id='not-found'>
        <img src={wait} alt='loading...' />
        <div className='row'>
          <div className='col-md-12'>
            Page not found. Go back to <Link to='/'>Home</Link> page?
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound;