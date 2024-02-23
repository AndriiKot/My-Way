module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
              stripBanners: true,
               banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
              '<%= grunt.template.today("yyyy-mm-dd") %> */',
            },
            js: {
                src: ['js/*.js'],
                dest: 'build/scripts.js'
            },
            css: {
                src: ['css/*.css'],
                dest: 'build/styles.css'               
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css',['concat:css']);
    grunt.registerTask('p', ['pkg']);
    
};
