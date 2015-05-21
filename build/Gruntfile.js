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
					//"<%= pathOrx.srcStatic %>/less/iconic/font-awesome.less",
					//"<%= pathOrx.srcStatic %>/less/fonts/fonts.less",
					"<%= pathOrx.srcStatic %>/less/app/app.less",
					"<%= pathOrx.srcStatic %>/less/theme.less"
					]
					, "<%= pathOrx.distStatic %>/css/fonts.css": ["<%= pathOrx.srcStatic %>/less/fonts/fonts.less"]
					, "<%= pathOrx.distStatic %>/css/iconic.css": ["<%= pathOrx.srcStatic %>/less/iconic/font-awesome.less"]
				}
			}
		},
		// Concat
		concat: {
			options: {
				stripBanners: true,
				banner: "/*! Generated : " + grunt.template.today("yyyy-mm-dd") + " */\n"
			},
			lib: {
				src: [
					"<%= pathOrx.srcStatic %>/js/lib/jquery.js",
					"<%= pathOrx.srcStatic %>/js/lib/bootstrap.js",
					"<%= pathOrx.srcStatic %>/js/lib/underscore.js",
					"<%= pathOrx.srcStatic %>/js/lib/backbone.js"
				],
				dest: "<%= pathOrx.distStatic %>/js/lib.min.js"
			},
			app: {
				src: [
					"<%= pathOrx.distStatic %>/js/app/collections/*.js",
					"<%= pathOrx.distStatic %>/js/app/models/*.js",
					"<%= pathOrx.distStatic %>/js/app/views/*.js",
					"<%= pathOrx.distStatic %>/js/app/app.js",
				],
				dest: "<%= pathOrx.distStatic %>/js/app.min.js"
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
	grunt.registerTask("build", ["uglify", "concat:app", "concat:lib","less","copy"]);

};
