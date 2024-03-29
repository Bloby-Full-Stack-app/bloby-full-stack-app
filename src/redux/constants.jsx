// API Endpoints

export const API = process.env.REACT_APP_BASE_API_URL;

// Action consts
export const SET_AUTH = 'SET_AUTH';
export const AUTH_FAILED = 'AUTH_FAILED';
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';
export const GET_TRACKS_SUCCESS = 'GET_TRACKS_SUCCESS';
export const GET_TRACKS_FAIL = 'GET_TRACKS_FAIL';
export const GET_SINGLE_TRACK_SUCCESS = 'GET_SINGLE_TRACK_SUCCESS';
export const GET_SINGLE_TRACK_FAIL = 'GET_SINGLE_TRACK_FAIL';
export const POST_TRACKS_SUCCESS = 'POST_TRACKS_SUCCESS';
export const POST_TRACKS_FAIL = 'POST_TRACKS_FAIL';
export const UPLOAD_TRACKS_SUCCESS = 'POST_TRACKS_SUCCESS';
export const UPLOAD_TRACKS_FAIL = 'POST_TRACKS_FAIL';
export const UPDATE_TRACKS_SUCCESS = 'UPDATE_TRACKS_SUCCESS';
export const UPDATE_TRACKS_FAIL = 'UPDATE_TRACKS_FAIL';
export const DELETE_TRACKS_SUCCESS = 'DELETE_TRACKS_SUCCESS';
export const DELETE_TRACKS_FAIL = 'DELETE_TRACKS_FAIL';
export const GET_CURRENT_USER_PLAYLISTS_SUCCESS = 'GET_CURRENT_USER_PLAYLISTS_SUCCESS';
export const GET_CURRENT_USER_PLAYLISTS_FAIL = 'GET_CURRENT_USER_PLAYLISTS_FAIL';
export const POST_ADD_TRACK_TO_PLAYLIST_SUCCESS = 'POST_ADD_TRACK_TO_PLAYLIST_SUCCESS';
export const POST_ADD_TRACK_TO_PLAYLIST_FAIL = 'POST_ADD_TRACK_TO_PLAYLIST_FAIL';
export const POST_ADD_COMMENT_TO_PLAYLIST_SUCCESS = 'POST_ADD_COMMENT_TO_PLAYLIST_SUCCESS';
export const POST_ADD_COMMENT_TO_PLAYLIST_FAIL = 'POST_ADD_COMMENT_TO_PLAYLIST_FAIL';
export const LIKE_TRACK_SUCCESS = 'LIKE_TRACK_SUCCESS';
export const LIKE_TRACK_FAIL = 'LIKE_TRACK_FAIL';
export const REMOVE_TRACK_FROM_PLAYLIST_SUCCESS = 'REMOVE_TRACK_FROM_PLAYLIST_SUCCESS';
export const REMOVE_TRACK_FROM_PLAYLIST_FAIL = 'REMOVE_TRACK_FROM_PLAYLIST_FAIL';
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
export const ADD_EVENT_FAIL = 'ADD_EVENT_FAIL';
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS';
export const UPDATE_EVENT_FAIL = 'UPDATE_EVENT_FAIL';
export const GET_EVENT_SUCCESS = 'GET_EVENT_SUCCESS';
export const GET_EVENT_FAIL = 'GET_EVENT_FAIL';
export const ADD_EVENT_TO_FAVORITES_SUCCESS = 'ADD_EVENT_TO_FAVORITES_SUCCESS'
export const ADD_EVENT_TO_FAVORITES_FAIL = 'ADD_EVENT_TO_FAVORITES_FAIL'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'
export const ADD_PLAYLIST_SUCCESS = 'ADD_PLAYLIST_SUCCESS'
export const ADD_PLAYLIST_FAIL = 'ADD_PLAYLIST_FAIL'