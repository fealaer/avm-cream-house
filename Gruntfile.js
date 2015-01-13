/*

Default Gruntfile for AppGyver Steroids
http://www.appgyver.com
Licensed under the MIT license.

*/

module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-steroids");
  grunt.loadNpmTasks('grunt-angular-gettext');
  grunt.registerTask("default", [
    "steroids-make-fresh"
  ]);

  grunt.initConfig({
    nggettext_extract: {
      pot: {
        files: {
          'po/en.pot': ['www/**/*.html', 'www/app/**/*.js']
        }
      }
    },
    nggettext_compile: {
      all: {
        files: {
          'www/app/components/translations.js': ['po/*.po']
        }
      }
    }
  })
};
