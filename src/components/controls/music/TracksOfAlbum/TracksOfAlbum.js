/**
 * Created by wowucco on 18.09.18.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {helper} from '../../../../helpers'
import './index.css';

class TracksOfAlbum extends Component {
  render() {
    return (
      <div className="tracks-list">
        {
          this.props.tracks.map((item, index) => {
            const {
              '@attr': {rank},
              name,
              duration,
              artist: {name: band}
            } = item;
            return (
              <div key={index} className="track">
                <div className="name">
                  <span>{`${rank}. `}</span>
                  <span>{name}</span>
                </div>
                <div className="navigation">
                  <span>{helper.timeFromSecToStr(duration)}</span>
                  <div>
                    <Link to={`/music/track/${band}/${name}`}><span className="info"></span></Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default TracksOfAlbum;