import * as React from "react";
import Head from "next/head";
import Link from "next/link";

const Inquiry: React.FC = () => (
  <div>
    <Head>
      <title>about</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>INQUIRY</h1>
    <div>
      <Link href="/">
        <a>top</a>
      </Link>
    </div>
  </div>
);

export default Inquiry;
