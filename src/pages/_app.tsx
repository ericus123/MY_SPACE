import "@/styles/global.css";
import "@/styles/highlight.scss";
import { cacheExchange, fetchExchange } from "@urql/core";
import { withUrqlClient } from "next-urql";
import Head from "next/head";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppLoader from "../components/loaders";
import AppLayout from "../layouts/app/AppLayout";
import { persistor, store } from "../redux/store";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const App = ({ Component, pageProps }: any) => {
  const router = useRouter();
  let window: Window & typeof globalThis;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const ads = document?.getElementsByClassName("adsbygoogle").length;
    for (let i = 0; i < ads; i++) {
      try {
        // eslint-disable-next-line no-undef
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  }, [router.asPath]);

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
      setIsLoading(true);
    };
    const handleStop = () => {
      NProgress.done();
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  const [isHydrating, setIsHydrating] = useState(true);

  const meta = pageProps?.meta || [];
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {isLoading ? (
            <AppLoader />
          ) : (
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          )}
        </PersistGate>
      </Provider>
    </>
  );
};

export default withUrqlClient((_ssrExchange, ctx) => ({
  url: `${process.env.NEXT_PUBLIC_GRAPHQL_URI}`,
  exchanges: [cacheExchange, _ssrExchange, fetchExchange],
}))(App);
