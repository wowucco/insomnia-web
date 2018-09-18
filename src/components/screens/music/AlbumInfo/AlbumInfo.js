/**
 * Created by wowucco on 18.09.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getAlbumInfo} from '../../../../redux/reducers/album';
import './index.css';
import TracksOfAlbum from "../../../controls/music/TracksOfAlbum/TracksOfAlbum";

class AlbumInfo extends Component {
  componentDidMount() {
    const {match: {params: {artist, album}}} = this.props;
    this.props.dispatch(getAlbumInfo(artist, album));
  }

  renderPage(info) {
    const {
      artist,
      name: album,
      wiki: {content = ''} = {},
      tags: {tag: tags},
      tracks: {track: tracks},
      image: [,,,{'#text':image}]
    } = info;

    return (
      <div>
        <div className="general-info">
          <div className="image">
            <img src={image}/>
            <div className="tags">
              <div>
                {tags.map((item, index) => {
                  return <div key={index}>{item.name}</div>
                })}
              </div>
            </div>
          </div>
          <div className="info">
            <h4>Album: {album}</h4>
            <h5>Band: {artist}</h5>
            <p>{content.replace(/<a[\w+\W+]{2,}<\/a>/gm, '')}</p>
          </div>
        </div>
        <div>
          <TracksOfAlbum tracks={tracks}/>
        </div>
      </div>
    )
  }

  render() {
    const {info, isFetching} = this.props.album;
    return (
      <div id="album-page">
        {
          !isFetching && info
            ? this.renderPage(info)
            : <div>Loading</div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {album} = state;
  return {
    album
  }
}

export default connect(mapStateToProps)(AlbumInfo);