module.exports = {
  /** 出力ディレクトリ */
  outDir: 'dist',
  /** ビルドされた .js ファイルの出力ディレクトリ */
  jsDir: 'js',
  /** オリジン */
  origin: 'https://example.com',
  /**
   * og:image に ?update のクエリパラメーターを付与するか？
   * @note true の場合、ビルドするたびに new Date() から取得した値を付与します
   */
  ogImageUpdateParam: false,
  /** 各ページの設定 */
  pages: [
    {
      /** ページ名 */
      name: 'top',
      /** タイトル */
      title: 'トップページ',
      /** ディスクリプション */
      description: 'トップページのディスクリプション',
      /** 出力される HTML ファイル名 */
      filename: 'index.html',
      /** og:type */
      ogType: 'website',
      /** エントリーファイル */
      entryPath: './src/pages/top/index.tsx',
      /** 独自の EJS が必要な場合 */
      // template: 'bar.ejs',
    },
    {
      name: 'about',
      title: 'アバウトページ',
      description: 'アバウトページのディスクリプション',
      filename: 'about/index.html',
      ogType: 'article',
      entryPath: './src/pages/about/index.tsx',
    },
  ],
};
