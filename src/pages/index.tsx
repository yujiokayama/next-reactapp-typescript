import * as React from "react";
import Head from "next/head";
import Link from "next/link";

const Home: React.FC = () => (
  <div>
    <Head>
      <title>TOP</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <h1>TOP</h1>
      <ul>
        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/inquiry">
            <a>inquiry</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Home;
