import { Fragment } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import Layout from '../../components/layout';

export default function Greyhound() {
  return (
    <Fragment>
      <Layout>
        <Head>
          <title>Greyhound</title>
        </Head>
        <h1>Greyhound</h1>
        <Image
          height={290}
          width={460}
          src="/images/greyhound.jpg"
          alt="greyhound"
        />
        <style jsx global>{`
          body {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: cyan;
          }
        `}</style>
      </Layout>
    </Fragment>
  );
}
