const autoprefixer = require('gulp-autoprefixer')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create();
const convertEncoding = require('gulp-convert-encoding')
const concat = require('gulp-concat')
const gulp = require('gulp')
const notify = require("gulp-notify")
const php = require('gulp-connect-php')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

const uglify = require('gulp-uglify');


const autoprefixerList = ['> 1%', 'last 2 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11'];

const browserSyncPHP = false;

// (Task): Scripts
//================================================================================
gulp.task('scripts', function() {
    return gulp.src([
		"src/js/*.js"
	])
	.pipe(sourcemaps.init())
	.pipe(concat('bundle.js'))
	.pipe(convertEncoding({from: 'iso-8859-1', to: 'utf-8'}))
	.pipe(convertEncoding({from: 'utf-8', to: 'iso-8859-1'}))
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('dist/js/'));
});

// (Task): Browser Sync
//================================================================================
gulp.task('browser-sync', function () {
	if (browserSyncPHP == true) {
		php.server({
			base: './',
			keepalive: true,
			hostname: 'localhost',
		}, function () {

			browserSync.init({
				proxy: 'localhost'
			});
		})	
	} else {
		browserSync.init({
			server: {
				baseDir: "./"
			}
		});
	}
})

// (Task): SASS
//================================================================================
gulp.task('sass', function () {
	return gulp.src([
		"src/scss/init.scss"
	])
	.pipe(sass({
		errLogToConsole: false,
	}))
	.on('error', function (err) {
		notify().write(err);
		this.emit('end');
	})
	.pipe(autoprefixer(autoprefixerList))
	.pipe(rename('style.css'))
	.pipe(gulp.dest("dist/css/"))
	.pipe(browserSync.stream())
	.pipe(notify({message: '(SASS): CSS Injection :)'}))
})

// (Task): Default
//================================================================================
gulp.task('default', ['sass', 'browser-sync', 'scripts'], function () {
	gulp.watch(["src/scss/*.scss"], ['sass'])

	gulp.watch([
		"src/js/*.js"
	], ['scripts']).on('change', function () {
		browserSync.reload();
		notify("(JS): Reload browser :)").write('');
	})
	
	gulp.watch([
		"*.php",
		"**/*.php",
		"*.html",
	]).on('change', function() {
		browserSync.reload();
		notify("(PHP || HTML): Reload browser :)").write('');
	})
})