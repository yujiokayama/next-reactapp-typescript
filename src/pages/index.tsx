import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../store/rootReducer';

import {
  incrementCounter,
  decrementCounter,
  fetchAPI
} from '../store/modules/Counter';

const Home: React.FC = () => {
  const { count, list } = useSelector((state: RootState) => state.Counter);
  const dispatch = useDispatch();
  const increment = () => dispatch(incrementCounter(1));
  const decrement = () => dispatch(decrementCounter(1));

  // マウント後に実行したい処理
  React.useEffect(() => {
    dispatch(fetchAPI());
  }, []);

  return (
    <div>
      <Head>
        <title>TOP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {count}

      <ul>
        {list.map((v) => (
          <li key={v.id}>
            {v.id}
            {v.name}
            {v.age}
          </li>
        ))}
      </ul>

      <button onClick={increment}>増やす</button>
      <button onClick={decrement}>減らす</button>
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
};

export default Home;
