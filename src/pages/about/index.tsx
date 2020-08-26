import * as React from 'react';
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
        <h1>アバウトページ</h1>
        <p>アバウトページのサンプル</p>
        <p>
          <a href="/">トップページへ</a>
        </p>
      </div>
    </BaseLayoutStyle>
  </>
);

const AppStyle = styled(App)`
  h1 {
    margin-bottom: ${margin.m16};
  }
  p {
    color: ${color.green};

    a {
      color: ${color.red};
    }
  }
`;

const rootElement = document.getElementById('root');
render(<AppStyle />, rootElement);
