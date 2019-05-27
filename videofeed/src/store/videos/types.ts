export enum VideoSources {
  facebook = "facebook",
  youtube = "youtube",
  url = "url"
}

export interface VideoItem {
  title?: string;
  source?: VideoSources;
  videoId?: string;
  userName?: string;
  url?: string;
  views?: number;
}

export type ViewVideoItem = VideoItem & {
  dataMissing?: boolean;
  finalUrl?: string;
};

export interface VideosState {
  source?: VideoSources;
  viewVideoItems?: ViewVideoItem[];
  errorMessage: string;
}

export const SET_SOURCE = "SET_SOURCE";
interface SetSourceAction {
  type: typeof SET_SOURCE;
  source?: VideoSources;
}

export const VIDEO_FEED_REQUEST_START = "VIDEO_FEED_REQUEST_START";
interface VideoFeedRequestStartAction {
  type: typeof VIDEO_FEED_REQUEST_START;
}

export const VIDEO_FEED_REQUEST_SUCCESS = "VIDEO_FEED_REQUEST_SUCCESS";
interface VideoFeedRequestSuccessAction {
  type: typeof VIDEO_FEED_REQUEST_SUCCESS;
  data: VideoItem[];
}
export const VIDEO_FEED_REQUEST_FAILURE = "VIDEO_FEED_REQUEST_FAILURE";
interface VideoFeedRequestFailAction {
  type: typeof VIDEO_FEED_REQUEST_FAILURE;
  errorMessage: string;
}

export type VideoStateActionTypes =
  | VideoFeedRequestStartAction
  | VideoFeedRequestSuccessAction
  | VideoFeedRequestFailAction
  | SetSourceAction;
