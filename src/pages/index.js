import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Insta from '../components/insta';

export default () => (
  <>
    <Hero />
    <Layout>
      <h1>Sme občianske združenie pracujúce s ľudmi bez domova</h1>
      <p>Vitajte na našom webe</p>
      <Link to="/about/">info o nás &rarr;</Link>
      <Insta />
    </Layout>
  </>
);
