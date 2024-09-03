#!/usr/bin/env node
const { build } = require('esbuild');

// If any dependencies should be external, add them here
const external = [];

/**
 * If you need to use the emitDecoratorMetadata features of Typescript esbuild will not be able to handle it.
 * You need to use SWC or the tsc compiler to build the project first and then use esbuild to bundle the project.
 * The difference will be that you have to set the entryPoints to the output of SWC or the tsc compiler.
 * ex: entryPoints: ['dist/main.js']
 * You can then set the outfile to something like 'dist/bundle/main.js' or 'dist/main.bundle.js'
 * and change the file that scripts/package.js will archive
 */
build({
  bundle: true,
  target: 'node20',
  tsconfig: 'src/tsconfig-build.json',
  external,
  platform: 'node',
  minify: false,
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.js',
});
