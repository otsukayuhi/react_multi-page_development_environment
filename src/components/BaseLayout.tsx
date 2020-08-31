import React from 'react';
import styled from '@emotion/styled';
import { mediaQueries } from 'util/mediaQueryUtil';

type Props = {
  className?: string;
};

const BaseLayout: React.FC<Props> = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export const BaseLayoutStyle = styled(BaseLayout)`
  margin: 0 auto;
  padding: 20px;
  max-width: 900px;
  width: 100%;

  ${mediaQueries.md} {
    padding: 40px;
  }
`;
