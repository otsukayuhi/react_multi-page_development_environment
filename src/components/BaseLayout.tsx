import React from 'react';
import styled from '@emotion/styled';
import { makeMediaQuery } from 'util/makeMediaQuery';

type Props = {
  className?: string;
};

const BaseLayout: React.FC<Props> = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const mediaQuery = makeMediaQuery();

export const BaseLayoutStyle = styled(BaseLayout)`
  margin: 0 auto;
  padding: 20px;
  max-width: 900px;
  width: 100%;

  ${mediaQuery.md} {
    padding: 40px;
  }
`;
