import {TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH} from "../../constants/ActionTypes";
import {
  SET_PATH_NAME
} from "../../constants/Settings";

const initialSettings = {
  navCollapsed: true,
  pathname: '',
  width: 1367,
};

const settings = (state = initialSettings, action) => {
  switch (action.type) {
    case TOGGLE_COLLAPSED_NAV:
      return {
        ...state,
        navCollapsed: action.navCollapsed
      };
    case SET_PATH_NAME:
      return {
        ...state,
        pathname: action.pathname
      };
    case WINDOW_WIDTH:
      return {
        ...state,
        width: action.width,
      };
    default:
      return state;
  }
};

export default settings;
