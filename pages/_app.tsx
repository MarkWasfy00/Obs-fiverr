import type { AppProps } from 'next/app'
import Script from 'next/script'
import Head from 'next/head'

import "../styles/base.style.scss"
import "../styles/global.scss"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="shortcut icon" sizes="16x16" href="/static/favicon.ico"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>OBS Scripts</title>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#00BFE7" />
        <meta name="description" content="Get your customized obs scripts and automation for cheap"  />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow"/>
        <meta name="generator" content="react" />
        <meta name="subject" content="customized obs scripts and automation for cheap"/>
        <meta name="rating" content="General"/>
        <meta name="referrer" content="no-referrer"/>
        <meta name="ICBM" content="40.730610,-73.935242"/>
        <meta name="geo.position" content="40.730610,-73.935242"/>
        <meta name="geo.region" content="US-NY"/>
        <meta name="geo.placename" content="New York City"/>
        <meta property="og:url" content="https://obs-scripts.store"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="OBS Scripts"/>
        <meta property="og:image" content="https://obs-scripts.store/src/assets/obs-fiverr.png"/>
        <meta property="og:image:alt" content="OBS-Fiverr"/>
        <meta property="og:description" content="Get your customized obs scripts and automation for cheap"/>
        <meta property="og:site_name" content="OBS Scripts"/>
        <meta property="og:locale" content="en_US"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:url" content="https://obs-scripts.store"/>
        <meta name="twitter:title" content="OBS Scripts"/>
        <meta name="twitter:description" content="Get your customized obs scripts and automation for cheap"/>
        <meta name="twitter:image" content="https://obs-scripts.store/src/assets/obs-fiverr.png"/>
        <meta name="twitter:image:alt" content="Get your customized obs scripts and automation for cheap"/>
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LLH65E5S71"></Script>
      <Script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag("js", new Date());
              gtag("config", "G-LLH65E5S71");`,
            }}
      ></Script>
      <Component {...pageProps} />
    </>
  )
}
