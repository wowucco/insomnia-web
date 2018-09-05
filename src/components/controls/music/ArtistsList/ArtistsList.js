/**
 * Created by wowucco on 04.09.18.
 */
import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import Card from "../ArtistSimpleCard";

class ArtistsList extends Component {
  render() {
    const {isFetching = true, artists: {artist: list = [], '@attr': attr = {}}} = this.props.list;
    /*console.log(isFetching);
    console.log(list);
    console.log(attr);*/

    const settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 6000,
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
            infinite: true,
            dots: true
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
        <Slider {...settings}>
          {list.map((item, index) => {
            return <Card key={index} info={item}/>
          })}
        </Slider>
      </div>
    )
  }
}

export default ArtistsList;