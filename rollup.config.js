import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  external: ['node-fetch', 'cheerio'],
  output: [
    {
      file: 'dist/index.js',
      sourcemap: true,
      sourcemapFile: 'dist/index.js.map',
      format: 'cjs',
      exports: 'auto'
    },
    {
      file: 'dist/index.esm.js',
      sourcemap: true,
      sourcemapFile: 'dist/index.esm.js.map',
      format: 'esm',
      exports: 'auto'
    }
  ],

  plugins: [
    typescript({
      outDir: 'dist'
    }),
    terser({
      format: {
        comments: false
      }
    })
  ]
};
