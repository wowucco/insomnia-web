/**
 * Created by wowucco on 17.09.18.
 */
import React, {Component} from 'react';

import './index.css';

class TracksTile extends Component {
  render() {
    const {isFetching, list} = this.props.topTracks;
    return (
      <div className="tracks-tile">
        {
          !isFetching && list
            ? list.map((item, index) =>
                <div className="track" key={index}>
                  <div>
                    <div className="play">
                      <img src={item.image[1]['#text']} alt={item.name}/>
                    </div>
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

export default TracksTile;