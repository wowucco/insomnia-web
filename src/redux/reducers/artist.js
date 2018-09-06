/**
 * Created by wowucco on 05.09.18.
 */
import fetch from 'cross-fetch';

const REQUEST_ARTIST_INFO = 'REQUEST_ARTIST_INFO';
const RECEIVE_ARTIST_INFO = 'RECEIVE_ARTIST_INFO';

export function getArtistInfo(name) {
  return dispatch => dispatch(fetchArtistInfo(name));
}

function fetchArtistInfo(name) {
  return dispatch => {
    dispatch(requestArtistInfo());
    return fetch(`http://localhost:8080/artist/info?artist=${name}`)
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