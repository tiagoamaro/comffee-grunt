/*
 * Comffee
 *
 * Copyright (c) 2013 Tiago Amaro
 * Licensed under the MIT license.
 */

 var all_src_files = ['src/**/*.js', 'src/**/*.coffee', 'src/**/*.scss', 'src/**/*.sass'];

 module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      compile: {
        files: {
          'src/coffee_ready/js/coffee_result.js': 'src/**/*.coffee'
        }
      },
      glob_to_multiple: {
        expand: true,
        flatten: true,
        cwd: 'spec/coffee',
        src: ['*.coffee'],
        dest: 'spec/coffee_ready',
        ext: '.js'
      }
    },
    compass: {
      dist: {
        options: {
          require: ['bootstrap-sass'],
          cssDir: 'build/css',
          sassDir: 'src/css',
          imagesDir: 'images',
          fontsDir: 'fonts',
          environment: 'production',
          outputStyle: 'compressed',
          relativeAssets: true,
          noLineComments: true,
          bundleExec: true
        }
      }
    },
    jasmine: {
      comffee: {
        src: 'src/**/*.js',
        options: {
          specs: 'spec/**/*Spec.js',
          helpers: 'spec/**/*Helper.js'
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
      default: {
        files: all_src_files,
        tasks: ['default']
      },
      complete: {
        files: all_src_files,
        tasks: ['complete']
      },
      spec: {
        files: all_src_files,
        tasks: ['spec']
      }
    },
    clean: {
      project: ['build', '.sass-cache', '.grunt', 'src/coffee_ready'],
      spec: ['spec/coffee_ready', '_SpecRunner.html']
    }
  });

  // Loading plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.
  grunt.registerTask('default', ['coffee', 'uglify', 'compass']);
  grunt.registerTask('complete', ['default', 'jasmine']);
  grunt.registerTask('spec', ['jasmine']);
};