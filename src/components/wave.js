import React, { useState } from 'react';
import { css } from '@emotion/core';

const Wave = () => {
  const [mávnutí, setWaves] = useState(0);
  const label = `👋 ${mávnutí} ${mávnutí === 1 ? 'mávnutie' : 'mávnutí'}`;

  return (
    <button
      css={css`
        background: #ebbd34;
        border: none;
        color: white;
        font-size: 1.25rem;
      `}
      onClick={() => setWaves(mávnutí + 1)}
    >
      {label}
    </button>
  );
};

export default Wave;
