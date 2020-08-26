import * as React from 'react';
import { Global, css } from '@emotion/core';
import * as ress from 'ress/dist/ress.min.css';
import { color } from 'const/styles';

const resetCss = css`
  ${ress},

  html,
  body {
    height: 100%;
  }

  body {
    font-family: Roboto, 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
      'Hiragino Sans', Meiryo, sans-serif;
    color: ${color.black};
  }

  ul[class],
  li[class] {
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

export const GlobalStyle: React.FC = () => <Global styles={resetCss} />;
