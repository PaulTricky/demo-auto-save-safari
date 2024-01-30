import React from 'react';
import '../styles/globals.scss';
import '../styles/styles.scss';

import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import { NextPage } from 'next';
import { AuthProvider, AuthConsumer } from '@/common/contexts/auth';
import Head from 'next/head';
import ConfigProvider from 'antd/lib/config-provider';

import { theme } from 'theme.config';
import { SplashScreen } from '@/components/SplashScreen';
import IntercomInjects from '@/components/Injects/Intercom';
import UserSnapInjects from '@/components/Injects/UserSnap';
import { sendFeatureRequestUserSnap, sendReportUserSnap } from '@/common/utils/usersnap';

type EnhancedAppProps = AppProps & {
  Component: NextPage;
};

const App: React.FC<EnhancedAppProps> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);



  return (
    <>
      <Head>
        <title>Zalow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <ConfigProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ConfigProvider>
    </>
  );
};

export default App;
