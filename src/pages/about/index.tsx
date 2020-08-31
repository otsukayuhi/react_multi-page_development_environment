import React from 'react';
import { render } from 'react-dom';
import styled from '@emotion/styled';
import { GlobalStyle } from 'components/GlobalStyle';
import { BaseLayoutStyle } from 'components/BaseLayout';
import { color, margin } from 'const/styles';

type Props = {
  className?: string;
};

const promise: () => Promise<string> = () => {
  return new Promise((resolve) => {
    resolve('Promise も書けます');
  });
};

const App: React.FC<Props> = ({ className }) => {
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    (async () => {
      const result = await promise();
      setText(result);
    })();
  }, []);

  return (
    <>
      <GlobalStyle />
      <BaseLayoutStyle>
        <div className={className}>
          <h1>アバウトページ</h1>
          <p>アバウトページのサンプル</p>
          <p>{text}</p>
          <p>
            <a href="/">トップページへ</a>
          </p>
        </div>
      </BaseLayoutStyle>
    </>
  );
};

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
