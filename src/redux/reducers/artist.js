/**
 * Created by wowucco on 05.09.18.
 */
import {request} from '../utils/request';

const REQUEST_ARTIST_INFO = 'REQUEST_ARTIST_INFO';
const RECEIVE_ARTIST_INFO = 'RECEIVE_ARTIST_INFO';
const REQUEST_ARTIST_TOP_ALBUMS = 'REQUEST_ARTIST_TOP_ALBUMS';
const RECEIVE_ARTIST_TOP_ALBUMS = 'RECEIVE_ARTIST_TOP_ALBUMS';
const REQUEST_ARTIST_TOP_TRACKS = 'REQUEST_ARTIST_TOP_TRACKS';
const RECEIVE_ARTIST_TOP_TRACKS = 'RECEIVE_ARTIST_TOP_TRACKS';

const ACTION_ARTIST_INFO = '/artist/info';
const ACTION_ARTIST_TOP_ALBUMS = '/artist/top-albums';
const ACTION_ARTIST_TOP_TRACKS = '/artist/top-tracks';

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

export function getArtistTopAlbums(name) {
  return dispatch => dispatch(fetchArtistTopAlbums(name));
}

function fetchArtistTopAlbums(name) {
  return dispatch => {
    dispatch(requestArtistTopAlbums());
    return request({path: ACTION_ARTIST_TOP_ALBUMS, params: {artist: name}})
      .then(response => response.json())
      .then(json => dispatch(receiveArtistTopAlbums(json)));
  }
}

function requestArtistTopAlbums() {
  return {
    type: REQUEST_ARTIST_TOP_ALBUMS
  }
}

function receiveArtistTopAlbums(json) {
  return {
    type: RECEIVE_ARTIST_TOP_ALBUMS,
    payload: json
  }
}

export function getArtistTopTracks(name) {
  return dispatch => dispatch(fetchArtistTopTracks(name));
}

function fetchArtistTopTracks(name) {
  return dispatch => {
    dispatch(requestArtistTopTracks());
    return request({path: ACTION_ARTIST_TOP_TRACKS, params: {artist: name}})
      .then(response => response.json())
      .then(json => dispatch(receiveArtistTopTracks(json)));
  }
}

function requestArtistTopTracks() {
  return {
    type: REQUEST_ARTIST_TOP_TRACKS
  }
}

function receiveArtistTopTracks(json) {
  return {
    type: RECEIVE_ARTIST_TOP_TRACKS,
    payload: json
  }
}

const initialState = {
  artist: {
    info: false,
    isFetching: false,
    topAlbums: {
      list: false,
      isFetching: false
    },
    topTracks: {
      list: false,
      isFetching: false
    }
  }
};

export function artist(state = initialState.artist, action)
{
  switch (action.type) {
    case REQUEST_ARTIST_INFO:
      return {...state, isFetching: true};
    case RECEIVE_ARTIST_INFO:
      return {...state, isFetching: false, info: action.payload.artist};
    case REQUEST_ARTIST_TOP_ALBUMS:
      return {...state, topAlbums: {...state.topAlbums, isFetching: true}};
    case RECEIVE_ARTIST_TOP_ALBUMS:
      return {...state, topAlbums: {isFetching: false, list: action.payload.topalbums.album}};
    case REQUEST_ARTIST_TOP_TRACKS:
      return {...state, topTracks: {...state.topTracks, isFetching: true}};
    case RECEIVE_ARTIST_TOP_TRACKS:
      return {...state, topTracks: {isFetching: false, list: action.payload.toptracks.track}};
    default:
      return state;
  }
}