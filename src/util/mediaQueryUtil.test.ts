import { breakPoints } from 'const/styles';
import { makeMediaQuery, makeMediaQueries } from './mediaQueryUtil';

describe('util/makeMediaQuery', () => {
  describe('makeMediaQuery', () => {
    const dummyPoint = 0;
    const expected = `@media screen and (min-width: ${dummyPoint}px)`;

    it('メディアクエリの文字列を生成', () => {
      expect(makeMediaQuery(dummyPoint)).toBe(expected);
    });
  });

  describe('makeMediaQueries', () => {
    const mediaQueries = makeMediaQueries(breakPoints) as {
      [key: string]: string;
    };
    const cases = Object.entries(breakPoints);

    it.each(cases)('%s のとき ブレークポイントは %spx', (key, value) => {
      const expected = `@media screen and (min-width: ${value}px)`;
      expect(mediaQueries[key]).toBe(expected);
    });
  });
});
