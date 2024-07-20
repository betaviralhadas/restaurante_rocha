import '../styles/globals.scss'
//import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/*<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <script src="https://kit.fontawesome.com/378a8f4b87.js" crossorigin="anonymous"></script>
        <title>Restaurante Rocha</title>
  </Head>*/}
      <Component {...pageProps} />
    </>
  )
}
export default MyApp