import React from "react";
import {VideoProps} from "./types";

export default function FacebookVideo(props: VideoProps) {
  return (
    <iframe
      src={props.viewVideoItem.finalUrl}
      title={props.viewVideoItem.title}
      className="embed-responsive-item"
    />
  );
}
