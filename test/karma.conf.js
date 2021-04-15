// Karma configuration
// Generated on Wed Oct 09 2019 08:43:05 GMT-0600 (MDT)

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // NOTE: the order of these libraries is important. "requirejs" must be
    // loaded first so that other UMD modules will know it's an AMD environment
    frameworks: [
      'requirejs',
      'mocha',
      'chai',
      'sinon',
      'fixture',
      'karma-typescript'
    ],

    // list of files / patterns to load in the browser
    files: [
      // RequireJS bootstrap
      'test/test-main.js',

      // Test files
      { pattern: 'test/specs/**/*.spec.ts', included: false },

      // CCA libs
      { pattern: 'web/*/jet-composites/**/*', included: false },

      // JET/3rd party libs
      {
        pattern: 'web/js/libs/**/*.js',
        included: false,
        watched: false
      },
      {
        pattern: 'web/css/**/oj-redwood-notag.css',
        included: true,
        watched: false
      },

      // 3rd party testing libs
      {
        pattern: 'node_modules/sinon/**',
        included: false,
        watched: false
      }
    ],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.ts': ['karma-typescript'],
      'web/js/jet-composites/**/*.js': ['coverage']
    },

    karmaTypescriptConfig: {
      tsconfig: 'test/tsconfig.json'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['coverage', 'mocha'],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/',
      file : 'index.html'
    },

    client: {
      mocha: {
        timeout: 30000
      }
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
