const { series, parallel, src, dest } = require('gulp');

let ts = require('gulp-typescript');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
var zip = require('gulp-zip');
var clean = require('gulp-clean');
var publish = require('gulp-publish');

function clean(cb) {
  src('./saida/*.*', {read: false})
    .pipe(clean());
  cb();
}

function cssTranspile(cb) {
  src('./src/styles/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./src/styles/css'));
    cb();
}

function cssMinify(cb) {
    src('./src/styles/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('./dist'));
    cb();
}

function jsTranspile(cb) {
    src('./src/ts/**/*.ts').pipe(ts({
        noImplicitAny: true,
        outFile: 'output.js'
    })).pipe(dest('src/js'));
    cb();
}

function jsBundle(cb) {
  src('./saida/*.css' , './saida/*.js ')
    .pipe(zip('./projetoFinal.zip'))
    .pipe(dest('./projeto'))
  cb();
}

function jsMinify(cb) {
  pipeline( 
    src('./src/js/*.js'),
    uglify(),
    dest('./dist/js')
  );
  cb();
}

function publish(cb) {
  src('./projeto/*.zip').
    pipe(publish(cb))
    .pipe(dest('./projetoFinal'))
  cb();
}

exports.build = series(
  clean,
  parallel(
    cssTranspile,
    series(jsTranspile, jsBundle)
  ),
  parallel(cssMinify, jsMinify),
  publish
);