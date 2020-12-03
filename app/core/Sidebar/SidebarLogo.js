import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Link from "next/link";

import {toggleCollapsedSideNav} from "../../../redux/actions/Settings";
import {TAB_SIZE} from "../../../constants/Settings";

const SidebarLogo = () => {
  const dispatch = useDispatch();
  const {width, navCollapsed} = useSelector(({settings}) => settings);
  return (
    <div className="bl-layout-sider-header">
      <div className="bl-linebar">
        <i
          className={`bl-icon-btn icon icon-${navCollapsed ? 'menu-unfold' : 'menu-fold'}`}
          onClick={() => dispatch(toggleCollapsedSideNav(!navCollapsed))}
        />
      </div>
      <Link href="/" >
        <a className="bl-site-logo">
          {width >= TAB_SIZE ?
              <img alt="lo" src={("/images/w-logo.png")}/> :
          <img alt="logo" src={("/images/logo.svg")}/>}
        </a>
      </Link>
    </div>
  );
};

export default SidebarLogo;
