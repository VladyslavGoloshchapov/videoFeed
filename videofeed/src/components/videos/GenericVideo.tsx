import React from "react";
import {VideoProps} from "./types";

export default function GenericVideo(props: VideoProps) {
  return (
    <video controls className="embed-responsive-item">
      <source src={props.viewVideoItem.finalUrl} />
    </video>
  );
}
