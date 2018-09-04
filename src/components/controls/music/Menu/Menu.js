/**
 * Created by wowucco on 03.09.18.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

import './index.css';
import BurgerButton from "../../BurgerButton/BurgerButton";
import Logo from "../Logo/Logo";


class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.state = {
      isOpen: false
    };
  }
  handleMenuOpen() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <div>
        <BurgerButton onClick={this.handleMenuOpen}/>
        <div id="playrock-menu" className={classNames(this.state.isOpen ? 'open' : 'hidden')} >
          <div className="playrock-menu-header">
            <BurgerButton onClick={this.handleMenuOpen}/>
            <Logo/>
          </div>
          <div className="playrock-menu-body">
            <Link to="/music/test" onClick={this.handleMenuOpen}>Charts</Link>
            <Link to="/music" onClick={this.handleMenuOpen}>Music</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;