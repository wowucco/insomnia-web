/**
 * Created by wowucco on 06.09.18.
 */
import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import TrackSimpleCard from "../TrackSimpleCard";
import TrackCard from "../TrackCard";

class TracksList extends Component {
  constructor(props) {
    super(props);
    this.handleTrackInfo = this.handleTrackInfo.bind(this);
  }

  handleTrackInfo(random) {
    const {name: track, artist: {name: artist}} = random;
    if (this.props.trackInfo) {
      this.props.trackInfo(artist, track);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {track: {info, isFetching}, list:{tracks: {track = []}}} = nextProps;
    {!info && !isFetching && track.length > 0 && this.handleTrackInfo(track[Math.floor((Math.random() * track.length))])}
  }

  render() {
    const {isFetching = true, tracks: {track: list = [], '@attr': attr = {}}} = this.props.list;
    const track =  this.props.track.info;
    const sliderSettings = {
      dots: false,
      /*autoplay: true,
       autoplaySpeed: 6000,*/
      speed: 500,
      pauseOnHover: true,
      slidesToShow: 8,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        }
      ]
    };

    return (
      <div className="playrock-artists-list">
        {track && <TrackCard track={track} />}
        <Slider {...sliderSettings}>
          {list.map((track, index) => {
            return <TrackSimpleCard key={index} info={track} onClick={this.props.trackInfo}/>
          })}
        </Slider>
      </div>
    )
  }
}

export default TracksList;