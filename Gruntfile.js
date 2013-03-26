/*
 * comfee
 *
 * Copyright (c) 2013 Tiago Amaro
 * Licensed under the MIT license.
 */

 module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      compile: {
        files: {
          'src/compiled/js/coffee_result.js': 'src/**/*.coffee'
        }
      }
    },
    compass: {
      dist: {
        options: {
          // require: ['bootstrap-sass'],
          cssDir: 'build/css',
          sassDir: 'src/css',
          imagesDir: 'src/images',
          fontsDir: 'src/fonts',
          environment: 'production',
          outputStyle: 'compressed',
          relativeAssets: true,
          noLineComments: true,
          bundleExec: true,
          raw: "preferred_syntax = :sass\nhttp_path = '/'"
        }
      }
    },
    uglify: {
      options: {        
        mangle: {
          except: ['jQuery']
        },
        compress: true,
        preserveComments: false
      },
      build: {
        src: ['src/**/*.js'],
        dest: 'build/js/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.js', 'src/**/*.coffee', 'src/**/*.scss'],
        tasks: ['default']
      }
    },
    clean: ['build', '.sass-cache']
  });

  // Loading plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['clean', 'coffee', 'uglify', 'compass']);
};