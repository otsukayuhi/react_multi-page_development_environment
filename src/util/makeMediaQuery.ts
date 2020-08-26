import { breakPoints } from 'const/styles';

type MakeMediaQuery = {
  readonly [P in keyof typeof breakPoints]: string;
};

/**
 * メディアクエリ用のオブジェクトを生成
 * @example
 * import { makeMediaQuery } from 'util/getMediaQuery';
 * const mediaQuery = makeMediaQuery();
 * console.log(mediaQuery.md);
 * // [at]media screen and (min-width: 768px)
 */
export const makeMediaQuery: () => MakeMediaQuery = () => {
  let mediaQuery: MakeMediaQuery;

  for (const [key, value] of Object.entries(breakPoints)) {
    mediaQuery = {
      ...mediaQuery,
      [key]: `@media screen and (min-width: ${value}px)`,
    };
  }

  return mediaQuery;
};
