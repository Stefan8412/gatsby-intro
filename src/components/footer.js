import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { config, IconProp } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const Footer = () => (
  <footer
    css={css`
      background: #eee;
      margin-top: 20px;
      padding: 10px;
      text-align: center;
    `}
  >
    <p
      css={css`
        color: #222;
      `}
    >
      Sledujte nás na sociálnych sieťach
    </p>
    <div
      css={css`
        text-align: center;
      `}
    >
      <ul
        css={css`
          list-style-type: none;
        `}
      >
        <li
          css={css`
            margin-right: 25px;
            display: inline;
          `}
        >
          <a
            css={css`
              color: #222;
            `}
            href="https://www.facebook.com/OZVagus"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li
          css={css`
            margin-right: 25px;
            display: inline;
          `}
        >
          <a
            css={css`
              color: #222;
            `}
            href="https://www.instagram.com/vagus_sk/?hl=sk"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </div>
    <p
      css={css`
        color: #222;
      `}
    >
      Created by Vagus &copy; 2020
    </p>
  </footer>
);

export default Footer;
