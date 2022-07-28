import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  external: ['node-fetch', 'cheerio'],
  output: [
    {
      file: 'dist/index.js',
      sourcemap: true,
      format: 'module',
      exports: 'auto'
    }
  ],

  plugins: [
    typescript({
      outDir: 'dist'
    })
  ]
};
