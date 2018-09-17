/**
 * Created by wowucco on 06.09.18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getArtistInfo, getArtistTopAlbums, getArtistTopTracks} from '../../../../redux/reducers/artist';
import './index.css';
import SimilarSimpleCard from "../../../controls/music/SimilarSimpleCard/SimilarSimpleCard";
import TracksTile from "../../../controls/music/TracksTile/TracksTile";

class ArtistInfo extends Component {

  componentDidMount() {
    const {artist: existingArtist, match: {params: {artist: requestedArtistName}}} = this.props;

    if (existingArtist.info.name !== requestedArtistName) {
      this.props.dispatch(getArtistInfo(requestedArtistName));
    }

    this.props.dispatch(getArtistTopAlbums(requestedArtistName));
    this.props.dispatch(getArtistTopTracks(requestedArtistName));
  }

  componentWillReceiveProps(nextProps) {
    const {artist: {isFetching, info: {name}}} = this.props;
    const {match: {params: {artist: requestedArtistName}}} = nextProps;

    if (!isFetching && name !== requestedArtistName) {
      this.props.dispatch(getArtistInfo(requestedArtistName));
      this.props.dispatch(getArtistTopAlbums(requestedArtistName));
      this.props.dispatch(getArtistTopTracks(requestedArtistName));
    }
  }

  render() {
    const {artist: {isFetching, info, topAlbums, topTracks}} = this.props;
    return (
      <div id="artist-page">
        {(!isFetching && info) ?
          <div>

            <header>
              <img src={info.image[2]['#text']}/>
              <h3>{info.name}</h3>
            </header>

            <div className="artist-info">

              <div className="tags">
                <div>
                  {info.tags.tag.map((item, index) => {
                    return <div key={index}>{item.name}</div>
                  })}
                </div>
              </div>

              <div className="bio">
                <h4>Bio</h4>
                <span>{info.bio.content.replace(/<a[\w+\W+]{2,}<\/a>/gm, '')}</span>
              </div>

              <div className="similar">
                {info.similar.artist.map((item, index) => {
                  return <SimilarSimpleCard key={index} name={item.name} image={item.image[2]['#text']}/>
                })}
              </div>

              {
                !topAlbums.isFetching && topAlbums.list ?
                  <div className="top-albums">
                    top-albums
                  </div> :
                  <span>Loading</span>
              }

              <div className="top-tracks">
                <TracksTile topTracks={topTracks}/>
              </div>


            </div>

          </div>
          : <span>Loading</span>
        }

      </div>
    )
  }
}

function mapStateToProps(state) {
  const {artist} = state;
  return {
    artist: artist
  }
}

export default connect(mapStateToProps)(ArtistInfo);