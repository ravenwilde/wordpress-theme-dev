module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {                             
      dist: {                            
        options: {                       
          style: 'expanded'
        },
        files: {                         
          '../wordpress/wp-content/themes/shoreditch-child/style.css': 'sass/style.scss'
        }
      }
    },
    watch: {
      scripts: {
        files: ['**/*.scss'],
        tasks: ['sass']
      },
    },
  });


  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['sass']);

};