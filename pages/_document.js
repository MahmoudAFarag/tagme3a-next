import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="application-name" content="Tagme3a Learning Platform" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Tagme3a Learning Platform"
          />
          <meta
            name="description"
            content="Resources for 3rd clinical year such as Lectures and Sections"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#c3083f" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-icon-180.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta
            name="keywords"
            content="tagme3a clinical pharmacy alexu alexandria-university semester 6 pharma clinical"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
