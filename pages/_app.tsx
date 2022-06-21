import { NextQueryParamProvider } from "next-query-params";
import type { AppProps } from "next/app";
import React from "react";
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextQueryParamProvider>
      <Component {...pageProps} />
    </NextQueryParamProvider>
  );
}
export default MyApp;
