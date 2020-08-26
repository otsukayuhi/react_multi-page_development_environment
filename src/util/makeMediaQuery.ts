import { breakPoints } from 'const/styles';

type MakeMediaQuery = {
  readonly [P in keyof typeof breakPoints]: string;
};

/**
 * メディアクエリ用のオブジェクトを生成
 * @example
 * import { makeMediaQuery } from 'util/makeMediaQuery';
 * const mediaQuery = makeMediaQuery();
 * console.log(mediaQuery.md);
 * // [at]media screen and (min-width: 768px)
 */
export const makeMediaQuery: () => MakeMediaQuery = () => {
  const mediaQueries = Object.entries(breakPoints).map((breakPoint) => [
    breakPoint[0],
    `@media screen and (min-width: ${breakPoint[1]}px)`,
  ]);

  return Object.fromEntries(mediaQueries);
};
