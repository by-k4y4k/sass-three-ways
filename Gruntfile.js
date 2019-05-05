const sass = require('node-sass');
const grunt = require('grunt');

require('load-grunt-tasks')(grunt);

grunt.initConfig({
  sass: {
    options: {
      implementation: sass,
      outputStyle: 'expanded'
    },
    dist: {
      files: {
        'dest/grunt.css': 'grunt-sass/grunt.scss'
      }
    }
  }
});

grunt.registerTask('default', ['sass']);
