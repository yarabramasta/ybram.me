import { Head, Html, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html dir="ltr" lang="en">
      <Head />
      <body className="overflow-x-hidden bg-black text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
