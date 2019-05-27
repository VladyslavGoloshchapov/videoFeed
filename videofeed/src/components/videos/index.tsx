import React from "react";
import _ from "lodash";
import {VideosProps} from "./types";
import SourceSelector from "./SourceSelector";
import VideoContainer from "./VideoContainer";
import "./index.scss";

class VideosPage extends React.Component<VideosProps> {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    return (
      <>
        <h1 className="pageTitle">VIDEO FEED</h1>
        <SourceSelector {...this.props} />
        {_.map(this.props.viewVideoItems, viewVideoItem => {
          return (
            <VideoContainer
              viewVideoItem={viewVideoItem}
              key={`${viewVideoItem.source}${viewVideoItem.title}${
                viewVideoItem.videoId
              }`}
            />
          );
        })}
      </>
    );
  }
}

export default VideosPage;
