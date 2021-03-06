import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Insta from '../components/insta';
import { css } from '@emotion/core';
import Navbar from '../components/Navbar';
import './bootstrap.min.css';

export default () => (
  <>
    <Navbar />

    <Layout>
      <p
        css={css`
          color: #222;
          font-size: 1rem;
        `}
      >
        Sme občianske združenie pracujúce s ľudmi bez domova. Od roku 2012 sme
        sprevádzali viac ako 5 000 osôb počas ich cesty z ulice.
      </p>

      <Link to="/about/">info o nás &rarr;</Link>
      <Insta />
    </Layout>
  </>
);
