module.exports = function(grunt) {

  grunt.initConfig({

    // Import package manifest
    pkg: grunt.file.readJSON("component.json"),

    // Banner definitions
    meta: {
      banner: "/*\n" +
        " *  <%= pkg.name %> - v<%= pkg.version %>\n" +
        " *  <%= pkg.description %>\n" +
        " *  http://github.com/<%= pkg.repo %>\n" +
        " *\n" +
        " *  Made by Audrey Roy Greenfeld\n" +
        " *  Under MIT License\n" +
        " */\n"
    },

    // Concat definitions
    concat: {
      dist_css: {
        src: "src/skisigns.css",
        dest: "dist/skisigns.css"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    },

    // CSS minification
    cssmin: {
      add_banner: {
        options: {
          banner: '/* skisigns by audreyr ~ https://github.com/audreyr/skisigns */'
        },
        files: {
          'dist/skisigns.min.css': ['src/skisigns.css']
        }
      }
    },

    // Start up server on 8080 and open demo
    connect: {
      server: {
        options: {
          keepalive: true,
          open: "http://127.0.0.1:8080/demo/index.html",
          port: 8080
        }
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-connect");

  grunt.registerTask("default", ["concat", "cssmin", "connect"]);
};