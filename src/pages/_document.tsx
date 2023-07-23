import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="CSS, C, SCSS, Next,TypeScript, Electronics, HTML, JavaScript, Node, React,Arduino, Security, Nginx,Database"
        />
        <meta name="author" content="AMANI Eric" />
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
