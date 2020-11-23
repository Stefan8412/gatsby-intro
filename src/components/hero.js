import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';

const ImageBackground = styled('div')`
  background-image: url('/images/heroimage2.jpg');
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;
  + * {
    margin-top: 10;
  }
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }
  p,
  a {
    color: #222;
    margin-top: 0;
  }
  a {
    margin-top: 0.5;
  }
`;

const Hero = () => {
  return (
    <ImageBackground>
      <TextBox>
        <h1>Vagus OZ &hearts;</h1>

        <p>
          Vaše 2 % z daní nám pomôžu rozvíjať projekty bývania a zamestnávania
          pre ľudí bez domova v Bratislave
          <Link to="/about/"> prečítajte si o nás &rarr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};
export default Hero;
