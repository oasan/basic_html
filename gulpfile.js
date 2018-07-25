'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglifyjs');




// Компиляция sass
gulp.task('sass', function() {
    return gulp.src([
            'src/js/slick/slick.scss',
            'src/scss/all.scss'
        ])
    	.pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}))
        .on('error', sass.logError)
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write())
		.pipe(concat('all.css'))
        .pipe(gulp.dest('src/css'))
});


gulp.task('scripts', function() {
	return gulp.src([
            'src/js/jquery-3.1.1.min.js',
			'src/js/slick/slick.js',
			'src/js/jquery.inputmask.bundle.js',
			'src/js/form.js',
			'src/js/goto.js',
			'src/js/popup.js',
			'src/js/tabs.js',
			'src/js/toggleMore.js',
			'src/js/js.js'
		])
		.pipe(concat('all.js'))
        // .pipe(uglify())
		.pipe(gulp.dest('src'));
});



gulp.task('default', gulp.series('sass', 'scripts'));

// Наблюдение за изменением файлов
gulp.watch(['src/scss/*.scss', 'src/js/*.js'], gulp.series('sass', 'scripts'));
