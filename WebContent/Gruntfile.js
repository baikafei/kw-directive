module.exports = function (grunt) {
	grunt.initConfig({						// Task configuration
		clean: {
			dist: ["WebContent/dist/"]
		},
		jshint: {
			all: ['Gruntfile.js', 'WebContent/kw-directive/**/*.js', 'WebContent/modules/**/*.js']
		},
		concat: {
			dist: {
				src: ['WebContent/kw-directive/**/*.js'],
				dest: 'dist/js/scripts.js'
			}
		},
		uglify: {
			dist: {
				src: ['dist/js/scripts.js'],
				dest: 'dist/js/scripts.min/js'
			}
		},
		copy: {
			dist: {
				src: ['kw-directive/*', 'lib/*', 'modules/*', 'img/*', 'css/*', 'index.html'],
				dest: 'dist/'
			}
		}
	});
	
	// loading plug-in
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrub-concat');
	grunt.loadNpmTasks('grunt-contrub-uglify');
	grunt.loadNpmTasks('grunt-contrub-copy');
//	grunt.loadNpmTasks('grunt-karma');	// use this for task
	
	// Group task together
	grunt.registerTask('dist', [
        'clean',
        'jshint',
        'concat',
        'uglify',
        'copy'
    ]);
	
	/*
	 * Executing the workflow
	 * 
	 * # grunt <name of the task or workflow>
	 * 
	 * ex: run only the clean task
	 * # grunt clean
	 * 
	 * ex: call a specific task
	 * # grunt concat:dist
	 * # grunt concat:js
	 */
}