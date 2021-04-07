import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import manifest from "../public/manifest.json";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* App */}
          <meta name="application-name" content={`${manifest.name}`} />

          <meta name="apple-mobile-web-app-capable" content={`yes`} />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content={`default`}
          />
          <meta
            name="apple-mobile-web-app-title"
            content={`${manifest.name}`}
          />

          <meta name="format-detection" content={`telephone=no`} />
          <meta name="msapplication-TileColor" content={`#2B5797`} />
          <meta name="msapplication-tap-highlight" content={`no`} />

          <meta name="mobile-web-app-capable" content={`yes`} />
          <meta name="theme-color" content={`#FFFFFF`} />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

          {/* Social */}
          <meta property="og:url" content="https://unext-pi.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Autonomous Forklift" />
          <meta name="twitter:card" content="Autonomous Forklift" />
          <meta
            property="og:description"
            content="PWA with a simple AI-simulation using Unity and Next.js."
          />
          <meta property="og:image" content={"/social-preview.png"} />
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
