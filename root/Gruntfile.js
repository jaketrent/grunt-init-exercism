
var matchdep = require('matchdep');

/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    jasmine_node: {
      specNameMatcher: "spec",
        projectRoot: ".",
        requirejs: false,
        forceExit: true,
        jUnit: {
        report: false,
          savePath : "./build/reports/jasmine/",
          useDotNotation: true,
          consolidate: true
      }
    },
    watch: {
      default: {
        files: './*.js',
          tasks: ['jasmine_node']
      }
    }
  });

  matchdep.filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Default task.
  grunt.registerTask('default', ['jasmine_node']);

};
