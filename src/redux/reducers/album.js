/**
 * Created by wowucco on 18.09.18.
 */
import {request} from '../utils/request';

const REQUEST_ALBUM_INFO = 'REQUEST_ALBUM_INFO';
const RECEIVE_ALBUM_INFO = 'RECEIVE_ALBUM_INFO';

const ACTION_ALBUM_INFO = '/album/info';

export function getAlbumInfo(band, album) {
  return dispatch => dispatch(fetchAlbumInfo(band, album));
}

function fetchAlbumInfo(band, album) {
  return dispatch => {
    dispatch(requestAlbumInfo());
    return request({
      path: ACTION_ALBUM_INFO,
      params: {
        artist: band,
        album: album
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receiveAlbumInfo(json)));
  }
}

function requestAlbumInfo() {
  return {
    type: REQUEST_ALBUM_INFO
  }
}

function receiveAlbumInfo(json) {
  return {
    type: RECEIVE_ALBUM_INFO,
    payload: json
  }
}

const initialState = {
  album: {
    info: false,
    isFetching: false
  }
};

export function album(state = initialState.album, action) {
  switch (action.type) {
    case REQUEST_ALBUM_INFO:
      return {...state, isFetching: true};
    case RECEIVE_ALBUM_INFO:
      return {...state, isFetching: false, info: action.payload.album};
    default:
      return state;
  }
}