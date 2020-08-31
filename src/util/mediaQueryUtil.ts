import { breakPoints as stylesBreakPoints, BreakPoint } from 'const/styles';

type MediaQuery = { readonly [P in keyof BreakPoint]: string };
type MakeMediaQueries = (breakPoints: BreakPoint) => MediaQuery;

/** メディアクエリを生成 */
export const makeMediaQuery: (point: number) => string = (point) =>
  `@media screen and (min-width: ${point}px)`;

/** メディアクエリ用のオブジェクトを生成 */
export const makeMediaQueries: MakeMediaQueries = (breakPoints) => {
  const mediaQueries = Object.entries(breakPoints).map((breakPoint) => [
    breakPoint[0],
    makeMediaQuery(breakPoint[1]),
  ]);

  return Object.fromEntries(mediaQueries);
};

/** メディアクエリ */
export const mediaQueries = makeMediaQueries(stylesBreakPoints);
