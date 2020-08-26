import React from 'react';
import { render } from 'react-dom';
import styled from '@emotion/styled';
import { GlobalStyle } from 'components/GlobalStyle';
import { BaseLayoutStyle } from 'components/BaseLayout';
import { color, margin } from 'const/styles';

type Props = {
  className?: string;
};

const App: React.FC<Props> = ({ className }) => (
  <>
    <GlobalStyle />
    <BaseLayoutStyle>
      <div className={className}>
        <h1 className="title">トップページ</h1>
        <p className="lead">トップページのサンプル</p>
        <p>
          <a href="/about.html">アバウトページへ</a>
        </p>
      </div>
    </BaseLayoutStyle>
  </>
);

const AppStyle = styled(App)`
  .title {
    margin-bottom: ${margin.m16};
  }
  .lead {
    color: ${color.red};
  }
`;

const rootElement = document.getElementById('root');
render(<AppStyle />, rootElement);
