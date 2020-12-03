import React from 'react';
import Head from 'next/head'
import 'antd/dist/antd.css';

import "../public/vendors/style";
import "../styles/style.css"
import AppLayout from "../app/core/Layout";

const Home = ({}) => {

  return (
      <AppLayout home>
        <Head>
          <title>Woodify - Forest management</title>
        </Head>
      </AppLayout>
  );
};

export default Home;