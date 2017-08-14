module.exports = function(grunt){
    grunt.initConfig({
        ts: {
            options: {
                logConcurrentOutput: true,
                sourceMap: true,
                declaration: true
            },
            dev: {                          // a particular target
                src: ["app/**/*.ts"], // The source typescript files, http://gruntjs.com/configuring-tasks#files
                out: 'app/main.js'        // If specified, generate an out.js file which is the merged js file
            }
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: '',
                    keepalive: true,
                    open: {
                        target: 'http://localhost:8080/app/index.html#'
                    }
                }
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.registerTask("default",["ts:dev"]);
    grunt.registerTask("start",["connect:server"]);
};