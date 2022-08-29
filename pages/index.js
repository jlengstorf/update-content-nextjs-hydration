import Head from 'next/head';
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  return {
    props: {
      heading: 'The best headlines around!',
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

        <p>
          Update and replace content in Next.js and avoid React hydration
          errors. <span className="details">{details}</span>
        </p>
      </main>
    </div>
  );
}
