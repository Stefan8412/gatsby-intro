import React from 'react';
import Wave from '../components/wave';
import Navbar from '../components/Navbar';
import './bootstrap.min.css';
import Layout from '../components/layout';
import Hero from '../components/hero';

const Contact = () => (
  <>
    <Navbar />

    <Layout>
      <p>
        Sídlo a poštová adresa OZ VAGUS Račianska 78 (Nová Cvernovka) 831 02
        Bratislava
      </p>
      <p>
        IČO: 421 859 71 DIČ: 202 342 0344 Číslo účtu: 2921857374/1100
        zaregistrované na MV SR: dňa 7.4.2011, číslo spisu VVS/1-900/90-373 90
      </p>{' '}
      <p>
        Adresa pre osobný kontakt, odovzdanie šatstva a materiálnych darov OZ
        VAGUS projekt DOMEC denné nízkoprahové a integračné centrum Mýtna 33 811
        07 Bratislava pon - pia 8:00 - 16:00
      </p>
      Tu nám možte zamávať <Wave />
    </Layout>
  </>
);
export default Contact;
