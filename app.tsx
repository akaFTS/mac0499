import React, { ComponentType } from "react";
import Header from "~/components/layout/header.jsx";
import Footer from "~/components/layout/footer.jsx";
import "https://raw.githubusercontent.com/tachyons-css/tachyons/master/css/tachyons.min.css";
import "~/style/custom_tachyons.css";

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <main className="bg-light-gray opensans min-vh-100">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </head>
      <Header />
      <Page {...pageProps} />
      <Footer />
    </main>
  );
}
