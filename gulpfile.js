var browserify = require('browserify'),
    gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    watchify = require('watchify');

var bundler = watchify(browserify({
		entries: './js/app.js',
		debug: true
	}));

gulp.task('browserify', bundle);
bundler.on('update', bundle);

function bundle() {
	return bundler.bundle()
	.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
	.pipe(uglify())
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./build/'));	
}
