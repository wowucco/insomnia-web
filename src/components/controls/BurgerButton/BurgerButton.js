/**
 * Created by wowucco on 04.09.18.
 */
import React, {Component} from 'react';

import './index.css';


class BurgerButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <div className="burger-button" onClick={this.handleClick}></div>
    )
  }
}

export default BurgerButton;