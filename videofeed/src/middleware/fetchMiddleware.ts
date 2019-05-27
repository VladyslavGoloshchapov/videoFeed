import _ from "lodash";
import {Middleware, MiddlewareAPI, Dispatch} from "redux";
import Assert from "../utils/Assert";
import {AppState} from "../store/rootReducer";

interface FetchAction {
  types: string[];
  method?: string;
  basicToken?: string;
  getURL: (state: AppState) => string;
  shouldPerformRequest?: (state: AppState) => boolean;
  payload?: Object;
}
const fetchMiddleware: Middleware<Dispatch, AppState> = ({
  dispatch,
  getState
}: MiddlewareAPI) => {
  return (next: Dispatch) => (action: FetchAction) => {
    const {
      types,
      getURL,
      basicToken,
      shouldPerformRequest,
      payload = {},
      method = "GET"
    } = action;

    if (!_.isArray(types)) {
      // other action type: pass it on
      return next(<any>action);
    }

    Assert.isTrue(types.length === 3, "Invalid types length");
    types.forEach(type => {
      Assert.isNotEmptyString(type, "Invalid type");
    });
    Assert.isFunction(getURL, 'Invalid "getURL" type');
    Assert.isTrue(
      _.isUndefined(shouldPerformRequest) || _.isFunction(shouldPerformRequest),
      'Invalid "getURL" type'
    );

    if (
      _.isFunction(shouldPerformRequest) &&
      !shouldPerformRequest(getState())
    ) {
      return;
    }

    const [requestType, successType, failureType] = types;

    dispatch({type: requestType});

    let options: {
      method: string;
      body?: string;
      headers: {[propName: string]: string};
    } = {
      method,
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
    };
    if (method === "POST" || method === "PUT") {
      options.body = JSON.stringify(payload);
    }
    if (_.isString(basicToken)) {
      options.headers["Authorization"] = `Basic ${basicToken}`;
    }
    return fetch(getURL(getState()), options)
      .then(response => {
        return response.text().then(text => {
          return text.length > 0
            ? {
                data: JSON.parse(text),
                isOk: response.ok
              }
            : {
                data: {},
                isOk: response.ok
              };
        });
      })
      .then(parsedResponse => {
        if (parsedResponse.isOk) {
          dispatch({type: successType, data: parsedResponse.data});
          return true;
        } else {
          dispatch({
            type: failureType,
            errorMessage: JSON.stringify(parsedResponse)
          });
        }
        return false;
      })
      .catch((error: {message: string}) => {
        dispatch({type: failureType, errorMessage: error.message});
        return false;
      });
  };
};
export default fetchMiddleware;
