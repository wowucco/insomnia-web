/**
 * Created by wowucco on 17.09.18.
 */
import React, {Component} from 'react';

import './index.css';

class AlbumsTile extends Component {
  render() {
    const {isFetching, list} = this.props.topAlbums;
    return (
      <div className="albums-tile">
        {
          !isFetching && list
            ? list.map((item, index) =>
            <div className="album" key={index}>
              <div>
                <div className="image">
                  <img src={item.image[2]['#text']} alt={item.name}/>
                  <div className="ctrl-btn">
                    <span className="play"></span>
                    <span className="info"></span>
                  </div>
                </div>
                <div className="info">
                  {item.name}
                </div>
              </div>
            </div>
          )
            : <div>Loading</div>
        }
      </div>
    )
  }
}

export default AlbumsTile;