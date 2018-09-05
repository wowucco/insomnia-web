import {combineReducers} from 'redux';

import chart from './chart';
import {artist} from './artist';

export default combineReducers({
  chart,
  artist
});