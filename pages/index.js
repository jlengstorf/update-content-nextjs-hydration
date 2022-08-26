import Head from 'next/head';
import styles from '../styles/Home.module.css';

export function getStaticProps() {
  return {
    props: {
      heading:
        'Update and Replace Content in Next.js and Avoid React Hydration Errors',
      details: 'This response is static.',
    },
  };
}

export default function Home({ heading, details }) {
  return (
    <div className={styles.container}>
      <Head>
        <title id="title">{heading}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 id="heading">{heading}</h1>

        <p id="details">{details}</p>

        <p>Wow</p>
      </main>
    </div>
  );
}
