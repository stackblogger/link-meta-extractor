import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  external: ['isomorphic-unfetch', 'cheerio'],
  output: [
    {
      file: 'dist/index.js',
      sourcemap: false,
      format: 'cjs',
      exports: 'auto'
    }
  ],

  plugins: [
    typescript({
      outDir: 'dist'
    })
  ]
};
