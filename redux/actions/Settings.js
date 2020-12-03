import {TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH} from "../../constants/ActionTypes";

export function toggleCollapsedSideNav(navCollapsed) {
  return {type: TOGGLE_COLLAPSED_NAV, navCollapsed};
}

export function updateWindowWidth(width) {
  return {type: WINDOW_WIDTH, width};
}

export function setPathName(pathname) {
  return {type: SET_PATH_NAME, pathname};
}
