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
                <img src={item.image[2]['#text']} alt={item.name}/>
                {item.name}
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