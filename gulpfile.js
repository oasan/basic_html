var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    concat        = require('gulp-concat'),
    cleanCSS      = require('gulp-clean-css'),
    uglify        = require('gulp-uglifyjs'),
    browserSync   = require('browser-sync'),
    gcmq          = require('gulp-group-css-media-queries'),
    notify        = require('gulp-notify'),
    htmlValidator = require('gulp-w3c-html-validator'),
    rename        = require("gulp-rename");


var srcDir      = './app';

var sass_src    = [
    srcDir + '/js/plugins/slick/slick.scss',
    srcDir + '/scss/all.scss',
];

var scripts_src = [
    srcDir + '/js/plugins/jquery-3.1.1.min.js',
    srcDir + '/js/plugins/slick/slick.js',
    srcDir + '/js/plugins/jquery.inputmask.bundle.js',
    srcDir + '/js/plugins/jquery.mobile-events.min.js',
    srcDir + '/js/plugins/lightcase/js/lightcase.js',
    srcDir + '/js/plugins/form.js',
    srcDir + '/js/plugins/goto.js',
    srcDir + '/js/plugins/popup.js',
    srcDir + '/js/plugins/notify.js',
    srcDir + '/js/plugins/tabs.js',
    srcDir + '/js/plugins/toggleMore.js',
    srcDir + '/js/js.js'
];

gulp.task('browser_sync', function() {
    browserSync({
        server: {
            baseDir: srcDir
        },
        notify: false,
        // open: false,
        online: false, // Work Offline Without Internet Connection
        // tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
    })
});


// Компиляция sass
gulp.task('sass', function() {
    return gulp.src(sass_src)
        .pipe(sass({outputStyle: 'expanded'})).on('error', notify.onError({
            message: "Error: <%= error.message %>",
            title: "Ошибка в SASS"
          }))
        .pipe(concat('all.css'))
        .pipe(gcmq())
        .pipe(cleanCSS({
            compatibility: 'ie8',
            sourceMap: false,
            rebase: false,
            level: {
                2: {
                    restructureRules: true
                }
            }
        }))
        .pipe(gulp.dest(srcDir + '/css'))
        .pipe(browserSync.stream());
});


gulp.task('scripts', function() {
    return gulp.src(scripts_src)
            .pipe(concat('all.js'))
            .pipe(gulp.dest(srcDir))
            .pipe(browserSync.stream({ stream: true }));
});


gulp.task('scripts_public', function() {
    return gulp.src(srcDir + '/all.js')
        .pipe(uglify())
        .pipe(rename("all.min.js"))
        .pipe(gulp.dest(srcDir));
});


gulp.task('html', function() {
	return gulp.src(srcDir + '/*.html')
            .pipe(htmlValidator())
            .pipe(htmlValidator.reporter())
            .pipe(browserSync.reload({ stream: true }));
});


sass_src[sass_src.length] = srcDir + '/scss/*.scss';
sass_src[sass_src.length] = srcDir + '/scss/**/*.scss';

gulp.task('watch', function() {
	gulp.watch(sass_src, gulp.parallel('sass'));
    gulp.watch(srcDir + '/js/*.js', gulp.parallel('scripts'));
	gulp.watch(srcDir + '/*.html', gulp.parallel('html'))
});

gulp.task('default', gulp.parallel('watch', 'browser_sync'));

gulp.task('public', gulp.parallel('sass', 'scripts_public'));
