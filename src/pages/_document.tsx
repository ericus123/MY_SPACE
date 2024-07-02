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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
          strategy="lazyOnload"
          // strategy="beforeInteractive"
          crossOrigin="anonymous"
        />
        <script
          async
          src={`https://fundingchoicesmessages.google.com/i/${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}?ers=1`}
          nonce="iLcLwlwtu8f_8xUy6IjPtA"></script>
        <script nonce="iLcLwlwtu8f_8xUy6IjPtA">{`
                    (function() {
                        function signalGooglefcPresent() {
                            if (!window.frames['googlefcPresent']) {
                                if (document.body) {
                                    const iframe = document.createElement('iframe');
                                    iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;';
                                    iframe.style.display = 'none';
                                    iframe.name = 'googlefcPresent';
                                    document.body.appendChild(iframe);
                                } else {
                                    setTimeout(signalGooglefcPresent, 0);
                                }
                            }
                        }
                        signalGooglefcPresent();
                    })();
                `}</script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
