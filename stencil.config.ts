import autoprefixer from 'autoprefixer';
import findNodeModules from 'find-node-modules';
import tailwind from 'stencil-tailwind-plugin';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';

import tailwindConf from './tailwind.config';

export const config: Config = {
  namespace: 'stencil-tailwindcss',
  sourceMap: true,
  globalStyle: 'src/global/styles/default.scss',
  plugins: [
    sass({
      includePaths: [...findNodeModules({ relative: false })],
      // injectGlobalPaths: ['node_modules/tailwindcss/tailwind.css'],
      outputStyle: 'compressed',
      sourceMap: true,
      sourceMapEmbed: true,
      sourceMapContents: true,
    }),
    tailwind({
      stripComments: true,
      tailwindConf: tailwindConf,
    }),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  outputTargets: [
    { type: 'dist', esmLoaderPath: '../loader' },
    { type: 'dist-custom-elements-bundle' },
    { type: 'docs-readme' },
    { type: 'www', serviceWorker: null }, // disable service workers
  ],
  devServer: {
    openBrowser: false,
    port: 8001,
  },
};
