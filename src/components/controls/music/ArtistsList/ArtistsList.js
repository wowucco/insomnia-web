/**
 * Created by wowucco on 04.09.18.
 */
import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import ArtistSimpleCard from "../ArtistSimpleCard";
import ArtistCard from "../ArtistCard/ArtistCard";

class ArtistsList extends Component {
  render() {
    const {isFetching = true, artists: {artist: list = [], '@attr': attr = {}}} = this.props.list;
    const artist = this.props.artist.info ? this.props.artist.info : list[Math.floor(Math.random() * list.length)];
    const settings = {
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
            slidesToScroll: 4,
            infinite: true
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
        {JSON.stringify(artist) !== "{}" ? <ArtistCard artist={artist}/> : <div></div>}
        <Slider {...settings}>
          {list.map((artist, index) => {
            return <ArtistSimpleCard key={index} info={artist} onClick={this.props.artistInfo}/>
          })}
        </Slider>
      </div>
    )
  }
}

export default ArtistsList;