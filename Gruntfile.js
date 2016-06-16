module.exports = function(grunt) {

  grunt.initConfig({


    pkg: grunt.file.readJSON('package.json'),


    uglify: {

      options: {
        sourceMap: true,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },

      main: {
        files: {
          'dist/js/hanza.min.js': [
            'bower/jquery/dist/jquery.js',
            'bower/foundation-sites/dist/foundation.js',
            'js/components/*.js',
            'js/app.js'
          ]
        }
      }

    },


    sass: {

      main: {
        options: {
          style: 'compressed'
        },
        files: {
          'dist/css/hanza.min.css': 'scss/app.scss'
        }
      }
    },


    watch: {

      sassMain: {
        files: ['scss/**'],
        tasks: ['sass:main'],
      },



      jsMain: {
        files: ['js/**'],
        tasks: ['uglify:main']
      }

    },

    notify: {

      uglify: {
        options: {
          title: 'hanza',
          message: 'Uglify: Completed Successfully',
        }
      },

      sass: {
        options: {
          title: 'hanza',
          message: 'Sass: Completed Successfully',
        }
      }

    }

  });


  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Load the plugin that provides the "notify" task.
  grunt.loadNpmTasks('grunt-notify');


  // Default task(s).
  grunt.registerTask('default', ['uglify:main', 'sass:main', 'watch', 'notify']);


};
