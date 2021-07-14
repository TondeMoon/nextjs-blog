import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          The Whippet (also English Whippet or Snap Dog) is a dog breed of
          medium size. They are a sighthound breed that originated in England,
          where they descended from Greyhounds. Whippets today still strongly
          resemble a smaller Greyhound. Part of the Hound group, Whippets have
          relatively few health problems other than arrhythmia. Whippets also
          participate in dog sports such as lure coursing, agility, dock diving
          and flyball. The name is derived from an early 17th-century word, now
          obsolete, meaning "to move briskly".
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, body, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {body}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
