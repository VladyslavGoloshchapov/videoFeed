import _ from "lodash";
import {
  VIDEO_FEED_REQUEST_START,
  VIDEO_FEED_REQUEST_SUCCESS,
  VIDEO_FEED_REQUEST_FAILURE,
  SET_SOURCE,
  VideoSources
} from "./types";
import {AppState} from "../rootReducer";

export function fetchVideos() {
  return {
    types: [
      VIDEO_FEED_REQUEST_START,
      VIDEO_FEED_REQUEST_SUCCESS,
      VIDEO_FEED_REQUEST_FAILURE
    ],
    getURL: (state: AppState) =>
      `/data${_.isString(state.videos.source) ? "/" + state.videos.source : ""}`
  };
}
export function setSource(source?: VideoSources) {
  return {
    type: SET_SOURCE,
    source
  };
}
