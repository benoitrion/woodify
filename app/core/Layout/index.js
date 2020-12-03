import React from "react";
import {Layout} from "antd";

import Sidebar from "../Sidebar";
import {footerText} from "../../../util/config";
const {Content, Footer} = Layout;

const AppLayout = ({children}) => {

  return (
    <Layout className={`bl-app-layout`}>
      <Sidebar/>
      <Layout>
        <Content className={`bl-layout-content bl-container-wrap`}>
          <div className="bl-main-content-wrapper">
            {children}
          </div>
          <Footer>
            <div className="bl-layout-footer-content">
              {footerText}
            </div>
          </Footer>
        </Content>
      </Layout>
    </Layout>
  )
}

export default AppLayout

