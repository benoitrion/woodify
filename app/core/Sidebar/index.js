import React, {useEffect} from "react";
import {Drawer, Layout} from "antd";

import SidebarContent from "./SidebarContent";
import {toggleCollapsedSideNav, updateWindowWidth} from "../../../redux/actions/Settings";
import {TAB_SIZE} from "../../../constants/Settings";

const {Sider} = Layout;

const Sidebar = () => {

  const dispatch = useDispatch();

  const {navCollapsed, width} = useSelector(({settings}) => settings);


  const onToggleCollapsedNav = () => {
    dispatch(toggleCollapsedSideNav(!navCollapsed));
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(updateWindowWidth(window.innerWidth));
    })
  }, [dispatch]);

  return (
    <Sider
      className={`bl-app-sidebar bl-collapsed-sidebar`}
      trigger={null}
      collapsed={(width >= TAB_SIZE)}
      collapsible>
      {
        width < TAB_SIZE ?
          <Drawer
            className={`bl-drawer-sidebar`}
            placement="left"
            closable={false}
            onClose={onToggleCollapsedNav}
            visible={navCollapsed}>
            <SidebarContent/>
          </Drawer> :
          <SidebarContent/>
      }
    </Sider>)
};
export default Sidebar;
