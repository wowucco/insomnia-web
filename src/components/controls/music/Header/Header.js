/**
 * Created by wowucco on 03.09.18.
 */
import React, {Component} from 'react';
import MainMenu from '../Menu';

import './index.css';
import Logo from "../Logo/Logo";

class Header extends Component {
  render() {
    return (
      <div id="pr-header">
        <MainMenu/>
        <Logo/>
      </div>
    )
  }
}

export default Header;