module.exports = function(grunt) {

	"use strict";

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		pathOrx: {
			srcStatic: "../static/src",
			distStatic: "../static/dist"
		},
		// Less
		less: {
			compile: {
				options: {
					compress: true
				},
				files: {
					"<%= pathOrx.distStatic %>/css/style.css": [
					"<%= pathOrx.srcStatic %>/less/bootstrap/bootstrap.less",
					"<%= pathOrx.srcStatic %>/less/iconic/font-awesome.less",
					"<%= pathOrx.srcStatic %>/less/fonts/fonts.less",
					"<%= pathOrx.srcStatic %>/less/app/app.less",
					"<%= pathOrx.srcStatic %>/less/theme.less"
					],
					"<%= pathOrx.distStatic %>/css/lowerIE9.css": [
					"<%= pathOrx.srcStatic %>/less/app/lowerIE9.less"
					]
				}
			}
		},
		// Concat
		concat: {
			options: {
				stripBanners: true,
				banner: "/*! Generated : " + grunt.template.today("yyyy-mm-dd") + " */\n"
			},
			app: {
				src: [
					"<%= pathOrx.srcStatic %>/js/lib/jquery.js",
					"<%= pathOrx.srcStatic %>/js/lib/bootstrap.js",
					"<%= pathOrx.distStatic %>/js/app/*",
					"<%= pathOrx.distStatic %>/js/app/app.js"
				],
				dest: "<%= pathOrx.distStatic %>/js/app.js"
			}
		},

	  uglify: {
	    options: {
	      mangle: {
	        except: ["jQuery", "Backbone"]
	      }
	    },
	    my_target: {
	      files: [{
	          expand: true,
	          cwd: "<%= pathOrx.srcStatic %>/js/app",
	          src: "**/*.js",
	          dest: "<%= pathOrx.distStatic %>/js/app"
	      }]
	    }
	  },

	  copy: {
	  	main: {
	  		files: [
	  			{ expand: true, src: ["fonts/*/*"], dest: "<%= pathOrx.distStatic %>", cwd: "<%= pathOrx.srcStatic %>/", filter: "isFile" },
	  			{ expand: true, src: ["img/*/*"], dest: "<%= pathOrx.distStatic %>", cwd: "<%= pathOrx.srcStatic %>/", filter: "isFile" }
	  		]
	  	}
	  },

		watch: {
			less: {
				files: ["<%= pathOrx.srcStatic %>/less/**/*.less"],
				tasks: ["less:compile"]
			}
		}

	});


	// Load grunt tasks from NPM packages
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task.
	grunt.registerTask("build", ["uglify", "concat:app","less","copy"]);

};
