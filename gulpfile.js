var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*'],
	replaceString: /\bgulp[\-.]/
});
var del = require('del');
var vinylPaths = require('vinyl-paths');
var runSequence = require('run-sequence');
var paths = require('./gulp.config.js');

gulp.task('watch', ['serve'], function () {
	gulp.watch(paths.source, ['build-system', browserSync.reload]).on('change', reportChange);
	gulp.watch(paths.html, ['build-html', browserSync.reload]).on('change', reportChange);
	gulp.watch(paths.scss, ['build-scss', browserSync.reload]).on('change', reportChange);
});

gulp.task('serve', ['build'], function (done) {
	browserSync({
		open: false,
		port: 9000,
		server: {
			baseDir: ['.'],
			middleware: function (req, res, next) {
				res.setHeader('Access-Control-Allow-Origin', '*');
				next();
			}
		}
	}, done);
});

gulp.task('build-system', function () {
	var typescriptCompiler = $.typescript.createProject('./tsconfig.json');

	return gulp.src(paths.source)
		.pipe($.plumber())
		.pipe($.sourcemaps.init({loadMaps: true}))
		.pipe($.typescript(typescriptCompiler))
		.pipe($.sourcemaps.write({includeContent: true}))
		//.pipe($.uglify())
		.pipe(gulp.dest(paths.output));
});

gulp.task('build-html', function () {
	return gulp.src(paths.html)
		.pipe(gulp.dest(paths.output));
});

gulp.task('build-scss', function () {
	return gulp.src(paths.mainScss)
		.pipe($.plumber())
		.pipe($.sourcemaps.init())
		.pipe($.sass()).on('error', $.sass.logError)
		//.pipe($.minify())
		.pipe(gulp.dest(paths.mainCss));
});

gulp.task('build', function (callback) {
	return runSequence('clean', ['build-system', 'build-html', 'build-scss'], callback);
});

gulp.task('clean', function () {
	return gulp.src([paths.output]).pipe(vinylPaths(del));
});

function reportChange(event) {
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}