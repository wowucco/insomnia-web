import {combineReducers} from 'redux';

import chart from './chart';
import {artist} from './artist';
import {track} from './track';
import {album} from './album';

export default combineReducers({
  chart,
  artist,
  album,
  track
});