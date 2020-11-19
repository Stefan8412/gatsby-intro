import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import './bootstrap.min.css';
import Hero from '../components/hero';

const About = () => (
  <>
    <Hero />
    <Navbar />
    <Layout>
      <h1>O nás</h1>
      <p>
        Tím OZ Vagus podáva pomocnú ruku tisíckam ľudí bez domova od roku 2011.
        Sociálni pracovníci OZ Vagus pomáhajú ľuďom bez domova získať a udržať
        si prácu, bývanie či zbaviť sa dlhov.
      </p>
      <p>
        {' '}
        Najmä ale Vagus poskytuje ľudom bez domova odborné poradenstvo a ľudský
        prístup s láskou a výsledkami. Pomoc človeku bez domova totiž
        nepredstavuje iba jedlo a šatstvo. Ozajstná pomoc znamená zabezpečenie
        základných potrieb a odborné poradenstvo, vďaka ktorému majú možnosť sa
        vrátiť do beženého života.{' '}
      </p>
      <p>
        OZ Vagus pracuje v troch základných programoch - terénna sociálna práca
        STREETWORK, denné nízkoprahové centrum DOMEC a INTEGRAČNÝ PROGRAM.
        Svojou prácou cez tieto programy preukázateľne zkvalitňuje životy
        stoviek ľudí ročne na rôznych úrovniach, od akútnej pomoci priamo na
        ulici až po poskytovanie stabilného bývania.
      </p>
      <Link to="/">&larr;spať</Link>
    </Layout>
  </>
);
export default About;
