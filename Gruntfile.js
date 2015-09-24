module.exports = function (grunt) {
	grunt.initConfig({						// Task configuration
		clean: {
			dist: ["dist/"]
		},
		jshint: {
			all: ['Gruntfile.js', 'WebContent/kw-directive/**/*.js', 'WebContent/modules/**/*.js']
		},
		concat: {
			dist: {
				src: ['WebContent/kw-directive/**/*.js'],
				dest: 'dist/kw-directive/scripts.js'
			},
			sample: {
				src: ['WebContent/modules/**/*.js'],
				dest: 'dist/js/app.js'
			}
		},
		uglify: {
			dist: {
				src: ['dist/js/scripts.js'],
				dest: 'dist/js/scripts.min.js'
			},
			sample: {
				src: ['dist/js/app.js'],
				dest: 'dist/js/app.min.js'
			}
		},
		copy: {
			dist: {
				expand: true,
				cwd: 'WebContent',
				src: ['kw-directive/**/*.html', 'kw-directive/**/*.css', 'index.html'],
				dest: 'dist/'
			},
			sample: {
				expand: true,
				cwd: 'WebContent',
				src: ['modules/**', 'lib/**', 'img/**', 'css/**'],
				dest: 'dist/sample/'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	// Group task together
	grunt.registerTask('dist', [
        'clean',
        'jshint',
        'concat',
        'uglify',
        'copy'
    ]);
};