import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Who Does What? - Game Edukasi Anak</title>
        <meta name="description" content="Game edukasi interaktif untuk anak usia 3-4 tahun" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#f2750a" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
