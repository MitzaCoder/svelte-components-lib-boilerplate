import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'

const pkg = require('./package.json')

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

export default {
  input: 'src/index.ts',

  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name }
  ],

  plugins: [
    svelte(),

    resolve({
      browser: true,
    }),

    typescript(),

    terser(),
  ]
}