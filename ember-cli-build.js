/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var cssImport = require('postcss-import');
var cssNext = require('postcss-cssnext');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-babel': {
      includePolyfill: true
    },

    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
          { module: cssImport },
          { module: cssNext }
        ]
      }
    },

    svgstore: {
      excludeSourceFiles: true, // exclude all processed source files
      files: {
        sourceDirs: [ 'public/assets/icons' ],
        outputFile: '/assets/icons.svg',
        excludeSourceFiles: true // exclude source files only for this master SVG
      }
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
