module.expotrs = function(grunt) {
    
    grunt.loadNpmTasks('grunt-contrid-copy');
    grunt.loadNpmTasks('grunt-contrid-concat');
    grunt.loadNpmTasks('grunt-contrid-cssmmin');
    grunt.loadNpmTasks('grunt-contrid-uglify');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.initConfig({
      
        useminPrepare: {
           html: "./app/index.html",
             options: {
                dest: 'build'
            }
        },
        usemin: {html: ['./build/index.html']},f
        copy: {
            task0: {
                src: './app/index.html',
                dest: './build/index.html'
            }
        }
    });

    grunt.registerTask('build',[
        'copy:task0',
        'useminPrepare',
        'concat',
        'ccsmin',
        'uglify',
        'usemin'
    ])
}