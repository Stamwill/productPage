import Head from 'next/head'
import App from 'containers/App'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Product Page</title>
        <meta name="description" content="Ecommerce product page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <App />
    </div>
  )
}
