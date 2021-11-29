import { ReactElement } from 'react';
import Head from 'next/head';

const DefaultHeader = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <meta name="description" content="Boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>Default Header</header>
    </>
  );
};

export default DefaultHeader;
