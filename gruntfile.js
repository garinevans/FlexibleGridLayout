module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

  	sass: {
      dist: {
        files: {
          'css/styles.css': 'sass/main.scss'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);

};