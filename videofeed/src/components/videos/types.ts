import {
  VideoSources,
  VideosState,
  ViewVideoItem
} from "../../store/videos/types";
interface VideosActions {
  loadData: () => void;
  setSource: (source?: VideoSources) => void;
}
export type VideosProps = VideosState & VideosActions;

export interface VideoProps {
  viewVideoItem: ViewVideoItem;
}
