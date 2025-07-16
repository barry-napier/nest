#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const pkg = require('../package.json');
const version = pkg.version;

// Build unminified version
console.log(`Building nest.${version}.css...`);
execSync(`postcss src/nest.css -o public/dist/nest.${version}.css`, {
  stdio: 'inherit',
});

// Create minified version using cssnano
console.log(`Building nest.${version}.min.css...`);
execSync(
  `NODE_ENV=production postcss src/nest.css -o public/dist/nest.${version}.min.css`,
  {
    stdio: 'inherit',
  }
);

console.log('Build complete!');
