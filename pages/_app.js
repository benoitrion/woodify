import React from 'react';
import Head from 'next/head'
import withRedux from 'next-redux-wrapper';
import 'antd/dist/antd.css';

import "../public/vendors/style";
import "../styles/style.css"
import initStore from '../redux/store';
import {Provider} from "react-redux";

const Page = ({Component, pageProps, store}) => {

  return (
      <>
        <Head>
          <title>Woodify - Forest management</title>
        </Head>
        <>
          <Provider store={store}>
          <Component {...pageProps} />
          </Provider>
        </>
      </>
  );
};

export default withRedux(initStore)(Page);