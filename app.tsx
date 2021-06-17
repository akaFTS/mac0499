import React, { ComponentType } from "react";
import Header from "~/components/layout/header.jsx";
import "https://raw.githubusercontent.com/tachyons-css/tachyons/master/css/tachyons.min.css";

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      <Header />
      <Page {...pageProps} />
    </main>
  );
}
