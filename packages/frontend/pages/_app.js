import React from "react";
import App from "next/app";
import Head from "next/head";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Space+Mono&display=swap"
            rel="stylesheet"
          />
        </Head>

        <div className="main">
          <h2>momegas</h2>

          <Component {...pageProps} />
        </div>
        {style}
      </>
    );
  }
}

const style = (
  <style global jsx>{`
    h4 {
      margin: 0;
      color: #000;
      font-size: 22px;
      font-weight: 400;
      line-height: 1.3em;
    }

    h2 {
      color: #000;
      font-size: 38px;
    }

    p {
      color: #000;
      font-weight: 400;
      font-style: normal;
      font-size: 16px;
      line-height: 1.5em;
      margin: 0;
    }

    small {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.4);
    }

    body {
      font-family: "Space Mono", monospace;
    }

    .main {
      margin-left: auto;
      margin-right: auto;
      max-width: 42rem;
    }
  `}</style>
);
