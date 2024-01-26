module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');

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
        }
    });

    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css',['concat:css']);
    // grunt.registerTask('default' ,['concat']);
    grunt.registerTask('d', ['concat']);

};
