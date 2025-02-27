import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Le Stelle del Mare - Ristorante di pesce a Pinarella di Cervia. Esperienza culinaria unica tra tradizione e innovazione." />
        <meta name="keywords" content="Le Stelle del Mare, ristorante Pinarella, ristorante Cervia, cucina di mare, pesce fresco, ristorante Ravenna" />
        <meta name="author" content="Le Stelle del Mare" />
        <meta property="og:title" content="Le Stelle del Mare - Ristorante di Pesce" />
        <meta property="og:description" content="Scopri la vera cucina di mare a Pinarella di Cervia. Prenota il tuo tavolo oggi stesso!" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://www.lestelledelmare.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.lestelledelmare.com" />
        <link rel="icon" href="/favicon.ico" />
        <title>Le Stelle del Mare - Ristorante di Pesce a Pinarella di Cervia</title>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
