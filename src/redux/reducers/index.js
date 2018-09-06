import {combineReducers} from 'redux';

import chart from './chart';
import {artist} from './artist';
import {track} from './track';

export default combineReducers({
  chart,
  artist,
  track
});