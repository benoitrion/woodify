import React, {useEffect} from "react";
import {Menu} from "antd";
import Link from "next/link";

import {useRouter} from "next/router"
import CustomScrollbars from "../../../util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import {useDispatch, useSelector} from "react-redux";
import {setPathName} from "../../../redux/actions";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const SidebarContent = () => {

  const dispatch = useDispatch();
  const router = useRouter()
  let {pathname} = useSelector(({settings}) => settings);

  useEffect(() => {
    dispatch(setPathName(router.pathname))
  }, [router.pathname]);

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return (
    <>
      <SidebarLogo/>
      <div className="bl-sidebar-content">
        <CustomScrollbars className="bl-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme='lite'
            mode="inline">

            <Menu.Item key="sample">
              <Link href="/sample">
                <><i className="icon icon-dasbhoard"/>Sample</>
              </Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;

