/**
 * Created by wowucco on 30.08.18.
 */
import fetch from 'cross-fetch';
import {request} from '../utils/request';

const REQUEST_TOP_ARTISTS = 'REQUEST_TOP_ARTISTS';
const RECEIVE_TOP_ARTISTS = 'RECEIVE_TOP_ARTISTS';
const REQUEST_TOP_TRACKS = 'REQUEST_TOP_TRACKS';
const RECEIVE_TOP_TRACKS = 'RECEIVE_TOP_TRACKS';

const ACTION_CHART_TOP_ARTISTS = '/chart/top-artists';
const ACTION_CHART_TOP_TRACKS = '/chart/top-tracks';

export function getTopArtists() {
  return dispatch => dispatch(fetchTopArtists());
}

function fetchTopArtists() {
  return dispatch => {
    dispatch(requestTopArtist());

    return request({
      path: ACTION_CHART_TOP_ARTISTS,
      params: {
        page: 1,
        limit: 20
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receiveTopArtists(json)));
  }
}

function requestTopArtist() {
  return {
    type: REQUEST_TOP_ARTISTS
  }
}

function receiveTopArtists(json) {
  return {
    type: RECEIVE_TOP_ARTISTS,
    payload: json
  }
}

export function getTopTracks() {
  return dispatch => dispatch(fetchTopTracks());
}

function fetchTopTracks() {
  return dispatch => {
    dispatch(requestTopTracks());
    return request({
      path: ACTION_CHART_TOP_TRACKS,
      params: {
        page: 1,
        limit: 20
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receiveTopTracks(json)));
  }
}

function requestTopTracks() {
  return {
    type: REQUEST_TOP_TRACKS
  }
}

function receiveTopTracks(json) {
  return {
    type: RECEIVE_TOP_TRACKS,
    payload: json
  }
}

const initialState = {
  charts: {
    artists: {
      artists: {},
      isFetching: true
    },
    tracks: {
      tracks: [],
      isFetching: false
    }
  }
};

export default function(state = initialState, action)
{
  switch (action.type) {
    case REQUEST_TOP_ARTISTS:
      return {...state, charts: {...state.charts, artists: {...state.charts.artists, isFetching: true}}};
    case RECEIVE_TOP_ARTISTS:
      return {...state, charts: {...state.charts, artists: {artists: action.payload.artists, isFetching: false}}};
    case REQUEST_TOP_TRACKS:
      return {...state, charts: {...state.charts, tracks: {...state.charts.tracks, isFetching: true}}};
    case RECEIVE_TOP_TRACKS:
      return {...state, charts: {...state.charts, tracks: {tracks: action.payload.tracks, isFetching: false}}};
    default:
      return state;
  }
};