/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        typescript: {
            base: {
                src: ['src/**/*.ts'],
                dest: 'gen/src/headslcddisplaycomp/lib/',
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    declaration: false
                }
            }
        },
 kevoree_registry: {
    options: {
      type: 'json',
      host: 'registry.kevoree.org',
      port: 80
    },
    src: 'kevlib.json'
  }
    });


    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-typescript');

    // Default task.
    grunt.registerTask('default', ['typescript']);

};
