const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
 var gls = require('gulp-live-server');
 var gnf = require('gulp-npm-files');

const tscConfig = require('./tsconfig.json');


// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist');
});

// TypeScript compile
gulp.task('compile', ['clean','copyNpmDependenciesOnly'], function () {
  return gulp
    .src(['app/**/*.ts', 'typings/**/*.d.ts'])
    .pipe(sourcemaps.init()) 
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('dist/app'));
});

gulp.task('copy:libs', ['clean'], function() {
  return gulp.src([
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/systemjs/dist/system.src.js'
    ])
    .pipe(gulp.dest('dist/lib'))
});

gulp.task('copy:assets',['clean'], function(){
  return gulp.src([ 'index.html', 'styles.css', 'systemjs.config.js'])
              .pipe(gulp.dest('dist'));

});

gulp.task('copyNpmDependenciesOnly', function() {
  gulp.src(gnf(), {base:'./'}).pipe(gulp.dest('./dist'));
});

gulp.task('serve', function() {
  var server = gls.static('dist', 8888);
  server.start();
});


gulp.task('build', ['compile','copy:libs','copy:assets','serve']);
gulp.task('default', ['build']);