import _ from "lodash";
import {
  VIDEO_FEED_REQUEST_START,
  VIDEO_FEED_REQUEST_SUCCESS,
  VIDEO_FEED_REQUEST_FAILURE,
  SET_SOURCE,
  VideoStateActionTypes,
  VideosState,
  VideoSources,
  ViewVideoItem,
  VideoItem
} from "./types";

function getTransformedVideoItem(videoItem: VideoItem): ViewVideoItem {
  if (
    _.isUndefined(videoItem.title) ||
    _.isUndefined(videoItem.source) ||
    _.isUndefined(videoItem.views)
  ) {
    return {
      ...videoItem,
      dataMissing: true
    };
  }
  if (videoItem.source === VideoSources.url) {
    if (_.isUndefined(videoItem.url)) {
      return {
        ...videoItem,
        dataMissing: true
      };
    }
    return {...videoItem, finalUrl: videoItem.url};
  } else if (videoItem.source === VideoSources.youtube) {
    if (_.isUndefined(videoItem.videoId)) {
      return {
        ...videoItem,
        dataMissing: true
      };
    }
    return {
      ...videoItem,
      finalUrl: `https://www.youtube.com/embed/${videoItem.videoId}`
    };
  } else if (videoItem.source === VideoSources.facebook) {
    if (_.isUndefined(videoItem.videoId) || _.isUndefined(videoItem.userName)) {
      return {
        ...videoItem,
        dataMissing: true
      };
    }
    return {
      ...videoItem,
      finalUrl: `https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F${
        videoItem.userName
      }%2Fvideos%2F${videoItem.videoId}`
    };
  } else {
    return videoItem;
  }
}

const defaultVideosState: VideosState = {
  source: undefined,
  errorMessage: "",
  viewVideoItems: []
};

export default function videos(
  state = defaultVideosState,
  action: VideoStateActionTypes
) {
  switch (action.type) {
    case SET_SOURCE: {
      return {...state, source: action.source};
    }
    case VIDEO_FEED_REQUEST_START: {
      return {...state, errorMessage: ""};
    }
    case VIDEO_FEED_REQUEST_SUCCESS: {
      return {
        ...state,
        viewVideoItems: _.map(action.data, getTransformedVideoItem)
      };
    }
    case VIDEO_FEED_REQUEST_FAILURE: {
      return {
        ...state,
        errorMessage: action.errorMessage
      };
    }
    default: {
      return state;
    }
  }
}
