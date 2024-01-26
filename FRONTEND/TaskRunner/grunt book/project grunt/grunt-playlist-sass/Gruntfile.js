module.exports = function(grunt) {
    const sass = require('node-sass');

    grunt.initConfig({
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'build/scripts.js'
            },
            css: {
                src: ['css/*.css'],
                dest: 'build/styles.css'               
            }
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                     './css/styles.css': './css/sass/styles.scss'
                }
            }
        }
    
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css',['concat:css']);
    grunt.registerTask('task-sass',['sass']);
};
