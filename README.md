# grunt-blocks

Grunt configuration helper for Plone add-ons and themes

## Usage

Example `Gruntfile.js`:

```javascript
const blocks = require('@redturtle/grunt-blocks').default;

module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: blocks.sass.options(),
      main: blocks.sass.file('theme'),
      backend: blocks.sass.file('theme.backend'),
    },
    postcss: {
      prefix_main: blocks.postcss.prefix('theme'),
      prefix_be: blocks.postcss.prefix('theme.backend'),
      min_main: blocks.postcss.cssmin('theme'),
      min_be: blocks.postcss.cssmin('theme.backend'),
    },
  });

  grunt.registerTask('compile', ['sass', 'postcss']);
  grunt.registerTask('main', [
    'sass:main',
    'postcss:prefix_main',
    'postcss:min_main',
  ]);
  grunt.registerTask('be', [
    'sass:backend',
    'postcss:prefix_be',
    'postcss:min_be',
  ]);
};
```

## Installation

```bash
# npm
npm install --save-dev @redturtle/grunt-blocks

# or yarn
yarn add --dev @redturtle/grunt-blocks
```
