var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require("gulp-util");
var webpackConfig = require("./webpack.config.js");
var named = require('vinyl-named');
var stream = require('webpack-stream');
var browserSync = require('browser-sync').create();
var RevAll = require('gulp-rev-all');
var imagemin = require('gulp-imagemin');

var path = {
    ALL_HTML: 'src/**/*.html',
    ALL_MAIN_JS: 'src/js/*.js',
    DEST_JS: 'dist/js',
    DEST: 'dist'
};

gulp.task('html', [], function () {
    return gulp.src(path.ALL_HTML)
        .pipe(gulp.dest(path.DEST));
});

gulp.task('images', [], function () {
    return gulp.src('src/images/**.*')
           .pipe(imagemin({
                progressive: true
           }))
           .pipe(gulp.dest('dist/images/'))
});

gulp.task('js', [], function() {
    return gulp.src([path.ALL_MAIN_JS]) // gulp looks for all source files under specified path
        .pipe(sourcemaps.init()) // creates a source map which would be very helpful for debugging by maintaining the actual source code structure
        .pipe(named())
        .pipe(stream(webpackConfig)) // blend in the webpack config into the source files
        .pipe(uglify())// minifies the code for better compression
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.DEST_JS));
});

//watch js and html files' change
gulp.task('js-watch', ['js'], function () {
    browserSync.reload();
});
gulp.task('html-watch', ['html'], function () {
    browserSync.reload();
});

// Static Server + watching scss/html files
gulp.task('serve', ['js', 'html', 'images'], function() {

    browserSync.init({
        server: path.DEST
    });

    gulp.watch("src/**/*.js", ['js-watch']);
    gulp.watch("src/*.html", ['html-watch']);
});

gulp.task('cdn', ['js', 'html', 'images'], function () {
    var revAll = new RevAll();
    gulp.src('dist/**')
        .pipe(revAll.revision())
        .pipe(gulp.dest('cdn'));
});

gulp.task('default', ['serve']);
