import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import Videos from "../../components/videos";
import {VideoSources} from "../../store/videos/types";
import {fetchVideos, setSource} from "../../store/videos/actions";
import {AppState} from "../../store/rootReducer";

const mapStateToProps = (state: AppState) => state.videos;
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {
    loadData: () => {
      dispatch(fetchVideos());
    },
    setSource: (source?: VideoSources) => {
      dispatch(setSource(source));
      dispatch(fetchVideos());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Videos);
