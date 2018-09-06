/**
 * Created by wowucco on 06.09.18.
 */
import {request} from '../utils/request';

const REQUEST_TRACK_INFO = 'REQUEST_TRACK_INFO';
const RECEIVE_TRACK_INFO = 'RECEIVE_TRACK_INFO';

const ACTION_TRACK_INFO = '/track/info';

export function getTrackInfo(artist, track) {
  return dispatch => dispatch(fetchTrackInfo(artist, track));
}

function fetchTrackInfo(artist, track) {
  return dispatch => {
    dispatch(requestTrackInfo());
    return request({path: ACTION_TRACK_INFO, params: {artist: artist, track: track}})
      .then(response => response.json())
      .then(json => dispatch(receiveTrackInfo(json)));
  }
}

function requestTrackInfo() {
  return {
    type: REQUEST_TRACK_INFO
  }
}

function receiveTrackInfo(json) {
  return {
    type: RECEIVE_TRACK_INFO,
    payload: json
  }
}

const initialState = {
  track: {
    info: false,
    isFetching: false
  }
};

export function track(state = initialState.track, action)
{
  switch (action.type) {
    case REQUEST_TRACK_INFO:
      return {...state, isFetching: true};
    case RECEIVE_TRACK_INFO:
      return {...state, isFetching: false, info: action.payload.track};
    default:
      return state;
  }
}