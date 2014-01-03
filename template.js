/*
 * grunt-init-exercism
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 Jake Trent, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create file watcher for exercism tests';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'Run exercism.io and have fun';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = 'Gruntfile.js';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [], function(err, props) {
    var files = init.filesToCopy(props);
    init.copyAndProcess(files, props);

    var devDependencies = {
      'matchdep': '~0.3.0',
      'grunt': '~0.4.2',
      'grunt-contrib-watch': '~0.5.3',
      'grunt-jasmine-node': "~0.1.0"
    };

    init.writePackageJSON('package.json', {
      node_version: '>= 0.10.0',
      license: 'MIT',
      scripts: {
        test: 'grunt'
      },
      devDependencies: devDependencies
    });

    done();
  });

};