/**
 * Created by wowucco on 05.09.18.
 */
import {request} from '../utils/request';

const REQUEST_ARTIST_INFO = 'REQUEST_ARTIST_INFO';
const RECEIVE_ARTIST_INFO = 'RECEIVE_ARTIST_INFO';

const ACTION_ARTIST_INFO = '/artist/info';

export function getArtistInfo(name) {
  return dispatch => dispatch(fetchArtistInfo(name));
}

function fetchArtistInfo(name) {
  return dispatch => {
    dispatch(requestArtistInfo());
    return request({path: ACTION_ARTIST_INFO, params: {artist: name}})
      .then(response => response.json())
      .then(json => dispatch(receiveArtistInfo(json)));
  }
}

function requestArtistInfo() {
  return {
    type: REQUEST_ARTIST_INFO
  }
}

function receiveArtistInfo(json) {
  return {
    type: RECEIVE_ARTIST_INFO,
    payload: json
  }
}

const initialState = {
  artist: {
    info: false,
    isFetching: false
  }
};

export function artist(state = initialState.artist, action)
{
  switch (action.type) {
    case REQUEST_ARTIST_INFO:
      return {...state, isFetching: true};
    case RECEIVE_ARTIST_INFO:
      return {...state, isFetching: false, info: action.payload.artist};
    default:
      return state;
  }
}