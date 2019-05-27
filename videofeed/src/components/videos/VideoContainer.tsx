import React from "react";
import numeral from "numeral";
import {VideoSources} from "../../store/videos/types";
import {VideoProps} from "./types";
import IframeVideo from "./IframeVideo";
import GenericVideo from "./GenericVideo";
import noDataFound from "./noDataFound.png";

export default function VideoContainer(props: VideoProps) {
  return (
    <div className="row mb-5 justify-content-center">
      <article className="VideoContainer card col-sm-10 pl-0 pr-0">
        <div className="card-body pl-0 pr-0 pb-0">
          {props.viewVideoItem.dataMissing ? (
            <div className="row justify-content-center">
              <img
                className="img-fluid p-5"
                src={noDataFound}
                alt="Data is missing"
              />
            </div>
          ) : (
            <>
              <div className="row justify-content-between">
                <h6 className="videoTitle ml-5">{props.viewVideoItem.title}</h6>
                <span className="mr-5">
                  {numeral(props.viewVideoItem.views)
                    .format("0.0a")
                    .toUpperCase()}{" "}
                  views
                </span>
              </div>
              <div className="embed-responsive embed-responsive-16by9 mt-3">
                {(props.viewVideoItem.source === VideoSources.facebook ||
                  props.viewVideoItem.source === VideoSources.youtube) && (
                  <IframeVideo viewVideoItem={props.viewVideoItem} />
                )}
                {props.viewVideoItem.source === VideoSources.url && (
                  <GenericVideo viewVideoItem={props.viewVideoItem} />
                )}
              </div>
            </>
          )}
        </div>
      </article>
    </div>
  );
}
