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
var clean = require('gulp-clean');

var path = {
    SRC_HTML: process.env.INIT_CWD + '/src/**/*.html',
    SRC_MAIN_JS: process.env.INIT_CWD + '/src/js/*.js',
    SRC_ALL_JS: process.env.INIT_CWD + '/src/**/*.js',
    SRC_IMAGES: process.env.INIT_CWD + '/src/images/*',
    DEST_ALL: process.env.INIT_CWD + '/dist/*',
    DEST_HTML: process.env.INIT_CWD + '/dist',
    DEST_JS: process.env.INIT_CWD + '/dist/js',
    DEST_IMAGES: process.env.INIT_CWD + '/dist/images',
    CDN: process.env.INIT_CWD + '/cdn'
};

gulp.task('html', [], function () {
    return gulp.src(path.SRC_HTML)
        .pipe(gulp.dest(path.DEST_HTML));
});

gulp.task('images', [], function () {
    return gulp.src(path.SRC_IMAGES)
           .pipe(imagemin({
                progressive: true
           }))
           .pipe(gulp.dest(path.DEST_IMAGES));
});

gulp.task('js', [], function() {
    return gulp.src([path.SRC_MAIN_JS]) // gulp looks for all source files under specified path
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
        server: path.DEST_HTML
    });

    gulp.watch(path.SRC_ALL_JS, ['js-watch']);
    gulp.watch(path.SRC_HTML, ['html-watch']);
});

gulp.task('clean-cdn', function () {
    return gulp.src(path.CDN, {read: false})
		.pipe(clean());
});

// add version to file names and copy to cdn/
gulp.task('cdn', ['js', 'html', 'images'], function () {
    var revAll = new RevAll();
    gulp.src(path.DEST_ALL)
        .pipe(revAll.revision())
        .pipe(gulp.dest(path.CDN));
});

gulp.task('default', ['serve']);
