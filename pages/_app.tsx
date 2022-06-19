import { NextQueryParamProvider } from "next-query-params";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import NavBar from "./components/NavBar";
import "./global.css";

function MyApp({ Component, pageProps, ...rest }: AppProps) {
  return (
    <>
      <Head>
        <title>Wigda to cymbał</title>
      </Head>

      <NextQueryParamProvider>
        <NavBar />

        <Component {...pageProps} />
      </NextQueryParamProvider>
    </>
  );
}
export default MyApp;
