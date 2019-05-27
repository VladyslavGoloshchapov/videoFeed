import React from "react";
import _ from "lodash";
import {VideoSources} from "../../store/videos/types";
import {VideosProps} from "./types";

export default function SourceSelector(props: VideosProps) {
  return (
    <form>
      <div className="form-group row justify-content-center">
        <label htmlFor="videoType" className="col-sm-5 col-form-label p-0">
          Select video type
        </label>
        <div className="col-sm-5 p-0">
          <select
            id="videoType"
            className="form-control"
            value={props.source}
            onChange={e => {
              let videoSource;
              if (e.target.value === VideoSources.facebook) {
                videoSource = VideoSources.facebook;
              } else if (e.target.value === VideoSources.youtube) {
                videoSource = VideoSources.youtube;
              } else if (e.target.value === VideoSources.url) {
                videoSource = VideoSources.url;
              } else {
                videoSource = undefined;
              }
              props.setSource(videoSource);
            }}
          >
            <option>All Videos</option>
            {_.map(VideoSources, source => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
}
