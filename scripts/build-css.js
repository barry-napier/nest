#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const pkg = require('../package.json');
const version = pkg.version;
const distDir = path.join(__dirname, '../public/dist');
const cssDir = path.join(__dirname, '../src');
const outFile = `nest.${version}.css`;
const outFileMin = `nest.${version}.min.css`;
const outPath = path.join(distDir, outFile);
const outPathMin = path.join(distDir, outFileMin);
const indexPath = path.join(__dirname, '../public/index.html');

// 1. Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// 2. Define the layer order and file organization
const layerOrder = {
  'nest.reset': [],
  'nest.tokens': [
    'tokens/fonts.css',
    'tokens/colors.css',
    'tokens/spacing.css',
    'tokens/typography.css',
    'tokens/radii.css',
  ],
  'nest.core': ['core/variables.css'],
  'nest.elements': [
    'elements/text/headings.css',
    'elements/text/paragraph.css',
    'elements/text/inline.css',
    'elements/forms/input.css',
    'elements/forms/button.css',
    'elements/forms/textarea.css',
    'elements/forms/select.css',
    'elements/forms/checkbox.css',
    'elements/forms/radio.css',
    'elements/forms/label.css',
    'elements/forms/fieldset.css',
    'elements/forms/legend.css',
    'elements/layout/base.css',
    'elements/layout/hr.css',
    'elements/layout/lists.css',
    'elements/layout/tables.css',
    'elements/layout/blockquote.css',
  ],
  'nest.components': [],
  'nest.utilities': [],
};

// 3. Read and organize CSS content by layers
let layerDefinitions = '';
let organizedContent = {};

// Read the main nest.css file first to get layer definitions
const mainCssPath = path.join(cssDir, 'nest.css');
if (fs.existsSync(mainCssPath)) {
  const mainCss = fs.readFileSync(mainCssPath, 'utf8');

  // Extract layer definitions
  const layerDefRegex = /@layer\s+[^;]+;/g;
  const layerDefs = mainCss.match(layerDefRegex);
  if (layerDefs) {
    layerDefinitions = layerDefs.join('\n') + '\n\n';
  }
}

// Initialize organized content
Object.keys(layerOrder).forEach(layer => {
  organizedContent[layer] = '';
});

// Process files according to layer order
Object.entries(layerOrder).forEach(([layer, files]) => {
  files.forEach(filePath => {
    const fullPath = path.join(cssDir, filePath);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf8');

      // Remove @import statements (they'll be resolved)
      const contentWithoutImports = content.replace(
        /@import\s+['"][^'"]+['"];?\s*/g,
        ''
      );

      // Add to the appropriate layer
      organizedContent[layer] += contentWithoutImports + '\n';
    }
  });
});

// 4. Build the final CSS with proper layer order
let finalCss = layerDefinitions;

Object.keys(layerOrder).forEach(layer => {
  if (organizedContent[layer].trim()) {
    finalCss += organizedContent[layer] + '\n';
  }
});

// 5. Write full version (unminified)
fs.writeFileSync(outPath, finalCss, 'utf8');
console.log(`Built ${outFile}`);

// 6. Write to a temp file for minification
const tempPath = path.join(distDir, 'temp.css');
fs.writeFileSync(tempPath, finalCss, 'utf8');

// 7. Minify using cssnano-cli
execSync(`npx cssnano ${tempPath} ${outPathMin}`);
fs.unlinkSync(tempPath);
console.log(`Built ${outFileMin}`);

// 8. Update index.html to reference the minified CSS file
let indexHtml = fs.readFileSync(indexPath, 'utf8');
indexHtml = indexHtml.replace(
  /<link rel="stylesheet" href="dist\/nest.*?\.css" \/>/,
  `<link rel="stylesheet" href="dist/${outFileMin}" />`
);
fs.writeFileSync(indexPath, indexHtml, 'utf8');
console.log(`Updated index.html to reference dist/${outFileMin}`);
