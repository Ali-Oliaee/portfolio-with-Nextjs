import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx?.locale || "en" };
  }
  render() {
    return (
      <Html
        dir={this.props.locale === "fa" ? "rtl" : "ltr"}
        lang={this.props.locale}
      >
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Andika&display=swap"
            rel="stylesheet"
          />
          <link href="/favicon.png" rel="icon" />
          <meta name="description" content="my portfolio page" />
          <meta
            name="keywords"
            content="Ali, ali oliaee, oliaee, علی, علی علیایی, علیایی, portfolio"
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
