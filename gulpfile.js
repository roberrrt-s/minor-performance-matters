var gulp = require('gulp');
var concat = require('gulp-concat')
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var imageminMozjpeg = require('imagemin-mozjpeg');

gulp.task('js', function() {
  return gulp.src('./public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/min'));
});

gulp.task('css', function () {
  gulp.src('./public/styles/*.css')
    .pipe(uglifycss())
    .pipe(gulp.dest('./public/styles/min'));
});

gulp.task('img', function () {
	return gulp.src('./public/images/banner/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [imageminMozjpeg({quality: 80})]
		}))
		.pipe(gulp.dest('./public/images/banner/min'));
});

gulp.task('scripts', function() {
  return gulp.src(['./public/js/min/observer.js', './lib/app.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public/js/min/'));
});

gulp.watch('./public/js/*.js', function() {
	gulp.run('default');
});

gulp.task('default', ['js', 'css', 'scripts'], function() {
});	