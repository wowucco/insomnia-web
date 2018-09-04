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
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    return (
      <div className="playrock-artists-list">
        <Slider {...settings}>
          {list.map((item, index) => {
            //return <div className="item" key={index} onClick={console.log(item)}>{item.name}</div>
            <Card key={index} info={item}/>
          })}
        </Slider>
      </div>
    )
  }
}

export default ArtistsList;